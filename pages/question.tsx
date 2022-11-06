import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../components/common/layout";
import { useState, useEffect } from "react";
import { QuestObject, QuizObject,  } from "../libs/quizObject";
import { JSONToOBJ } from "../libs/commons";
import { SingleChoice } from "../components/flame/question";
import { Modal } from "../components/common/modal";

const Page: NextPage = () => {
    const router = useRouter();
    const [questObj, setQuestObj] = useState<QuestObject>();
    const [quiz, setQuiz] = useState<QuizObject>();
    const [quizNum, setQuizNum] = useState<string>("/");
    const [modalText, setModalText] = useState<string>();
    const [modalFlag, setModalFlag] = useState<boolean>(false);

    // ブラウザバックの禁止

    // リロードの禁止

    // 問題のロード =========================================================
    useEffect(() => {
        const url = new URL(location.href);
        const qID:number = Number(url.searchParams.get("qID"));

        const json = window.sessionStorage.getItem("questObj");

        if (!json) {
            router.push("/error?errMsg=処理に手違いがあり読み込みが上手くいきませんでした。TOPからやり直してください。");
        } else {
            const currentQuestObj = JSONToOBJ(json);
            setQuestObj(currentQuestObj);
            if (currentQuestObj) {
                // 該当するクイズの読み込み
                var currentQuiz:QuizObject;
                currentQuiz = {
                    number: currentQuestObj.quizList[qID-1].number,
                    userAns: "",
                    time: "0",
                    score: 0,
                    type: currentQuestObj.quizList[qID-1].type,
                    paragraph: currentQuestObj.quizList[qID-1].paragraph,
                    paragraphImg: currentQuestObj.quizList[qID-1].paragraphImg,
                    choices: currentQuestObj.quizList[qID-1].choices,
                    correct: currentQuestObj.quizList[qID-1].correct,
                    correctScore: currentQuestObj.quizList[qID-1].correctScore,
                    explanation: currentQuestObj.quizList[qID-1].explanation,
                }
                setQuiz(currentQuiz);
                // 何問中何問目かの読み込み
                setQuizNum(`${qID} / ${ currentQuestObj.quizList.length }`);
            }
            // 時間計測設定をして計測開始

        }

    }, []);

    // ユーザー解答の登録とページ遷移 ==========================================
    const doAns = async(choice: string):Promise<void> => {
        console.log(choice);
        let score:number = 0;
        // 時間計測を停止

        // 正解・不正解の表示と得点
        console.log(quiz?.correctScore);
        if (quiz && choice == quiz.correct) {
            score = quiz.correctScore;
            setModalText("🎉正解🎉");
            setModalFlag(true);
        } else {
            setModalText("🤦不正解🤦");
            setModalFlag(true);
        }
        await new Promise (r => setTimeout(r, 1000));

        // LocalStorageに結果を保存
        const temp = questObj;
        const url = new URL(location.href);
        const qID:number = Number(url.searchParams.get("qID"));
        if (temp) temp.quizList[qID-1].userAns = choice;
        if (temp) temp.quizList[qID-1].score = score;
        if (temp) {
            window.sessionStorage.removeItem("questObj");
            window.sessionStorage.setItem("questObj", JSON.stringify(temp));
        }
        if (temp && temp.quizList.length > qID) {
            location.href = `/question?qID=${qID + 1}`;
            return;
        } else {
            location.href = "/post";
            return;
        }
    }

    const clses = [
        "my-4",
        "text-right text-xl font-black text-azure"
    ]
    if (quiz) {
        return (
            <Layout
                pageTitle="問題"
            >
                <div className={ clses[0] }>
                    <p className={ clses[1] }>{quizNum}</p>
                </div>
                <SingleChoice
                    paragraph={ quiz.paragraph }
                    paragraphImg = { quiz.paragraphImg }
                    choices={ quiz.choices }
                    correctScore={ quiz.correctScore }
                    type={ quiz.type }
                    correct={ quiz.correct }
                    btnFunction={ doAns }
                />
                <div>
                    <Modal
                        text={ modalText ? modalText : "" }
                        flag={ modalFlag }
                    />
                </div>
            </Layout>
        );
    } else {
        return (
            <Layout>
                
            </Layout>
        )
    }
}

export default Page;
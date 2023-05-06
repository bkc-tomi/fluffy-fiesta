import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/common/layout";
import { useState, useEffect } from "react";
import { QuestObject, QuizObject,  } from "../../libs/quizObject";
import { JSONToOBJ, ShuffleArray } from "../../libs/commons";
import { SingleChoice, MultipleChoice, SortChoice } from "../../components/flame/question";

const Page: NextPage = () => {
    const router = useRouter();
    const [questObj, setQuestObj] = useState<QuestObject>({
        username: "",
        quizList: [],
        totalTime: "",
        totalScore: 0,
    });
    const [quiz, setQuiz] = useState<QuizObject>({
        number: 0,
        userAns: [],
        time: "",
        score: 0,
        type: 0,
        paragraph: "",
        paragraphImg: "",
        choices: [],
        correct: [],
        correctScore: 0,
        explanation: "",
    });
    const [quizNum, setQuizNum] = useState<string>("/");

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
                    userAns: [],
                    time: "0",
                    score: 0,
                    type: currentQuestObj.quizList[qID-1].type,
                    paragraph: currentQuestObj.quizList[qID-1].paragraph,
                    paragraphImg: currentQuestObj.quizList[qID-1].paragraphImg,
                    choices: ShuffleArray(currentQuestObj.quizList[qID-1].choices),
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


    if (quiz) {
        switch (quiz.type) {
            case 1:
                return (
                    <Layout
                        pageTitle="問題"
                    >
                        <SingleChoice
                            questObj={ questObj }
                            quiz={ quiz }
                            quizNum={ quizNum }
                            locate="/information_society/quest"
                        />
                    </Layout>
                );

            case 2:
                return (
                    <Layout
                        pageTitle="問題"
                    >
                        <MultipleChoice
                            questObj={ questObj }
                            quiz={ quiz }
                            quizNum={ quizNum }
                            locate="/information_society/quest"
                        />
                    </Layout>
                );

            case 3:
                return (
                    <Layout
                        pageTitle="問題"
                    >
                        <SortChoice
                            questObj={ questObj }
                            quiz={ quiz }
                            quizNum={ quizNum }
                            locate="/information_society/quest"
                        />
                    </Layout>
                );

            default:
                return (
                    <Layout>
                        
                    </Layout>
                );
        }
    } else {
        return (
            <Layout>
                
            </Layout>
        );
    }
}

export default Page;
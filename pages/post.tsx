import { NextPage } from "next";
import Layout from "../components/common/layout";
import { useState, useEffect } from "react";
import { QuestObject } from "../libs/quizObject";
import { JSONToOBJ } from "../libs/commons";
import { ResultTable } from "../components/common/table";

const Page: NextPage = () => {
    const [questObj, setQuestObj] = useState<QuestObject>();

    useEffect(() => {
        // questObjectの読み込み
        const json = window.sessionStorage.getItem("questObj");
        if (json) {
            const qObj:QuestObject = JSONToOBJ(json);
            for (let i = 0; i < qObj.quizList.length; i++) {
                qObj.totalScore = qObj.totalScore + qObj.quizList[i].score;
                qObj.totalTime = qObj.totalTime + qObj.quizList[i].time;
            }
            setQuestObj(qObj);
        }
    }, []);

    if (questObj?.quizList) {
        return (
            <Layout
                pageTitle="ランキング"
            >
                <div className="flex justify-center items-center text-5xl font-bold bg-white rounded-3xl m-24 p-12 py-32">
                    <span className="text-[120px] px-12">🎊</span>
                    <span className="bg-gradient-to-br from-pink to-violet text-transparent bg-clip-text text-center font-[Bungee]">
                        SCORE<br />{ questObj.totalScore }
                    </span>
                    <span className="text-[120px] px-12">🎊</span>
                </div>
                {questObj.quizList.map(q => {
                    return (
                        <ResultTable
                            key={ q.number }
                            quizObj={q}
                        />
                    );
                })}
            </Layout>
        );
    } else {
        return (
            <Layout
                pageTitle="ランキング"
            >
                エラーが発生しました。TOPに戻ってください。
            </Layout>
        );
    }
}

export default Page;
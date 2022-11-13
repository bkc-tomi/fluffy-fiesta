import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../components/common/layout";
import { useEffect } from "react";
import { QuestObject, QuizObject, QuestionObject } from "../libs/quizObject";

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const Page: NextPage = () => {
    const router = useRouter();

    const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : "";

    useEffect(() => {
        const url = new URL(location.href);
        const questionID = url.searchParams.get("questionID");
        console.log("qID: " + questionID);
        // questionID == undefinedの時の処理 ==================
        if (questionID == undefined) {
            router.push("/error?errMsg=問題が指定されていませんでした。");
            return;
        }
        
        // サーバーから指定の問題リスト取得
        const getQuestionsFromDatabase = async() => {
            // await new Promise (r => setTimeout(r, 2000));
            // const fetchData = Dummy;
            if (!supabase) {
                // supabaseオブジェクトの定義が上手く行かなかった場合 ======================
                router.push("/error?errMsg=データベースとの接続に問題が発生しました。トップに戻ってやり直してください。");
                return;
            } else {
                const response = await supabase
                .from('random_questions')
                .select("*")
                .eq('sub_cat', questionID)
                .limit(5);
                
                if (response.error) {
                    // データベースとの接続が上手く行かなかった場合 ======================
                    router.push("/error?errMsg=データベースとの接続に問題が発生しました。トップに戻ってやり直してください。");
                    return;
                } else {
                    if (response.data.length <= 0) {
                        // questionIDが該当しない時の処理 =======================
                        router.push("/error?errMsg=該当の問題が存在しませんでした。");
                        return;
                    } else {
                        // questionIDが正しい時の処理 ==========================
                        const datas = response.data;
                        // 変数定義
                        const questObj: QuestObject = {
                            username: "",
                            quizList: [],
                            totalTime: "",
                            totalScore: 0,
                        }
                        // questObjの作成
                        for (let i = 0; i < datas.length; i++) {
                            var temp:QuizObject = {
                                number: i + 1,
                                userAns: [],
                                time: "",
                                score: 0,
                                type: datas[i].type,
                                paragraph: datas[i].paragraph,
                                paragraphImg: datas[i].paragraphImg,
                                correct: datas[i].correct,
                                choices: datas[i].choices,
                                correctScore: datas[i].correctScore,
                                explanation: datas[i].explanation,
                            }
                            questObj.quizList.push(temp);
                        }
                        // LocalStorageに保存
                        window.sessionStorage.removeItem("questObj");
                        window.sessionStorage.setItem("questObj", JSON.stringify(questObj));
                        // ページ遷移
                        router.push("/question?qID=1");
                    }
                }
            }
        }
        getQuestionsFromDatabase();
    }, []);
    
    return (
        <Layout
            pageTitle="ロード"
        >
            <div className="flex flex-col justify-center items-center h-96 w-full">
                <img src="/img/cloud_icon.svg" className="w-96 animate-bounce"/>
                <p className="animate-pulse">
                    問題を読み込んでいます。
                </p>
            </div>
        </Layout>
    );
}

export default Page;
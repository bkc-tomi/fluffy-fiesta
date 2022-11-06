/**
 * username: ユーザー名
 * quizList: 問題一覧
 * totalTime: 全体でかかった時間
 * totalScore: 全体の点数
 */
export type QuestObject = {
    username: string;
    quizList: QuizObject[];
    totalTime: string;
    totalScore: number;
}

/**
 * number: 問題番号
 * userAns: ユーザーの解答
 * time: 解答までにかかった時間
 * score: 点数
 */
export type QuizObject = {
    number: number;
    userAns: string;
    time: string;
    score: number;
} & QuestionObject

/**
 * type: 1single:択一選択, 2multiple:複数選択 , 3sort:並び替え , 4fill:穴埋め , 5fill-multiple:複数穴埋め , 6write: 筆答  
 * paragraph: 問題文  
 * choices: 選択肢  
 * correct: 正解
 * score: 配点
 */
export type QuestionObject = {
    type: number;
    paragraph: string;
    paragraphImg?: string;
    choices: string[];
    correct: string;
    correctScore: number;
    explanation?: string;
}
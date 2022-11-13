import { QuizObject } from "../../libs/quizObject";

type ColProps = {
    header: string;
    children: React.ReactNode;
    ratio: 1 | 2 | 3 | 4 | 5;
}

const TableCol:React.FC<ColProps> = ({
    header, children, ratio
}) => {
    const clses = [
        "flex flex-row mb-1 items-top",
        `basis-1/6 bg-black text-cream text-center p-1 inline`,
        `basis-5/6 p-1`,
    ]

    return (
        <div className={ clses[0] }>
            <div className={ clses[1] }>{ header }</div>
            <div className={ clses[2] }>
                { children }
            </div>
        </div>
    )
}

type ResultProps = {
    quizObj: QuizObject,
}

export const ResultTable:React.FC<ResultProps> = ({
    quizObj
}) => {
    const clses = [
        "pb-4",
        "border-b-2 mb-2 text-lg font-bold",
        "max-h-[300px] m-auto",
        "grid grid-cols-2 gap-2",
    ];
    return (
        <div className={ clses[0] }>
            <h2 className={ clses[1] }>題{ quizObj.number }問</h2>
            <TableCol header="問題" ratio={1}>
                { quizObj.paragraph }
                <img src={ quizObj.paragraphImg } className={ clses[2] } />
            </TableCol>
            <div className={ clses[3] }>
                <TableCol header="あなたの解答" ratio={2}>
                    { quizObj.type == 3 ? quizObj.userAns.join("→") : quizObj.userAns.join(", ") }
                </TableCol>
                <TableCol header="正解" ratio={2}>
                    { quizObj.type == 3 ? quizObj.correct.join("→") : quizObj.correct.join(", ") }
                </TableCol>
            </div>
            <TableCol header="得点" ratio={1}>
                { quizObj.score.toString() + "点" }
            </TableCol>
            <TableCol header="解説" ratio={1}>
                { quizObj.explanation || ""}
            </TableCol>
        </div>
    );
}
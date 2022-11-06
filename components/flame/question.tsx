import { ChoiceButton } from "../common/button";
import { QuestionObject } from "../../libs/quizObject";

export type SingleChoiceProps = {
    btnFunction: (param: string) => void;
} & QuestionObject

export const SingleChoice:React.FC<SingleChoiceProps> = ({
    paragraph, paragraphImg, choices, correctScore, btnFunction,
}) => {
    const clses = [
        "text-3xl text-azure font-black border-b-2 border-b-azure my-4",
        "text-xl font-bold my-4",
        "m-auto max-h-[400px]",
        "text-azure text-right text-xl",
        "grid grid-cols-2 gap-4",
        "flex justify-center items-center",
    ]

    return (
        <div>
            <h2 className={ clses[0] }>
                Q.
            </h2>
            <p className={ clses[1] }>{ paragraph }</p>
            <img src={ paragraphImg } className={ clses[2] }/>
            <div
                className={ clses[3] }
            >
                {"配点: " + correctScore + " 点"}
            </div>
            <h2 className={ clses[0] }>
                A.
            </h2>
            <div
                className={ clses[4] }
            >
                { choices.map(c => {
                    return (
                        <div
                            key={ c }
                            className={ clses[5] }
                        >
                            <ChoiceButton
                                btnFunction={ btnFunction }
                                value={ c }
                            >
                                { c }
                            </ChoiceButton>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
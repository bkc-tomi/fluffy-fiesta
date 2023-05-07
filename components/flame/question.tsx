import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type {
    DropResult,
    DraggingStyle,
    NotDraggingStyle,
    DroppableProvided,
    DroppableStateSnapshot,
    DraggableProvided,
    DraggableStateSnapshot
  } from "react-beautiful-dnd";

import { RadioButton, SelectBox, DoAnsButton } from "../common/button";
import { QuestObject, QuizObject } from "../../libs/quizObject";
import { ComparisonRandomOrderArray, ComparisonArray } from "../../libs/commons";
import { Modal } from "../common/modal";

export type QuizProps = {
    questObj: QuestObject;
    quiz: QuizObject;
    quizNum: string;
    locate: string;
}

/**
 * ===============================================================
 * 択一選択問題
 * ===============================================================
 */
export const SingleChoice:React.FC<QuizProps> = ({
    questObj, quiz, quizNum, locate
}) => {
    
    const [userChoice, setUserChoice] = useState<string>("");
    const [modalText, setModalText] = useState<string>();
    const [modalFlag, setModalFlag] = useState<boolean>(false);

    // 選択した回答の保持 ====================================================
    const doChoice = (choice: string):void => {
        setUserChoice(choice);
    }

    // ユーザー解答の登録とページ遷移 ==========================================
    const doAns = async():Promise<void> => {
        
        let score:number = 0;
        // 時間計測を停止

        // 正解・不正解の表示と得点
        if (quiz && userChoice == quiz.correct[0]) {
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
        if (temp) temp.quizList[qID-1].userAns = [userChoice];
        if (temp) temp.quizList[qID-1].score = score;
        if (temp) {
            window.sessionStorage.removeItem("questObj");
            window.sessionStorage.setItem("questObj", JSON.stringify(temp));
        }
        if (temp && temp.quizList.length > qID) {
            location.href = `${ locate }?qID=${qID + 1}`;
            return;
        } else {
            location.href = "/post";
            return;
        }
    }

    const clses = [
        "my-4",
        "text-right text-xl font-black text-azure",
        "text-3xl text-azure font-black border-b-2 border-b-azure my-4",
        "text-xl font-bold my-4",
        "m-auto max-h-[400px]",
        "text-azure text-right text-xl",
        "grid grid-cols-2 gap-4 my-16",
        "flex justify-center items-center",
        "pb-12",
    ];

    return (
        <div>
            <div className={ clses[0] }>
                <p className={ clses[1] }>{quizNum}</p>
            </div>
            <div>
                <h2 className={ clses[2] }>
                    Q.
                </h2>
                <p className={ clses[3] }>{ quiz.paragraph }</p>
                <img src={ quiz.paragraphImg } className={ clses[4] }/>
                <div
                    className={ clses[5] }
                >
                    {"配点: " + quiz.correctScore + " 点"}
                </div>
                <h2 className={ clses[2] }>
                    A.
                </h2>
                <div
                    className={ clses[6] }
                >
                    { quiz.choices.map(c => {
                        return (
                            <div
                                key={ c }
                                className={ clses[7] }
                            >
                                <RadioButton
                                    item={ c }
                                    val={ userChoice }
                                    doChoice={ doChoice }
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={ clses[8] }>
                    <DoAnsButton btnFunction={ doAns } />
                </div>
            </div>
            <div>
                <Modal
                    text={ modalText ? modalText : "" }
                    flag={ modalFlag }
                />
            </div>
        </div>
    )
}

/**
 * ===============================================================
 * 複数選択問題
 * ===============================================================
 */
export const MultipleChoice:React.FC<QuizProps> = ({
    questObj, quiz, quizNum, locate
}) => {

    const [itemData, setItemData] = useState(quiz.choices.map(c => {
        return { label: c, checked: false };
    }));
    const [userChoice, setUserChoice] = useState<string[]>([]);
    const [modalText, setModalText] = useState<string>();
    const [modalFlag, setModalFlag] = useState<boolean>(false);

    // 選択した回答の保持 ====================================================
    const doChoice = (choice: string):void => {
        const newItem = [...itemData];

        newItem.map(item => {
            if (item.label === choice) {
                item.checked = !item.checked;
            }
            return newItem;
        });

        // 選択した項目を更新する
        setItemData(newItem);

        // 選択した項目だけをフィルターで抜き出す
        const checkItem = newItem.filter((item) => item.checked);
        
        setUserChoice(checkItem.map(i => { return i.label}));
    }

    // ユーザー解答の登録とページ遷移 ==========================================
    const doAns = async():Promise<void> => {
        
        let score:number = 0;
        // 時間計測を停止

        // 正解・不正解の表示と得点
        if (quiz && ComparisonRandomOrderArray(userChoice, quiz.correct)) {
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
        if (temp) temp.quizList[qID-1].userAns = userChoice;
        if (temp) temp.quizList[qID-1].score = score;
        if (temp) {
            window.sessionStorage.removeItem("questObj");
            window.sessionStorage.setItem("questObj", JSON.stringify(temp));
        }
        if (temp && temp.quizList.length > qID) {
            location.href = `${ locate }?qID=${qID + 1}`;
            return;
        } else {
            location.href = "/post";
            return;
        }
    }

    const clses = [
        "my-4",
        "text-right text-xl font-black text-azure",
        "text-3xl text-azure font-black border-b-2 border-b-azure my-4",
        "text-xl font-bold my-4",
        "m-auto max-h-[400px]",
        "text-azure text-right text-xl",
        "grid grid-cols-2 gap-4 my-16",
        "flex justify-center items-center",
        "pb-12",
    ];

    return (
        <div>
            <div className={ clses[0] }>
                <p className={ clses[1] }>{quizNum}</p>
            </div>
            <div>
                <h2 className={ clses[2] }>
                    Q.
                </h2>
                <p className={ clses[3] }>{ quiz.paragraph }</p>
                <img src={ quiz.paragraphImg } className={ clses[4] }/>
                <div
                    className={ clses[5] }
                >
                    {"配点: " + quiz.correctScore + " 点"}
                </div>
                <h2 className={ clses[2] }>
                    A.
                </h2>
                <div
                    className={ clses[6] }
                >
                    { quiz.choices.map(c => {
                        return (
                            <div
                                key={ c }
                                className={ clses[7] }
                            >
                                <SelectBox
                                    item={ c }
                                    doChoice={ doChoice }
                                    vals={ userChoice }
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={ clses[8] }>
                    <DoAnsButton btnFunction={ doAns } />
                </div>
            </div>
            <div>
                <Modal
                    text={ modalText ? modalText : "" }
                    flag={ modalFlag }
                />
            </div>
        </div>
    )
}

/**
 * ===============================================================
 * 並び替え問題
 * ===============================================================
 */
type questionType = {
    id: number;
    item: string;
}

export const SortChoice:React.FC<QuizProps> = ({
    questObj, quiz, quizNum, locate
}) => {
    const [questions, setQuestions] = useState<questionType[]>(quiz.choices.map((c, index) => {
        return {id: index, item: c};
    }));
    const [userChoice, setUserChoice] = useState<string[]>(quiz.choices.map(c => { return c}));
    const [modalText, setModalText] = useState<string>();
    const [modalFlag, setModalFlag] = useState<boolean>(false);

    // ユーザー解答の登録とページ遷移 ==========================================
    const doAns = async():Promise<void> => {
        
        let score:number = 0;
        // 時間計測を停止

        // 正解・不正解の表示と得点
        if (quiz && ComparisonArray(userChoice, quiz.correct)) {
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
        if (temp) temp.quizList[qID-1].userAns = userChoice;
        if (temp) temp.quizList[qID-1].score = score;
        if (temp) {
            window.sessionStorage.removeItem("questObj");
            window.sessionStorage.setItem("questObj", JSON.stringify(temp));
        }
        if (temp && temp.quizList.length > qID) {
            location.href = `${ locate }?qID=${qID + 1}`;
            return;
        } else {
            location.href = "/post";
            return;
        }
    }

    // ドラッグ＆ドロップの設定 ====================================
    // ドラッグ&ドロップした要素を入れ替える
    const reorder = (
        list: questionType[],
        startIndex: number,
        endIndex: number
    ): questionType[] => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        console.log(result.map(r => { return r.item }));
        setUserChoice(result.map(r => { return r.item }));
        return result;
    };

    // ドラッグ&ドロップの質問のスタイル
    const getItemStyle = (
        draggableStyle: DraggingStyle | NotDraggingStyle | undefined
    ) => ({
        ...draggableStyle
    });
    const getItemClass = (
        isDragging: boolean
    ):string => {
        const stable = "block w-full px-6 py-4 rounded m-1 flex justify-between items-center text-xl";
        return isDragging
        ? `bg-azure ${ stable }`
        : `bg-cream ${ stable }`;
    }
    // ドラッグ&ドロップのリストのスタイル
    const getListClass = (isDraggingOver: boolean):string => {
        const stable = "w-full bg-butter p-4 rounded";
        return isDraggingOver
        ? `opacity-80 ${ stable }`
        : `${ stable }`;
    };

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        // 配列の順序を入れ替える
        let movedItems = reorder(
            questions, //　順序を入れ変えたい配列
            result.source.index, // 元の配列の位置
            result.destination.index // 移動先の配列の位置
        );
        setQuestions(movedItems);
    };

    const clses = [
        "my-4",
        "text-right text-xl font-black text-azure",
        "text-3xl text-azure font-black border-b-2 border-b-azure my-4",
        "text-xl font-bold my-4",
        "m-auto max-h-[400px]",
        "text-azure text-right text-xl",
        "w-full flex justify-center items-center my-16",
        "pb-12",
    ];

    return (
        <div>
            <div className={ clses[0] }>
                <p className={ clses[1] }>{quizNum}</p>
            </div>
            <div>
                <h2 className={ clses[2] }>
                    Q.
                </h2>
                <p className={ clses[3] }>{ quiz.paragraph }</p>
                <img src={ quiz.paragraphImg } className={ clses[4] }/>
                <div
                    className={ clses[5] }
                >
                    {"配点: " + quiz.correctScore + " 点"}
                </div>
                <h2 className={ clses[2] }>
                    A.
                </h2>
                <div
                    className={ clses[6] }
                >
                    <DragDropContext
                        onDragEnd={ onDragEnd }
                    >
                        <Droppable droppableId="droppable">
                            {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={getListClass(snapshot.isDraggingOver)}
                            >
                            {/*　ドラッグできる要素　*/}
                            {questions.map((question, index) => (
                                <Draggable
                                    key={question.id}
                                    draggableId={"q-" + question.id}
                                    index={index}
                                >
                                    {(
                                    provided: DraggableProvided,
                                    snapshot: DraggableStateSnapshot
                                    ) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={ getItemClass(snapshot.isDragging)}
                                        style={getItemStyle(
                                        provided.draggableProps.style
                                        )}
                                    >
                                        {question.item}
                                        <svg className="w-8 fill-butter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M17.5 40q-1.45 0-2.475-1.025Q14 37.95 14 36.5q0-1.45 1.025-2.475Q16.05 33 17.5 33q1.45 0 2.475 1.025Q21 35.05 21 36.5q0 1.45-1.025 2.475Q18.95 40 17.5 40Zm13 0q-1.45 0-2.475-1.025Q27 37.95 27 36.5q0-1.45 1.025-2.475Q29.05 33 30.5 33q1.45 0 2.475 1.025Q34 35.05 34 36.5q0 1.45-1.025 2.475Q31.95 40 30.5 40Zm-13-12.5q-1.45 0-2.475-1.025Q14 25.45 14 24q0-1.45 1.025-2.475Q16.05 20.5 17.5 20.5q1.45 0 2.475 1.025Q21 22.55 21 24q0 1.45-1.025 2.475Q18.95 27.5 17.5 27.5Zm13 0q-1.45 0-2.475-1.025Q27 25.45 27 24q0-1.45 1.025-2.475Q29.05 20.5 30.5 20.5q1.45 0 2.475 1.025Q34 22.55 34 24q0 1.45-1.025 2.475Q31.95 27.5 30.5 27.5ZM17.5 15q-1.45 0-2.475-1.025Q14 12.95 14 11.5q0-1.45 1.025-2.475Q16.05 8 17.5 8q1.45 0 2.475 1.025Q21 10.05 21 11.5q0 1.45-1.025 2.475Q18.95 15 17.5 15Zm13 0q-1.45 0-2.475-1.025Q27 12.95 27 11.5q0-1.45 1.025-2.475Q29.05 8 30.5 8q1.45 0 2.475 1.025Q34 10.05 34 11.5q0 1.45-1.025 2.475Q31.95 15 30.5 15Z"/></svg>
                                    </div>
                                    )}
                                </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
                <div className={ clses[7] }>
                    <DoAnsButton btnFunction={ doAns } />
                </div>
            </div>
            <div>
                <Modal
                    text={ modalText ? modalText : "" }
                    flag={ modalFlag }
                />
            </div>
        </div>
    )
}

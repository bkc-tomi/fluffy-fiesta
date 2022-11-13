/**
 * ===============================================================
 * 解答ボタン
 * ===============================================================
 */
export type DoAnsProps = {
    btnFunction: () => void;
}

export const DoAnsButton:React.FC<DoAnsProps> = ({
    btnFunction
}) => {
    const clses = [
        "block w-full bg-azure px-8 py-6 rounded hover:animate-bounce text-xl text-cream",
    ]
    return (
        <button
            className={ clses[0] }
            onClick={() => btnFunction()}
        >
            解答して次へ
        </button>
    );
}
/**
 * ===============================================================
 * ラジオボタン
 * ===============================================================
 */
export type radioProps = {
    item: string;
    val: string;
    doChoice: (param: string) => void;
}

export const RadioButton:React.FC<radioProps> = ({
    item, val, doChoice
}) => {
    const clses = [
        "w-full",
        "block w-full bg-cream px-8 py-6 rounded hover:bg-azure hover:opacity-80 peer-checked:border-azure peer-checked:border-4 text-xl text-black flex",
        "peer hidden",
        "w-8",
    ];

    return (
        <div className={ clses[0]}>
            <input 
                id={ item }
                className={ clses[2] }
                type="radio"
                value={item}
                onChange={(e) => doChoice(e.target.value) }
                checked={item === val}
            />
            {item === val 
                ? <label htmlFor={ item } className={ clses[1] }><div className={ clses[3] }>✅</div>{item}</label>
                : <label htmlFor={ item } className={ clses[1] }><div className={ clses[3] }></div>{item}</label>
            
            }
        </div>
    );
}

/**
 * ===============================================================
 * セレクトボタン
 * ===============================================================
 */
export type selectProps = {
    item: string;
    vals :string[];
    doChoice: (param: string) => void;
}

export const SelectBox: React.FC<selectProps> = ({
    item, doChoice, vals
}) => {

    const clses = [
        "w-full",
        "block w-full bg-cream px-8 py-6 rounded hover:bg-azure hover:opacity-80 peer-checked:border-azure peer-checked:border-4 text-xl text-black flex",
        "peer hidden",
        "w-8",
    ];

    return (
        <div className={ clses[0] }>
            <input
                type="checkbox"
                id={item}
                value={ item }
                onChange={ (e) => doChoice(e.target.value) }
                className={ clses[2] }
            />
            { vals.includes(item)
                ? <label htmlFor={ item } className={ clses[1] }><div className={ clses[3] }>✅</div>{item}</label>
                : <label htmlFor={ item } className={ clses[1] }><div className={ clses[3] }></div>{item}</label>
            
            }
        </div>
    );
}
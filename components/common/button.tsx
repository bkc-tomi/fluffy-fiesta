export type BtnProps = {
    btnFunction: (param: string) => void;
    children: React.ReactNode;
    value: string;
}

export const ChoiceButton:React.FC<BtnProps> = ({
    children, btnFunction, value
}) => {
    const clses = [
        "block w-full bg-azure px-8 py-6 rounded hover:animate-bounce text-xl text-cream",
    ]
    return (
        <button
            className={ clses[0] }
            onClick={() => btnFunction(value)}
        >
            { children }
        </button>
    );
}
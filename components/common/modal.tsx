type ModalProps = {
    text: string;
    flag: boolean;
}

export const Modal:React.FC<ModalProps> = ({
    text, flag
}) => {
    const clses = [
        "fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center z-50",
        "bg-azure text-cream p-12 rounded-lg shadow-lg w-1/2 text-center text-5xl",
    ]
    if (flag) {
        return (
            <div
                className={ clses[0] }
            >
                <div
                    className={ clses[1] }
                >
                    { text }
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}
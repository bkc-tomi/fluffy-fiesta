import Link from "next/link";

export const PageHeader:React.FC = () => {
    const clses:string[] = [
        "sticky top-0 left-0 bg-azure z-50",
        "max-w-5xl m-auto p-1 flex justify-between items-center",
        "w-32",
        "rounded-sm px-4 py-2 bg-cream hover:animate-bounce",
    ];

    return (
        <header className={ clses[0] }>
            <div className={ clses[1] }>
                <h1 className={ clses[2] }><img src="/img/logo.svg" className={ clses[2] } /></h1>
                <div>
                    <Link
                        href="/"
                    >
                        <a className={ clses[3] }>TOPに戻る</a>
                    </Link>

                </div>
            </div>
        </header>
    );
}

type h1Props = {
    children: React.ReactNode;
}

export const MyHeader1:React.FC<h1Props> = ({ children }) => {
    const clses:string[] = [
        "w-full py-4 mt-4",
        "border-b text-3xl font-black",
    ];
    return (
        <div className={ clses[0] }>
            <h1 className={ clses[1] }>
                { children }
            </h1>
        </div>
    );
}

type h2Props = {
    children: React.ReactNode,
    emoji: string,
}

export const MyHeader2:React.FC<h2Props> = ({ children, emoji }) => {
    const clses:string[] = [
        "w-full py-2 mt-4",
        "text-center text-2xl font-black",
        "text-5xl px-4",
    ];
    return (
        <div className={ clses[0] }>
            <h1 className={ clses[1] }>
                <span className={ clses[2] }>{ emoji }</span>
                { children }
                <span className={ clses[2] }>{ emoji }</span>
            </h1>
        </div>
    );
}
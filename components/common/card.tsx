import Link from "next/link";
import { useState } from "react";

export type CardProps = {
    url   : string,
    state : boolean,
    children?: React.ReactNode,
}

export type InnerCardProps = {
    emoji : string,
    title : string,
}

export const Card:React.FC<CardProps> = ({
    url, state, children
}) => {
    const [show, setShow] = useState(false);

    const clses = [
        "hover:animate-bounce",
        "opacity-60 flex flex-col justify-center items-center",
        "bg-black rounded-sm text-cream px-2 py-1 opacity-100",
        "bg-black rounded-sm text-cream px-2 py-1 opacity-0",
    ];

    if (state) {
        return (
            <Link
                href={ url }
            >
                <a className={ clses[0] }>
                { children }
                </a>
            </Link>
        );
    } else {

        return (
            <div
                className={ clses[1] }
                onMouseOver={ () => setShow(true) }
                onMouseLeave={ () => setShow(false) }
            >
                { children }
                <div className={ show ? clses[2] : clses[3] }>
                    まだ、実装されていません。
                </div>
            </div>
        );
    }
}

export const BigCard:React.FC<InnerCardProps> = ({
    emoji, title
}) => {
    const clses = [
        "p-2 flex flex-col justify-center items-center w-48",
        "p-6 rounded-2xl bg-peach text-8xl my-4",
        "font-bold text-center",
    ];

    return (
        <div
            className={ clses[0] }
        >
            <div
                className={ clses[1] }
            >
                { emoji }
            </div>
            <p className={ clses[2] }>{ title }</p>
        </div>
    );
}

export const SmallCard:React.FC<InnerCardProps> = ({
    emoji, title
}) => {
    const clses = [
        "p-2 flex flex-col justify-center items-center w-48",
        "p-6 rounded-full bg-azure text-5xl my-4",
        "font-bold text-center text-lg",
    ];

    return (
        <div
            className={ clses[0] }
        >
            <div
                className={ clses[1] }
            >
                { emoji }
            </div>
            <p className={ clses[2] }>{ title }</p>
        </div>
    );
}
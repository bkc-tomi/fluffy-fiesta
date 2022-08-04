import { BigCard, SmallCard, Card, CardProps, InnerCardProps } from "./card";

type concatCardProps = CardProps & InnerCardProps;

type CardListProps = {
    list: concatCardProps[],
}

export const BigCardList:React.FC<CardListProps> = ({
    list
}) => {
    const clses:string[] = [
        "flex flex-wrap justify-start",
        "basis-1/3 flex justify-center items-start",
    ];

    return (
        <div className={ clses[0] }>
            {list.map(l => {
                return (
                    <div 
                        className={ clses[1] }
                        key={ l.title }
                    >
                        <Card
                        url={ l.url }
                        state={ l.state }
                        >
                        <BigCard
                            emoji={ l.emoji }
                            title={ l.title }
                        />
                        </Card>
                    </div>
                );
            })}
        </div>
    );
}

export const SmallCardList:React.FC<CardListProps> = ({
    list
}) => {
    const clses:string[] = [
        "flex flex-wrap justify-center",
        "flex justify-center items-start",
    ];

    return (
        <div className={ clses[0] }>
            {list.map(l => {
                return (
                    <div 
                        className={ clses[1]} 
                        key={ l.title }
                    >
                    <Card
                        url={ l.url }
                        state={ l.state }
                    >
                        <SmallCard
                        emoji={ l.emoji }
                        title={ l.title }
                        />
                    </Card>
                    </div>
                );
            })}
        </div>
    );
}
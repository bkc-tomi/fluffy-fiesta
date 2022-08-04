import { MyHeader1 } from "../common/header";
export type RankProps = {
    rank: number,
    name: string,
    score: number,
}

const Ranking:React.FC<{rankList: RankProps[], title: string}> = ({
    rankList, title
}) => {
    const clses = [
        "px-24 py-16",
    ]
    return (
        <div>
            <MyHeader1>
                「{ title }」のランキング
            </MyHeader1>
            <ul className={ clses[0] }>
                {rankList.map(r => {
                    return (
                        <li key={r.rank}>
                            <RankCard rank={r.rank} name={r.name} score={r.score} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const RankCard: React.FC<RankProps> = ({
    rank, name, score
}) => {
    const clses = [
        "flex items-end border-b text-5xl font-bold p-2",
        "basis-1/5 text-center",
        "basis-2/5 text-3xl",
        "basis-2/5 text-3xl text-right",
    ];
    let showRank:string = String(rank);

    switch (rank) {
        case 1:
            showRank = "🥇"
            break;
        case 2:
            showRank = "🥈";
            break;
        case 3:
            showRank = "🥉";
            break;
        default:
            break;
    }

    return (
        <div className={ clses[0] }>
            <div className={ clses[1] }>{ showRank }</div>
            <div className={ clses[2] }>{ name }</div>
            <div className={ clses[3] }>{ score }</div>
        </div>
    )

}

export default Ranking;
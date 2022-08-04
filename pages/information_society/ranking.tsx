import { NextPage } from "next";
import Layout from "../../components/common/layout";
import Ranking, { RankProps } from "../../components/flame/ranking";

const Dummy: RankProps[] = [
    { rank: 1, name: "田中", score: 23.123 },
    { rank: 2, name: "佐藤", score: 22.123 },
    { rank: 3, name: "鈴木", score: 20.123 },
    { rank: 4, name: "鈴木", score: 20.123 },
    { rank: 5, name: "鈴木", score: 20.123 },
    { rank: 6, name: "鈴木", score: 20.123 },
    { rank: 7, name: "鈴木", score: 20.123 },
    { rank: 8, name: "鈴木", score: 20.123 },
    { rank: 9, name: "鈴木", score: 20.123 },
    { rank: 10, name: "鈴木", score: 20.123 },
]

const Page: NextPage = () => {

    return (
        <Layout
            pageTitle="ランキング"
        >
            <Ranking 
                rankList={ Dummy }
                title="情報社会と問題解決"
            />
        </Layout>
    );
}

export default Page;
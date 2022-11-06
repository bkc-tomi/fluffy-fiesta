import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/common/layout";

const Page: NextPage = () => {
    const router = useRouter();

    const { errMsg } = router.query;
    return (
        <Layout
            pageTitle="エラー"
        >
            { errMsg }
            <Link
                href="/"
            ><a>TOPに戻る</a></Link>
        </Layout>
    );
}

export default Page;
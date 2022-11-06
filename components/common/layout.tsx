import type { NextPage } from 'next';
import Head from "next/head";
import { PageHeader } from "./header";

type headProps = {
    children: React.ReactNode;
    pageTitle?: string;
}

const clses = [
    "w-screen min-h-screen bg-butter",
    "max-w-5xl m-auto"
];

const Layout:NextPage<headProps> = ({ children, pageTitle }) => {
    return (
        <>
            <Head>
                <title>{ process.env.NEXT_PUBLIC_SITE_NAME +" | "+ pageTitle }</title>
                <meta name="description" content={ process.env.NEXT_PUBLIC_DESCRIPTION } />
                <link rel="icon" href={ `${ process.env.NEXT_PUBLIC_BASE_PATH }/favicon.ico`} />
            </Head>
            <div className={ clses[0] }>
                <PageHeader />
                <main className={ clses[1] }>
                    { children }
                </main>
            </div>
        </>
    )
}

export default Layout;
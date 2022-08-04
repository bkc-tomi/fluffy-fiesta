import { NextPage } from "next";
import Layout from "../components/common/layout";
import { MyHeader1, MyHeader2 } from "../components/common/header";
import { BigCardList, SmallCardList } from "../components/common/flexList";

const Home: NextPage = () => {

  return (
    <Layout
      pageTitle="ホーム"
    >
      <MyHeader1>情報社会と問題解決</MyHeader1>
      <MyHeader2 emoji="🏰">
        ステージ
      </MyHeader2>
      <BigCardList 
        list={[
          { url: "/", emoji: "📰", title: "情報やメディアの特性と問題の発見・解決", state: false },
          { url: "/", emoji: "🔐", title: "情報セキュリティ", state: false },
          { url: "/", emoji: "🧑‍⚖️", title: "情報に関する法規・情報モラル", state: false },
        ]}
      />

      <MyHeader2 emoji="🏟️">
        総合問題
      </MyHeader2>
      <SmallCardList
        list={[
          { url: "/", emoji: "⚔️", title: "Quest", state: false },
          { url: "/information_society/ranking", emoji: "🏆", title: "Ranking", state: true },
        ]}
      />

      <MyHeader1>コミュニケーションと情報デザイン</MyHeader1>
      <MyHeader2 emoji="🏰">
        ステージ
      </MyHeader2>
      <BigCardList 
        list={[
          { url: "/", emoji: "", title: "", state: false },
        ]}
      />

      <MyHeader2 emoji="🏟️">
        総合問題
      </MyHeader2>
      <SmallCardList
        list={[
          { url: "/", emoji: "⚔️", title: "Quest", state: false },
          { url: "/", emoji: "🏆", title: "Ranking", state: false },
        ]}
      />

      <MyHeader1>コンピュータとプログラミング</MyHeader1>
      <MyHeader2 emoji="🏰">
        ステージ
      </MyHeader2>
      <BigCardList 
        list={[
          { url: "/", emoji: "", title: "", state: false },
        ]}
      />

      <MyHeader2 emoji="🏟️">
        総合問題
      </MyHeader2>
      <SmallCardList
        list={[
          { url: "/", emoji: "⚔️", title: "Quest", state: false },
          { url: "/", emoji: "🏆", title: "Ranking", state: false },
        ]}
      />

      <MyHeader1>情報通信ネットワークとデータ活用</MyHeader1>
      <MyHeader2 emoji="🏰">
        ステージ
      </MyHeader2>
      <BigCardList 
        list={[
          { url: "/", emoji: "", title: "", state: false },
        ]}
      />

      <MyHeader2 emoji="🏟️">
        総合問題
      </MyHeader2>
      <SmallCardList
        list={[
          { url: "/", emoji: "⚔️", title: "Quest", state: false },
          { url: "/", emoji: "🏆", title: "Ranking", state: false },
        ]}
      />

    </Layout>
  )
}

export default Home;
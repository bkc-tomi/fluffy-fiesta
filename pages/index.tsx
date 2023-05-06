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
          { url: "/load?questionID=1", emoji: "", title: "情報やメディアの特性と問題の発見・解決", state: false },
          { url: "/load?questionID=2", emoji: "", title: "情報セキュリティ", state: false },
          { url: "/load?questionID=3", emoji: "", title: "情報に関する法規・情報モラル", state: false },
          { url: "/load?questionID=4", emoji: "", title: "情報社会におけるコミュニケーションのメリット・デメリット", state: false },
          { url: "/load?questionID=5", emoji: "", title: "情報技術の発展", state: false },
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
          { url: "/load?questionID=6", emoji: "🖥️", title: "デジタルにするということ", state: true },
          { url: "/load?questionID=7", emoji: "", title: "コミュニケーションを成立させるもの", state: false },
          { url: "/load?questionID=8", emoji: "", title: "メディアとコミュニケーション、そのツール", state: false },
          { url: "/load?questionID=9", emoji: "", title: "情報をデザインすることの意味", state: false },
          { url: "/load?questionID=10", emoji: "", title: "デザインするための一連の進め方", state: false },
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
          { url: "/load?questionID=11", emoji: "📟", title: "コンピューターの仕組み", state: false },
          { url: "/load?questionID=12", emoji: "⌨️", title: "外部装置との接続", state: false },
          { url: "/load?questionID=13", emoji: "", title: "基本的プログラム", state: false },
          { url: "/load?questionID=14", emoji: "", title: "応用的プログラム", state: false },
          { url: "/load?questionID=15", emoji: "", title: "アルゴリズムの比較", state: false },
          { url: "/load?questionID=16", emoji: "", title: "確定モデルと確率モデル", state: false },
          { url: "/load?questionID=17", emoji: "", title: "自然現象のモデル化とシミュレーション", state: false },
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
          { url: "/load?questionID=18", emoji: "🌐", title: "情報通信ネットワークの仕組み", state: true },
          { url: "/load?questionID=19", emoji: "", title: "情報通信ネットワークの構築", state: false },
          { url: "/load?questionID=21", emoji: "", title: "情報システムが提供するサービス", state: false },
          { url: "/load?questionID=22", emoji: "", title: "さまざまな形式のデータとその表現形式", state: false },
          { url: "/load?questionID=23", emoji: "", title: "量的データの分析", state: false },
          { url: "/load?questionID=24", emoji: "", title: "質的データの分析", state: false },
          { url: "/load?questionID=25", emoji: "", title: "データの形式と可視化", state: false },
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
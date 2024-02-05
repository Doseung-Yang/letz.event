import Head from 'next/head'
import "@/assets/scss/style.scss";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>[와디즈] 누구나 도전하고 응원받을 수 있어요</title>
        <meta name="description" content="사전 알림 신청하고 오픈 프로모션 혜택을 받으세요 🥰" />
        <meta name="keywords" content="와디즈, wadiz, 사전 알림, 렛즈, letz, 사전 알림 신청, 프로모션, 와디즈 펀딩, 렛즈 베타 서비스 오픈, 사전 오픈 혜택" />
        <meta property="og:url" content="https://campaign.letz.team/" />
        <meta property="og:title" content="[와디즈] 누구나 도전하고 응원받을 수 있어요" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/280QbZ4j/1000-X1000.png" />
        <meta property="og:description" content="사전 알림 신청하고 오픈 프로모션 혜택을 받으세요 🥰" />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Head>
      {children}
    </>
  );
}

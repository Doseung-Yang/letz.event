import "@/assets/scss/style.scss";

export const metadata = {
  title: "와디즈 응원펀딩 서비스, 렛즈",
  description: "프리 런칭 알림 신청하고 프로모션 혜택 받으세요",
  keywords: ["와디즈", "wadiz", "사전 알림", "렛즈", "letz", "사전 알림 신청", "프로모션", "와디즈 펀딩", "렛즈 베타 서비스 오픈", "사전 오픈 혜택"],
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
      <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      <title>와디즈 응원펀딩 서비스, Letz</title>
        <meta name="description" content="와디즈 응원펀딩 서비스, 렛즈" />
        <meta name="keywords" content="와디즈, wadiz, 사전 알림, 렛즈, letz, 사전 알림 신청, 프로모션, 와디즈 펀딩, 렛즈 베타 서비스 오픈, 사전 오픈 혜택" />
        <meta property="og:url" content="https://campaign.letz.team/" />
        <meta property="og:title" content="프리 런칭 알림 신청하고 프로모션 혜택 받으세요" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/PxWxyhdh/1200-X630.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
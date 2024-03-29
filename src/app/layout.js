import "@/assets/scss/style.scss";

export const metadata = {
  title: "와디즈 팀 펀딩 서비스, 렛즈",
  description: "누구나 도전하고 응원받을 수 있어요",
  keywords: ["와디즈, wadiz, 와디즈 사전 알림 페이지, 렛즈, letz, 사전 알림 신청, 프로모션, 와디즈 펀딩, 렛즈 베타 서비스 오픈, 사전 오픈 혜택, 와디즈 렛즈, 팀 펀딩 렛즈, 와디즈 렛즈가 뭐에요?"],
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
      <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      <title>와디즈 팀 펀딩 서비스, Letz</title>
        <meta name="description" content="누구나 도전하고 응원받을 수 있어요" />
        <meta name="keywords" content="와디즈, wadiz, 와디즈 사전 알림 페이지, 렛즈, letz, 사전 알림 신청, 프로모션, 와디즈 펀딩, 렛즈 베타 서비스 오픈, 사전 오픈 혜택, 와디즈 렛즈, 팀 펀딩 렛즈, 와디즈 렛즈 시작하기" />
        <meta property="og:url" content="https://campaign.letz.team/" />
        <meta name="google-site-verification" content="9V1dRrDK350pZsg-hN3BGjuS1MjgurZvt9Tg9fQpVUY" />
        <meta property="og:title" content="와디즈 팀 펀딩 서비스, 렛즈" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/y5G74vH/1200-X630.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
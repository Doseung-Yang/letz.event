import "@/assets/scss/style.scss";

export const metadata = {
  title: "[와디즈] 누구나 도전하고 응원받을 수 있어요",
  description: "사전 알림 신청하고 오픈 프로모션 혜택을 받으세요 🥰",
  keywords: ["와디즈", "wadiz", "사전 알림", "렛즈", "letz", "사전 알림 신청", "프로모션", "와디즈 펀딩", "렛즈 베타 서비스 오픈", "사전 오픈 혜택"],
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
      <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

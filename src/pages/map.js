import React, { useRef, useEffect } from "react";

const MapPage = () => {
  const postcodeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    document.head.appendChild(script);

    script.onload = () => {
      new window.daum.Postcode({
        oncomplete: function (data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
          // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        },
      }).embed(postcodeRef.current);
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div ref={postcodeRef} />;
};

export default MapPage;

import React, { useRef, useEffect } from "react";
import '@/assets/scss/setting/_map.scss';


const MapPage = () => {
  const postcodeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    document.head.appendChild(script);

    script.onload = () => {
      new window.daum.Postcode({
        oncomplete: function (data) {
          const message = data.address;

          if (window.webkit && window.webkit.messageHandlers) {
            window.webkit.messageHandlers.iosListener.postMessage(message);
          }
        },
      }).embed(postcodeRef.current);
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div className="mapPage" ref={postcodeRef} />;
};

export default MapPage;

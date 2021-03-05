import React, { useEffect } from "react";

const useStyle = (url) => {
  useEffect(() => {
    const style = document.createElement("link");
    style.href = url;
    style.async = true;
    style.rel = "stylesheet";
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [url]);
};

export default useStyle;

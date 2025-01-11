import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const IFrame = () => {
  const location = useLocation();
  const [iframeUrl, setIfameUrl] = useState("");
  useEffect(() => {
    const { url } = location.state || {};
    setIfameUrl(url);
  }, [location.state]);
  return (<>
    <iframe  className="bm-iframe-full" src={iframeUrl}></iframe>
  </>)
}
export default IFrame;

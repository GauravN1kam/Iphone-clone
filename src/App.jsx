import Nav from "../src/components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
import { useRef } from "react";
function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();
  const handlerPreview = () => {
    webgiViewerRef.current.triggerPreview();
  };
  return (
    <div className="App">
    <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlerPreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;

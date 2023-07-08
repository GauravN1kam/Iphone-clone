import React from "react";

export default function ({ triggerPreview }) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        A display that is 2x brighter than sun.
      </span>
      <button className="button" onClick={triggerPreview}>
        Try me!
      </button>
      <button className="back-button" onClick={handleScrollTop}>
        TOP
      </button>
    </div>
  );
}

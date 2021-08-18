import React from "react";

export default function Modal({ children, open, handletoggle }) {
  return open ? (
    <>
      <div id="fixed">
        <div className="inner">
          <div id="backdrop" onClick={handletoggle}></div>
          <div id="Modal">
            <div className="content">{children}</div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

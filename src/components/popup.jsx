/* eslint-disable react/destructuring-assignment */
import React from "react";
import popup from "../styles/popup.scss";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div data-testid="custom-element" className="popup-inner">
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;

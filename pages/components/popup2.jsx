import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup trigger={<button className="button"> Open Modal</button>} modal nested>
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          {" "}
          &times;
        </button>
        <div className="header"> Modal Title</div>
        <div className="content">
          <form method="get" action="https://www.google.com/search?q=perseus">
            <input type="search" id="query" name="q" placeholder="Search..." />
            <button>Search</button>
          </form>
        </div>
      </div>
    )}
  </Popup>
);

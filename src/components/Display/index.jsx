import React from "react";

import "./style.scss";

const Display = ({ EUR, USD }) => {
  return (
    <ul className="Display">
      <li>
        <strong>EUR:</strong> {EUR}
      </li>
      <li>
        <strong>USD:</strong> {USD}
      </li>
    </ul>
  );
};

export default Display;

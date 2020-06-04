import React from "react";

import "./style.scss";

const Controls = ({ handleButton, loading }) => {
  const loader = <div className="loader" />;
  return (
    <div className="Controls">
      <button disabled={loading} onClick={handleButton}>
        {loading ? loader : "Update"}
      </button>
    </div>
  );
};

export default Controls;

import React from "react";

function Flag({ url, alt }) {
  return <img src={url} alt={`${alt} flag`} className="flag" />;
}

export default Flag;

import React from "react";

function Banner({ variant = "success", children }) {
  if (variant === "danger") {
    return <div className="sad banner">{children}</div>;
  }

  return <div className="happy banner">{children}</div>;
}

export default Banner;

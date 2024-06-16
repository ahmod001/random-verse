import React from "react";
import "../css/loader.css";

const Loader = (): React.ReactNode => {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center z-50 loader-background">
      <div className="scale-75 md:scale-100">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

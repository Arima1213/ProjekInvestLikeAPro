import { useEffect } from "react";
import { preLoaderAnim } from "./animations";
import "./preloader.css";

/*untuk animasi awal tampil*/
const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  });

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Invest </span>
        <span>Like </span>
        <span>a </span>
        <span className="text-primary">Pro</span>
      </div>
    </div>
  );
};
export default Preloader;

import eclipseStyles from "./eclipse.module.css";
export default function Eclipse() {
  return (
    <div className={`${eclipseStyles.ecllipse}`}>
      <div
        className={`${eclipseStyles.ecllipse_circle1} ${eclipseStyles.circle_ecllipse}`}
      ></div>
      {/* <div className={`${eclipseStyles.ecllipse_para}`}>
        <h4 className={`${eclipseStyles.ecllipse_header}`}>
          I need Ai Engineers
        </h4>
        Artificial intelligence (Ai) is developing and advertising right before
        our very eyes. it has aggressively integrated into ours society as it
        contributes heavily to a plethora
      </div> */}
      <div className={`container`}>
        <div
          className={`${eclipseStyles.circle_container1} ${eclipseStyles.circle_container}`}
        >
          <div
            className={`${eclipseStyles.circle1} ${eclipseStyles.circle}`}
          ></div>
        </div>
        <div
          className={`${eclipseStyles.circle_container2} ${eclipseStyles.circle_container}`}
        >
          <div
            className={`${eclipseStyles.circle2} ${eclipseStyles.circle}`}
          ></div>
        </div>
        <div
          className={`${eclipseStyles.circle_container2} ${eclipseStyles.circle_container}`}
        >
          <div
            className={`${eclipseStyles.circle3} ${eclipseStyles.circle}`}
          ></div>
        </div>
        <div
          className={`${eclipseStyles.circle_container4} ${eclipseStyles.circle_container}`}
        >
          <div
            className={`${eclipseStyles.circle4} ${eclipseStyles.circle}`}
          ></div>
        </div>
      </div>
      <div
        className={`${eclipseStyles.ecllipse_circle2} ${eclipseStyles.circle_ecllipse}`}
      ></div>
    </div>
  );
}

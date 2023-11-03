import workSectionThreeStyles from "./work-section3.module.css";

export default function WorkSectionThree() {
  return (
    <div className={workSectionThreeStyles.work_process_section3}>
      <div className={workSectionThreeStyles.work_process_section3_left}>
        <div className={workSectionThreeStyles.eclipse}>
          <p className={workSectionThreeStyles.box}>
            Implementierungsstrategie
          </p>
        </div>
      </div>
      <div
        className={workSectionThreeStyles.work_process_section3_right_container}
      >
        <div
          className={`${workSectionThreeStyles.work_process_section3_right_box1} ${workSectionThreeStyles.work_process_section3_right_box}`}
        >
          <div
            className={`${workSectionThreeStyles.work_process_section3_right_first_circle} ${workSectionThreeStyles.work_process_section3_right_circle}`}
          ></div>
          <div
            className={`${workSectionThreeStyles.work_process_section3_right_second_circle} ${workSectionThreeStyles.work_process_section3_right_circle}`}
          ></div>
          <p
            className={`${workSectionThreeStyles.work_process_section3_right_p1} ${workSectionThreeStyles.work_process_section3_right_center} ${workSectionThreeStyles.work_process_section3_right_layout}`}
          >
            <h2>Pre-Launch</h2>
            Wir nehmen die Implementierungsphase sehr ernst und entwickeln eine
            detaillierte Umsetzungsstrategie, um die schnelle und effiziente
            Einführung Ihrer Software mit minimalen Unterbrechungen Ihrer
            Geschäftstätigkeit zu gewährleisten.
          </p>
          <p
            className={`${workSectionThreeStyles.work_process_section3_right_p2} ${workSectionThreeStyles.work_process_section3_right_center} ${workSectionThreeStyles.work_process_section3_right_layout}`}
          >
            <h2>Post-Launch</h2>
            Unser Team verfügt über die erforderlichen Fähigkeiten und
            Erfahrungen, um eine breite Palette von Softwarelösungen zu
            implementieren, von mobilen Apps bis zu komplexen Webanwendungen.
            Wir liefern jedes Mal außergewöhnliche Ergebnisse und stehen für den
            erfolgreichen Abschluss Ihres Projekts.
          </p>
        </div>
        <div
          className={`${workSectionThreeStyles.work_process_section3_right_box2} ${workSectionThreeStyles.work_process_section3_right_box}`}
        ></div>
      </div>
    </div>
  );
}

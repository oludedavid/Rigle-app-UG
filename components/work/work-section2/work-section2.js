import workSectionTwoStyles from "./work-section2.module.css";

export default function WorkSectionTwo() {
  return (
    <div className={workSectionTwoStyles.work_process_section2}>
      <div className={workSectionTwoStyles.work_process_section2_left}>
        <div
          className={`${workSectionTwoStyles.box1} ${workSectionTwoStyles.box}`}
        ></div>
        <div
          className={`${workSectionTwoStyles.box2} ${workSectionTwoStyles.box}`}
        >
          <div
            className={`${workSectionTwoStyles.first_circle} ${workSectionTwoStyles.circle}`}
          ></div>
          <div
            className={`${workSectionTwoStyles.second_circle} ${workSectionTwoStyles.circle}`}
          ></div>
          <div
            className={`${workSectionTwoStyles.p1} ${workSectionTwoStyles.center} ${workSectionTwoStyles.layout}`}
          >
            <h2 className={workSectionTwoStyles.header1}>Pre-Launch</h2>
            Bei Rigle halten wir uns an einen streng geprüften Prozess, um den
            Erfolg jedes Projekts zu garantieren. Mit modernsten Technologien
            entwickeln wir Software, die Ihre Erwartungen nicht nur erfüllt,
            sondern übertrifft. Wir pflegen während der gesamten
            Entwicklungsphase eine transparente Kommunikation und bieten
            regelmäßige Updates und Fortschrittsberichte
          </div>
          <div
            className={`${workSectionTwoStyles.p2} ${workSectionTwoStyles.center} ${workSectionTwoStyles.layout}`}
          >
            <h2 className={workSectionTwoStyles.header1}>Post-Launch</h2>
            Nach Abschluss des Projekts bieten wir kontinuierliche Unterstützung
            und Wartung, um sicherzustellen, dass Ihre Software stets auf
            höchstem Niveau performt.
          </div>
        </div>
      </div>
      <div className={workSectionTwoStyles.work_process_section2_right}>
        <p className={workSectionTwoStyles.text}>Entwicklungsprozess</p>
        <div
          className={`${workSectionTwoStyles.eclipse} ${workSectionTwoStyles.box}`}
        ></div>
      </div>
    </div>
  );
}

import workSectionOneStyles from "./work-section1.module.css";

export default function WorkSectionOne() {
  return (
    <div className={workSectionOneStyles.work_process_section1}>
      <div className={workSectionOneStyles.work_process_section1_left}>
        <div className={workSectionOneStyles.eclipse}>
          <p className={workSectionOneStyles.box}>
            Starten Sie Ihr Projekt mit einem ausführlichen Gespräch
          </p>
        </div>
      </div>
      <div
        className={workSectionOneStyles.work_process_section1_right_container}
      >
        <div
          className={`${workSectionOneStyles.work_process_section1_right_box1} ${workSectionOneStyles.work_process_section1_right_box}`}
        >
          <div
            className={`${workSectionOneStyles.work_process_section1_right_first_circle} ${workSectionOneStyles.work_process_section1_right_circle}`}
          ></div>
          <div
            className={`${workSectionOneStyles.work_process_section1_right_second_circle} ${workSectionOneStyles.work_process_section1_right_circle}`}
          ></div>
          <p
            className={`${workSectionOneStyles.work_process_section1_right_p1} ${workSectionOneStyles.work_process_section1_right_center} ${workSectionOneStyles.work_process_section1_right_layout}`}
          >
            Bei Ihrer ersten Kontaktaufnahme führt unser spezialisiertes Team in
            Stuttgart eine gründliche Analyse Ihrer Projektanforderungen durch.
            Mit einem ganzheitlichen Ansatz betreiben wir umfassende Recherche,
            um die effektivsten Lösungen zu identifizieren. Mit jahrelanger
            branchenübergreifender Expertise entwickeln wir maßgeschneiderte
            Strategien, die Ihren individuellen Bedürfnissen entsprechen.
          </p>
          <p
            className={`${workSectionOneStyles.work_process_section1_right_p2} ${workSectionOneStyles.work_process_section1_right_center} ${workSectionOneStyles.work_process_section1_right_layout}`}
          >
            Das Verständnis Ihrer Projektanforderungen ist entscheidend für die
            Erzielung außergewöhnlicher Ergebnisse. Deshalb bieten wir einen
            kostenlosen Strategie-Gespräch an, in dem wir potenzielle
            Umsetzungspläne, langfristige Auswirkungen und die besten Wege zur
            Verwandlung Ihrer Idee in ein erstaunliches Produkt besprechen
          </p>
        </div>
        <div
          className={`${workSectionOneStyles.work_process_section1_right_box2} ${workSectionOneStyles.work_process_section1_right_box}`}
        ></div>
      </div>
    </div>
  );
}

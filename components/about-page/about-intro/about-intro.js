import aboutIntroStyles from "./about-intro.module.css";

export default function AboutIntroSection() {
  return (
    <div className={`${aboutIntroStyles.about_intro_container} container`}>
      <h1 className={`${aboutIntroStyles.about_intro_header}`}>
        Wir codieren Deine Idee in ein digitales Produkt
      </h1>
      <p className={`${aboutIntroStyles.about_intro_description}`}>
        Wir entwickeln digitale Produkte basierend auf KI- und Softwarelösungen.
      </p>
      <ul className={`${aboutIntroStyles.about_intro_values_box} container`}>
        <li className={`${aboutIntroStyles.values_container}`}>
          <h1 className={aboutIntroStyles.about_values_header}>
            <figure className={aboutIntroStyles.about_image_container}>
              <img
                className={aboutIntroStyles.about_values_image}
                src="../icon/agile.png"
                alt="about Logo values"
              />
            </figure>
            Agile
          </h1>
          <p className={aboutIntroStyles.about_values_description}>
            Erleben Sie eine effiziente Entwicklungsphase, die durch agile
            Methoden gekennzeichnet ist. Dies wird durch nahtlose und ständige
            Kommunikation zwischen Ihnen und unserem Expertenteam ermöglicht.
          </p>
        </li>
        <li className={`${aboutIntroStyles.values_container}`}>
          <h1 className={aboutIntroStyles.about_values_header}>
            <figure className={aboutIntroStyles.about_image_container}>
              <img
                className={aboutIntroStyles.about_values_image}
                src="../icon/tailor.png"
                alt="about Logo values"
              />
            </figure>
            Tailor Made
          </h1>
          <p className={aboutIntroStyles.about_values_description}>
            Profitieren Sie von Lösungen, die sorgfältig darauf ausgerichtet
            sind, Ihren spezifischen Anforderungen und technischen Bedingungen
            gerecht zu werden. So erhalten Sie ein Produkt, das wirklich Ihren
            Bedürfnissen entspricht.needs.
          </p>
        </li>
        <li className={`${aboutIntroStyles.values_container}`}>
          <h1 className={aboutIntroStyles.about_values_header}>
            <figure className={aboutIntroStyles.about_image_container}>
              <img
                className={aboutIntroStyles.about_values_image}
                src="../icon/star.png"
                alt="about Logo values"
              />
            </figure>
            Qualitative
          </h1>
          <p className={aboutIntroStyles.about_values_description}>
            Erhalten Sie erstklassige Servicequalität, ermöglicht durch den
            Einsatz modernster Technologien und ein Entwicklerteam mit breit
            gefächerter Expertise in verschiedenen Bereichen.
          </p>
        </li>
      </ul>
    </div>
  );
}

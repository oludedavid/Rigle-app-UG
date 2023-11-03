import workHeroStyles from "./work-hero-section.module.css";
export default function WorkHeroSection() {
  return (
    <div className={workHeroStyles.work_hero_container}>
      {/* Hero container */}
      <h1 className={workHeroStyles.work_hero_container_header}>
        How Rigle Works?
      </h1>
      <p className={workHeroStyles.work_hero_container_paragraph}>
        With our expert team and our software development associates, we would
        love to help you with our tailor-made solutions.
      </p>
      {/* button container */}
      <div className={workHeroStyles.work_hero_button_container}>
        <button
          className={`${workHeroStyles.work_hero_button1} ${workHeroStyles.work_hero_button}`}
        >
          Contact Us
        </button>
        <button
          className={`${workHeroStyles.work_hero_button2} ${workHeroStyles.work_hero_button}`}
        >
          Get Started
        </button>
      </div>
      <figure className={workHeroStyles.work_hero_banner_container}>
        <img
          className={workHeroStyles.work_hero_banner_image}
          src="../images/banner-hero-work.png"
        />
      </figure>
    </div>
  );
}

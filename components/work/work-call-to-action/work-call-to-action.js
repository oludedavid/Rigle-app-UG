import callToActionStyles from "./work-call-to-action.module.css";

export default function WorkCallToAction() {
  return (
    <div className={callToActionStyles.center}>
      <div className={callToActionStyles.work_call_to_action_container}>
        <h1 className={callToActionStyles.header}>Start Your Project Today.</h1>
        <p className={callToActionStyles.description}>
          Let's work on your project together
        </p>
        <button className={callToActionStyles.btn}>Get Started</button>
      </div>
      <h3 className={callToActionStyles.partners_header}>
        TRUSTED BY INNOVATIVE STARTUPS & PROJECTS
      </h3>
      <div className={callToActionStyles.partners}>
        <div className={callToActionStyles.partners_image_container}>
          <figure>
            <img
              className={callToActionStyles.partners_logo}
              src="../logo/work1.png"
              alt="Partner organisation logo"
            />
          </figure>
          <figure>
            <img
              className={callToActionStyles.partners_logo}
              src="../logo/work2.png"
              alt="Partner organisation logo"
            />
          </figure>
          <figure>
            <img
              className={callToActionStyles.partners_logo}
              src="../logo/work3.png"
              alt="Partner organisation logo"
            />
          </figure>
          <figure>
            <img
              className={callToActionStyles.partners_logo}
              src="../logo/work4.png"
              alt="Partner organisation logo"
            />
          </figure>
          <figure>
            <img
              className={callToActionStyles.partners_logo}
              src="../logo/work5.png"
              alt="Partner organisation logo"
            />
          </figure>
          <figure>
            <img
              className={callToActionStyles.partners_logo}
              src="../logo/work6.png"
              alt="Partner organisation logo"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

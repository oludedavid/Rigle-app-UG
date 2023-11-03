import heroStyles from "./hero.module.css";
import Link from "next/link";
import Eclipse from "../home-ecllipse/eclipse";

export default function HeroSection() {
  return (
    <>
      <div className={heroStyles.hero_container}>
        <div className={heroStyles.hero_main_box1}>
          <div className={heroStyles.hero_main_header_container}>
            <p className={heroStyles.hero_main_header_paragraph}>
              Tailormade {""}
              <span className={heroStyles.hero_aiSofwareText}>
                AI & Software {""}
              </span>
              Solutions
            </p>
          </div>
          <div className={heroStyles.hero_main_box1_description_container}>
            {/* eclipse statrd***********+ */}
            {/* <Eclipse /> */}
            <div className={heroStyles.hero_ai_definition_container}>
              {/* circle 1 */}
              <div className={heroStyles.ellipse_circle1}></div>
              <h3 className={heroStyles.hero_ai_definition_header}>
                I need Ai Engineers
              </h3>
              <p className={heroStyles.hero_ai_description_paragraph}>
                Artificial intelligence (Ai) is developing and advancing right
                before our very eyes. It has aggressively integrated into our
                society as it contributes heavily to a plethora.
              </p>
              {/* bubbles */}
              <div className={`${heroStyles.hero_bubbles_container}`}>
                <div
                  className={`${heroStyles.hero_bubbles_circle1_container} ${heroStyles.hero_circle_container}`}
                >
                  <div
                    className={`${heroStyles.hero_bubbles_circle1} ${heroStyles.hero_bubbles_circle}`}
                  ></div>
                </div>
                <div
                  className={`${heroStyles.hero_bubbles_circle2_container} ${heroStyles.hero_circle_container}`}
                >
                  <div
                    className={`${heroStyles.hero_bubbles_circle2} ${heroStyles.hero_bubbles_circle}`}
                  ></div>
                </div>
                <div
                  className={`${heroStyles.hero_bubbles_circle3_container} ${heroStyles.hero_circle_container}`}
                >
                  <div
                    className={`${heroStyles.hero_bubbles_circle3} ${heroStyles.hero_bubbles_circle}`}
                  ></div>
                </div>
                <div
                  className={`${heroStyles.hero_bubbles_circle4_container} ${heroStyles.hero_circle_container}`}
                >
                  <div
                    className={`${heroStyles.hero_bubbles_circle4} ${heroStyles.hero_bubbles_circle}`}
                  ></div>
                </div>
              </div>
              {/* circle-2 */}
              <div className={heroStyles.ellipse_circle2}></div>
            </div>
            {/* eclipse statrd******************** */}
            <div className={heroStyles.hero_call_to_action_box}>
              <p className={heroStyles.hero_call_to_action_paragraph}>
                Rigle: Dein Partner für maßgeschneiderte KI- & Softwarelösungen
              </p>
              <div className={heroStyles.hero_call_to_action_button_box}>
                <button className={heroStyles.hero_call_to_action_button1}>
                  Contact Us
                </button>
                <button className={heroStyles.hero_call_to_action_button2}>
                  Get Free Consulting
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={heroStyles.box2}>
          <img
            className={heroStyles.heroRobotImage}
            src="../images/robot.png"
            alt="AI robot image"
          />
        </div>
      </div>
    </>
  );
}

import aboutCallToActionStyles from "./about-call-to-action.module.css";
export default function AboutCallToActionSection() {
  return (
    <div className={`${aboutCallToActionStyles.containerCall}`}>
      <h1 className={`${aboutCallToActionStyles.header}`}>
        Join us and let's realize together
      </h1>
      <p1 className={`${aboutCallToActionStyles.description}`}>
        Stay informed about our latest updates and special offers
      </p1>
      <button className={`${aboutCallToActionStyles.btn}`}>Contact Us</button>
    </div>
  );
}

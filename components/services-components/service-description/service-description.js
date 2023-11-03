import serviceDescriptionStyles from "./service-description.module.css";

export default function ServiceDescriptionComponent(props) {
  return (
    <div className={serviceDescriptionStyles.container}>
      <h1 className={serviceDescriptionStyles.main_header}>{`0${props.id}`}</h1>
      <h3 className={serviceDescriptionStyles.sub_header}>{props.subHeader}</h3>
      <p className={serviceDescriptionStyles.description_para}>
        {props.descriptionPara}
      </p>
      <div className={serviceDescriptionStyles.button_container}>
        <button className={serviceDescriptionStyles.btn1}>
          I want to get started
        </button>
        <button className={serviceDescriptionStyles.btn2}>Learn More</button>
      </div>
    </div>
  );
}

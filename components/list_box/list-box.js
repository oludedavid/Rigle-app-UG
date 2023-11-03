import listBoxStyles from "./list-box.module.css";

export default function ListBoxComponent(props) {
  return (
    <div className={listBoxStyles.listBox_container}>
      <figure className={listBoxStyles.listBox_image_box}>
        <img
          className={listBoxStyles.listBox_image}
          src={props.imageSrc}
          alt={props.imageAlt}
        />
      </figure>
      <ul className={listBoxStyles.listBox_list_item_box}>
        {props.items.map((item, index) => (
          <li key={index} className={listBoxStyles.listBox_list_item}>
            <p className={listBoxStyles.listBox_list_item_description}>
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

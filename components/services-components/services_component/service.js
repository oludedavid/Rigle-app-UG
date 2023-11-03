import serviceSectionStyles from "./service.module.css";
import ListBoxComponent from "../../list_box/list-box";
import ServiceDescriptionComponent from "../service-description/service-description";

// Data for service
const dataForServiceComponent = [
  {
    id: "1",
    imageSrc: "../images/listRobot.png",
    imageAlt: " List1 Image",
    sub_header: "KI-Chatbots & KI-Lösungen",
    description_para:
      "Verwandeln Sie Ihre Kundeninteraktionen mit unseren maßgeschneiderten KI-Chatbots. Wir erstellen intelligente, reaktionsschnelle und äußerst effektive Chatbots, die als virtuelle Verkaufsassistenz im E-Commerce oder als E-Learning-Bots im Bildungsbereich dienen. Steigern Sie das Benutzererlebnis und fördern Sie die Interaktion mit unseren hochmodernen KI-Chatbot-Lösungen!",

    items: [
      "Branchenübergreifende Anpassungsfähigkeit für E-Commerce und Bildung.",
      "Schnelle Implementierung mit modularen, skalierbaren Designs.",
      "Verbesserte Benutzerbindung durch Natural Language Processing.",
    ],
  },
  {
    id: "2",
    imageSrc: "../images/phoneList.png",
    imageAlt: "List2 image",
    sub_header: "Mobile Apps",
    description_para:
      "Verwandeln Sie Ihre Ideen in außergewöhnliche mobile Anwendungen mit unseren spezialisierten Dienstleistungen in der React Native-Entwicklung. Wir erstellen schnelle, flexible und leistungsstarke Apps, die nahtlos auf iOS- und Android-Geräten funktionieren. Machen Sie Ihre Vision mit unseren hochwertigen React Native-Lösungen zur Realität.",

    items: [
      "Plattformübergreifende Kompatibilität für iOS und Android.",
      "Effiziente Entwicklungszyklen durch wiederverwendbare Komponenten.",
      "Optimierte Leistung für eine nahtlose Benutzererfahrung.",
    ],
  },
  {
    id: "3",
    imageSrc: "../images/pcList.png",
    imageAlt: "List3 image",
    sub_header: "Web Apps",
    description_para:
      "Steigern Sie Ihre Online-Präsenz mit unseren Dienstleistungen zur Webanwendungsentwicklung. Wir sind spezialisiert auf die Gestaltung und Implementierung von hochfunktionalen Web-Apps, Dashboards, Admin-Panels und integrierten Web-Systemen. Mit unseren maßgeschneiderten Lösungen unterstützen wir Sie dabei, Ihre strategischen Ziele zu erreichen und sich im heutigen digitalen Marktumfeld abzuheben.",

    items: [
      "Benutzeroberflächengestaltung für ein unvergleichliches Benutzererlebnis.",
      "Nahtlose Integrationsmöglichkeiten mit Diensten Dritter und APIs.",
      "Verstärkte Sicherheitsprotokolle zum Schutz sensibler Daten und zur Gewährleistung der Compliance.",
    ],
  },
];

export default function ServiceSection() {
  return (
    <div id="service" className={serviceSectionStyles.serviceSection_container}>
      <h3 className={serviceSectionStyles.service_header}>Service</h3>
      {dataForServiceComponent.map((item, index) => (
        <div
          key={item.id}
          className={serviceSectionStyles.serviceRenderedContainer}
        >
          {
            /*  segment 1 */
            index === 0 && (
              <div className={serviceSectionStyles.serviceRenderedBox}>
                <ListBoxComponent
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  items={item.items}
                />
                <ServiceDescriptionComponent
                  id={item.id}
                  subHeader={item.sub_header}
                  descriptionPara={item.description_para}
                />
              </div>
            )
          }

          {
            /* segment 2 */
            index === 1 && (
              <div className={serviceSectionStyles.serviceRenderedBox}>
                <ServiceDescriptionComponent
                  id={item.id}
                  subHeader={item.sub_header}
                  descriptionPara={item.description_para}
                />
                <ListBoxComponent
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  items={item.items}
                />
              </div>
            )
          }

          {
            /* segment 3 */
            index === 2 && (
              <div className={serviceSectionStyles.serviceRenderedBox}>
                <ListBoxComponent
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  items={item.items}
                />
                <ServiceDescriptionComponent
                  id={item.id}
                  subHeader={item.sub_header}
                  descriptionPara={item.description_para}
                />
              </div>
            )
          }
        </div>
      ))}
    </div>
  );
}

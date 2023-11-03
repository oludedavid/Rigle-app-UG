import faqAccordionStyles from "./faq-accordion.module.css";
export default function FaqAccordion() {
  return (
    <div className={`container ${faqAccordionStyles.accordion_container}`}>
      <div
        className={`accordion container accordion-flush ${faqAccordionStyles.custom_accordion} `}
        id="faq"
      >
        <div
          className={`accordion-item ${faqAccordionStyles.custom_accordion_item}`}
        >
          <h2
            className={`accordion-header ${faqAccordionStyles.custom_accordion_header}`}
          >
            <button
              className={`accordion-button ${faqAccordionStyles.custom_accordion_button}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
              aria-expanded="true"
              aria-controls="faq1"
            >
              In welchen Dienstleistungen sind Sie spezialisiert?
            </button>
          </h2>
          <div
            id="faq1"
            class="accordion-collapse collapse show"
            data-bs-parent="#faq"
          >
            <div className={`accordion-body ${faqAccordionStyles.custom_body}`}>
              Wir sind spezialisiert auf die Bereitstellung von KI- und
              Softwarelösungen, einschließlich virtueller Verkaufsassistenz für
              den E-Commerce und E-Learning-Bots für den Bildungsbereich.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item ${faqAccordionStyles.custom_accordion_item}`}
        >
          <h2
            className={`accordion-header ${faqAccordionStyles.custom_accordion_header}`}
          >
            <button
              className={`accordion-button collapsed ${faqAccordionStyles.custom_accordion_button}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
              aria-expanded="false"
              aria-controls="faq2"
            >
              Bieten Sie maßgeschneiderte Lösungen an?
            </button>
          </h2>
          <div
            id="faq2"
            className={`accordion-collapse collapse`}
            data-bs-parent="#faq"
          >
            <div className={`accordion-body ${faqAccordionStyles.custom_body}`}>
              Wir sind spezialisiert auf die Bereitstellung von KI- und
              Softwarelösungen, einschließlich virtueller Verkaufsassistenz für
              den E-Commerce und E-Learning-Bots für den Bildungsbereich.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item ${faqAccordionStyles.custom_accordion_item}`}
        >
          <h2
            className={`accordion-header ${faqAccordionStyles.custom_accordion_header}`}
          >
            <button
              className={`accordion-button collapsed ${faqAccordionStyles.custom_accordion_button}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
              aria-expanded="false"
              aria-controls="faq3"
            >
              Wie ist der typische Zeitrahmen für ein Projekt?
            </button>
          </h2>
          <div
            id="faq3"
            className={`accordion-collapse collapse`}
            data-bs-parent="#faq"
          >
            <div className={`accordion-body ${faqAccordionStyles.custom_body}`}>
              Wir sind spezialisiert auf die Bereitstellung von KI- und
              Softwarelösungen, einschließlich virtueller Verkaufsassistenz für
              den E-Commerce und E-Learning-Bots für den Bildungsbereich.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item ${faqAccordionStyles.custom_accordion_item}`}
        >
          <h2
            className={`accordion-header ${faqAccordionStyles.custom_accordion_header}`}
          >
            <button
              className={`accordion-button collapsed ${faqAccordionStyles.custom_accordion_button}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
              aria-expanded="false"
              aria-controls="faq4"
            >
              Welche Technologien setzen Sie ein?
            </button>
          </h2>
          <div
            id="faq4"
            className={`accordion-collapse collapse`}
            data-bs-parent="#faq"
          >
            <div className={`accordion-body ${faqAccordionStyles.custom_body}`}>
              Wir sind spezialisiert auf die Bereitstellung von KI- und
              Softwarelösungen, einschließlich virtueller Verkaufsassistenz für
              den E-Commerce und E-Learning-Bots für den Bildungsbereich.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item ${faqAccordionStyles.custom_accordion_item}`}
        >
          <h2
            className={`accordion-header ${faqAccordionStyles.custom_accordion_header}`}
          >
            <button
              className={`accordion-button collapsed ${faqAccordionStyles.custom_accordion_button}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
              aria-expanded="false"
              aria-controls="faq5"
            >
              Wie stellen Sie eine kontinuierliche Unterstützung und Wartung
              sicher?
            </button>
          </h2>
          <div
            id="faq5"
            className={`accordion-collapse collapse`}
            data-bs-parent="#faq"
          >
            <div className={`accordion-body ${faqAccordionStyles.custom_body}`}>
              Wir sind spezialisiert auf die Bereitstellung von KI- und
              Softwarelösungen, einschließlich virtueller Verkaufsassistenz für
              den E-Commerce und E-Learning-Bots für den Bildungsbereich.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item ${faqAccordionStyles.custom_accordion_item}`}
        >
          <h2
            className={`accordion-header ${faqAccordionStyles.custom_accordion_header}`}
          >
            <button
              className={`accordion-button collapsed ${faqAccordionStyles.custom_accordion_button}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq6"
              aria-expanded="false"
              aria-controls="faq6"
            >
              Welche Maßnahmen ergreifen Sie, um die Qualität sicherzustellen?
            </button>
          </h2>
          <div
            id="faq6"
            className={`accordion-collapse collapse`}
            data-bs-parent="#faq"
          >
            <div className={`accordion-body ${faqAccordionStyles.custom_body}`}>
              Wir sind spezialisiert auf die Bereitstellung von KI- und
              Softwarelösungen, einschließlich virtueller Verkaufsassistenz für
              den E-Commerce und E-Learning-Bots für den Bildungsbereich.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item ${faqAccordionStyles.custom_accordion_item}`}
        >
          <h2
            className={`accordion-header ${faqAccordionStyles.custom_accordion_header}`}
          >
            <button
              className={`accordion-button collapsed ${faqAccordionStyles.custom_accordion_button}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq7"
              aria-expanded="false"
              aria-controls="faq7"
            >
              Wie kann ich ein Projekt mit Ihnen starten?
            </button>
          </h2>
          <div
            id="faq7"
            className={`accordion-collapse collapse`}
            data-bs-parent="#faq"
          >
            <div className={`accordion-body ${faqAccordionStyles.custom_body}`}>
              Wir sind spezialisiert auf die Bereitstellung von KI- und
              Softwarelösungen, einschließlich virtueller Verkaufsassistenz für
              den E-Commerce und E-Learning-Bots für den Bildungsbereich.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item ${faqAccordionStyles.custom_accordion_item}`}
        >
          <h2
            className={`accordion-header ${faqAccordionStyles.custom_accordion_header}`}
          >
            <button
              className={`accordion-button collapsed ${faqAccordionStyles.custom_accordion_button}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq8"
              aria-expanded="false"
              aria-controls="faq8"
            >
              Wie verwalten Sie Projekte und Kommunikation?
            </button>
          </h2>
          <div
            id="faq8"
            className={`accordion-collapse collapse`}
            data-bs-parent="#faq"
          >
            <div className={`accordion-body ${faqAccordionStyles.custom_body}`}>
              Wir sind spezialisiert auf die Bereitstellung von KI- und
              Softwarelösungen, einschließlich virtueller Verkaufsassistenz für
              den E-Commerce und E-Learning-Bots für den Bildungsbereich.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item ${faqAccordionStyles.custom_accordion_item}`}
        >
          <h2
            className={`accordion-header ${faqAccordionStyles.custom_accordion_header}`}
          >
            <button
              className={`accordion-button collapsed ${faqAccordionStyles.custom_accordion_button}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq9"
              aria-expanded="false"
              aria-controls="faq9"
            >
              Wie ist Ihr Preismodell?
            </button>
          </h2>
          <div
            id="faq9"
            className={`accordion-collapse collapse`}
            data-bs-parent="#faq"
          >
            <div className={`accordion-body ${faqAccordionStyles.custom_body}`}>
              Wir sind spezialisiert auf die Bereitstellung von KI- und
              Softwarelösungen, einschließlich virtueller Verkaufsassistenz für
              den E-Commerce und E-Learning-Bots für den Bildungsbereich.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

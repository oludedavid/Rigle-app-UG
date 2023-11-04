import contactHeaderStyle from "./contact-header.module.css";
export default function ContactHeader() {
  return (
    <div className={`${contactHeaderStyle.contactHeaderContainer}`}>
      <h1 className={`${contactHeaderStyle.contactHeaderMainHeading}`}>
        Lass unsgemeinsam starten
      </h1>
      <p className={`${contactHeaderStyle.contactDescription} p-3`}>
        Wir helfen Dir, Deine großartige Ideen in erstaunliche Produkte zu
        verwandeln.
      </p>
      <section
        className={`${contactHeaderStyle.contactQuoteContainer} d-flex mt-3 pt-5 g-3`}
      >
        <h2 className={`${contactHeaderStyle.contactQuoteComma}`}>“</h2>
        <p className={`${contactHeaderStyle.contactQuoteWords} pt-3`}>
          Hallo 👋, ich bin hier, um Dir zu helfen, Deine Ideen in
          branchenführende Produkte zu verwandeln. Kontaktiere mich einfach!
        </p>
      </section>
      <section className={`${contactHeaderStyle.profileContainer} d-flex g-2`}>
        <figure className={`${contactHeaderStyle.imageContainer}`}>
          <img
            className={`${contactHeaderStyle.imageItem}`}
            src="../images/franz.png"
          />
        </figure>
        <section className={`${contactHeaderStyle.profileNameContainer}`}>
          <div className="d-flex">
            <h1 className={`${contactHeaderStyle.profileFirstName} mx-2`}>
              Franz
            </h1>
            <h1 className={`${contactHeaderStyle.profileLastName}`}>Nkemaka</h1>
          </div>

          <h2 className={`${contactHeaderStyle.profilePosition}`}>
            CEO & Founder @Rigle
          </h2>
        </section>
      </section>
    </div>
  );
}

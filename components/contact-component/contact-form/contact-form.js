import contactFormStyles from "./contact-form.module.css";

export default function ContactForm() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form className={`${contactFormStyles.formContainer} row g-3`}>
        <div
          className={`${contactFormStyles.formBox} ${contactFormStyles.formBox1} col-md-6`}
        >
          <label
            htmlFor="customerEmailAddress"
            className={`${contactFormStyles.formLabel} form-label`}
          >
            DEINE E-MAIL
          </label>
          <input
            className={`${contactFormStyles.formInput} ${contactFormStyles.formInputSize} form-control`}
            type="email"
            name="customer_email_Address"
            id="customerEmailAddress"
            placeholder="Max@mustermann.de"
          />
        </div>

        <div
          className={`${contactFormStyles.formBox} ${contactFormStyles.formBox2} col-md-6`}
        >
          <label
            htmlFor="customerEmailAddress"
            className={`${contactFormStyles.formLabel} form-label`}
          >
            DEINE NAME
          </label>
          <input
            className={`${contactFormStyles.formInput} ${contactFormStyles.formInputSize} form-control`}
            type="text"
            name="customer_name"
            id="customerName"
            placeholder="Max Mustermann"
          />
        </div>

        <div
          className={`${contactFormStyles.formBox} ${contactFormStyles.formBox3} col-md-6`}
        >
          <label
            htmlFor="customerService"
            className={`${contactFormStyles.formLabel} form-label`}
          >
            DIENSTLEISTUNG
          </label>
          <select
            name="customer_service"
            id="customerService"
            className={`${contactFormStyles.formSelect} ${contactFormStyles.formInputSize} form-select`}
            style={{
              color: "#999",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "137.193%",
              textTransform: "capitalize",
            }}
          >
            <option value="automation">AI/Automation</option>
            <option value="web_development">Web Development</option>
            <option value="app_development">App Development</option>
            <option value="script">Script</option>
            <option value="it_Support">IT Support</option>
          </select>
        </div>

        <div
          className={`${contactFormStyles.formBox} ${contactFormStyles.formBox4} col-md-6`}
        >
          <label
            htmlFor="budget"
            className={`${contactFormStyles.formLabel} form-label`}
          >
            BUDGET
          </label>
          <select
            name="customer_budget"
            id="budget"
            className={`${contactFormStyles.formSelect} ${contactFormStyles.formInputSize} form-select`}
            style={{
              color: "#999",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "137.193%",
              textTransform: "capitalize",
            }}
          >
            <option value="budget1">1.000€ - 5.000€</option>
            <option value="budget2">5.000€ - 10.000€</option>
            <option value="budget3">10.000€ - 20.000€</option>
            <option value="budget4">20.000€ - 50.000€</option>
            <option value="budget5">50.000€</option>
          </select>
        </div>

        <div className="col-12">
          <label
            htmlFor="description"
            className={`${contactFormStyles.formLabel} ${contactFormStyles.formLabelTextArea} form-label`}
          >
            WIE KÖNNEN WIR DIR HELFEN?
          </label>
          <textarea
            id="description"
            name="customer_description"
            rows="3"
            placeholder="Welche Idee möchtest du heute umsetzen?"
            className={`${contactFormStyles.formTextArea} form-control`}
          ></textarea>
        </div>

        <div className="col-12 d-flex justify-content-end">
          <button type="submit" className={`${contactFormStyles.formBtn} btn`}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

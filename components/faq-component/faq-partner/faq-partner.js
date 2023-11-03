import faqPartnersStyles from "./faq-partner.module.css";

export default function FaqPartner() {
  return (
    <div>
      <p className={faqPartnersStyles.PartnerOrganisation_header}>
        Trusted by great companies
      </p>
      <div className={`${faqPartnersStyles.partnerSection_container} `}>
        <ul className={faqPartnersStyles.partnerSection_list_container}>
          <li>
            <img
              className={faqPartnersStyles.PartnerOrganisation_logo}
              src="../images/company1.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={faqPartnersStyles.PartnerOrganisation_logo}
              src="../images/company2.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={faqPartnersStyles.PartnerOrganisation_logo}
              src="../images/company3.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={faqPartnersStyles.PartnerOrganisation_logo}
              src="../images/company4.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={faqPartnersStyles.PartnerOrganisation_logo}
              src="../images/company5.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={faqPartnersStyles.PartnerOrganisation_logo}
              src="../images/company6.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={faqPartnersStyles.PartnerOrganisation_logo}
              src="../images/company7.png"
              alt="Partner organisation logo"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

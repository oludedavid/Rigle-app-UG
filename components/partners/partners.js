import partnerStyles from "./partners.module.css";

export default function PartnerOrganisations() {
  return (
    <>
      <p className={partnerStyles.PartnerOrganisation_header}>
        Trusted by great companies
      </p>
      <div className={partnerStyles.partnerSection_container}>
        <ul className={partnerStyles.partnerSection_list_container}>
          <li>
            <img
              className={partnerStyles.PartnerOrganisation_logo}
              src="../images/company1.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={partnerStyles.PartnerOrganisation_logo}
              src="../images/company2.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={partnerStyles.PartnerOrganisation_logo}
              src="../images/company3.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={partnerStyles.PartnerOrganisation_logo}
              src="../images/company4.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={partnerStyles.PartnerOrganisation_logo}
              src="../images/company5.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={partnerStyles.PartnerOrganisation_logo}
              src="../images/company6.png"
              alt="Partner organisation logo"
            />
          </li>
          <li>
            <img
              className={partnerStyles.PartnerOrganisation_logo}
              src="../images/company7.png"
              alt="Partner organisation logo"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

import Link from "next/link";
import mainFooterStyles from "./main-footer.module.css";

export default function MainFooter() {
  return (
    <div>
      <footer className={mainFooterStyles.footer_container}>
        <nav className={mainFooterStyles.footer_logoBox}>
          <Link href="/">
            <img
              className={mainFooterStyles.footer_logo_image}
              src="../logo/logo1.png"
              alt="Rigle Footer Logo"
            />
          </Link>
        </nav>
        {/* About the company */}
        <nav className={mainFooterStyles.footer_box}>
          <ul className={mainFooterStyles.footer_box_list_container}>
            <h1 className={mainFooterStyles.footer_box_header}>Rigle</h1>
            <li className={mainFooterStyles.footer_box_list_items}>
              <Link className={mainFooterStyles.footer_link} href="/about">
                About
              </Link>
            </li>
            <li className={mainFooterStyles.footer_box_list_items}>
              <Link className={mainFooterStyles.footer_link} href="/mission">
                Our Mission
              </Link>
            </li>
          </ul>
        </nav>
        {/* Work and Services */}
        <nav className={mainFooterStyles.footer_box}>
          <ul className={mainFooterStyles.footer_box_list_container}>
            <h1 className={mainFooterStyles.footer_box_header}>Company</h1>
            <li className={mainFooterStyles.footer_box_list_items}>
              <Link className={mainFooterStyles.footer_link} href="/work">
                How we Work
              </Link>
            </li>
            <li className={mainFooterStyles.footer_box_list_items}>
              <Link className={mainFooterStyles.footer_link} href="/services">
                Services
              </Link>
            </li>
            <li className={mainFooterStyles.footer_box_list_items}>
              <Link className={mainFooterStyles.footer_link} href="/faq">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
        {/* Legal Notification */}
        <nav className={mainFooterStyles.footer_box}>
          <ul className={mainFooterStyles.footer_box_list_container}>
            <h1 className={mainFooterStyles.footer_box_header}>Legal</h1>
            <li className={mainFooterStyles.footer_box_list_items}>
              <Link className={mainFooterStyles.footer_link} href="/imprint">
                Imprint
              </Link>
            </li>
            <li className={mainFooterStyles.footer_box_list_items}>
              <Link className={mainFooterStyles.footer_link} href="/privacy">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
        {/* Contact and Social media */}
        <nav className={mainFooterStyles.footer_box}>
          <ul className={mainFooterStyles.footer_box_list_container}>
            <h1 className={mainFooterStyles.footer_box_header}>
              Connect with Us
            </h1>
            <li className={mainFooterStyles.footer_box_list_items}>
              <Link className={mainFooterStyles.footer_link} href="/imprint">
                Imprint
              </Link>
            </li>
            <li className={mainFooterStyles.footer_box_list_items}>
              <Link className={mainFooterStyles.footer_link} href="/privacy">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
      <p className={mainFooterStyles.copyright}>
        &copy; <em id="date"></em> 2023 Rigle UG. All rights reserved
      </p>
    </div>
  );
}

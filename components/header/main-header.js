import Link from "next/link";
import mainHeaderStyles from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={mainHeaderStyles.header_container}>
      <div className={mainHeaderStyles.header_logo_container}>
        <Link className={mainHeaderStyles.header_logo_link} href="/">
          <img
            className={mainHeaderStyles.header_logo_image}
            src="../logo/logo1.png"
            alt="Rigle Header Logo"
          />
        </Link>
      </div>
      <nav className={mainHeaderStyles.header_navigationBar_container}>
        <ul className={mainHeaderStyles.header_navigationBar_listContainer}>
          <li
            className={
              mainHeaderStyles.header_navigationBar_listContainer_items
            }
          >
            <Link
              className={mainHeaderStyles.header_navigationBar_links}
              href="/"
            >
              Home
            </Link>
          </li>
          <li
            className={
              mainHeaderStyles.header_navigationBar_listContainer_items
            }
          >
            <Link
              className={mainHeaderStyles.header_navigationBar_links}
              href="/services"
            >
              Services
            </Link>
          </li>
          <li
            className={
              mainHeaderStyles.header_navigationBar_listContainer_items
            }
          >
            <Link
              className={mainHeaderStyles.header_navigationBar_links}
              href="/work"
            >
              How We Work
            </Link>
          </li>
          <li
            className={
              mainHeaderStyles.header_navigationBar_listContainer_items
            }
          >
            <Link
              className={mainHeaderStyles.header_navigationBar_links}
              href="/faq"
            >
              FAQ
            </Link>
          </li>
          <li
            className={
              mainHeaderStyles.header_navigationBar_listContainer_items
            }
          >
            <Link
              className={mainHeaderStyles.header_navigationBar_links}
              href="/about"
            >
              About
            </Link>
          </li>
          <li
            className={
              mainHeaderStyles.header_navigationBar_listContainer_items
            }
          >
            <img
              className={mainHeaderStyles.header_deutsch_flag}
              src="../logo/language1.png"
              alt="Deutsche Flag Icon"
            />
            <Link
              className={mainHeaderStyles.header_navigationBar_links}
              href="#"
            >
              Deutsch
            </Link>
          </li>
          <li
            className={
              mainHeaderStyles.header_navigationBar_contact_link_container
            }
          >
            <Link
              className={mainHeaderStyles.header_navigationBar_contact_link}
              href="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

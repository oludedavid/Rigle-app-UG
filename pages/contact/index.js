import ContactForm from "@/components/contact-component/contact-form/contact-form";
import ContactHeader from "@/components/contact-component/contact-header/contact-header";
import contactStyles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={`${contactStyles.contactContainer} containers`}>
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

import FaqAccordion from "@/components/faq-component/faq-accordion/faq-accordion";
import FaqHeader from "@/components/faq-component/faq-header/faq-header";
import FaqPartner from "@/components/faq-component/faq-partner/faq-partner";
import FaqStyles from "./faq.module.css";

export default function FrequentlyAskedQuestionPage() {
  return (
    <div className={`${FaqStyles.faq_main_body}`}>
      <FaqHeader />
      <FaqAccordion />
      <FaqPartner />
    </div>
  );
}

import HeroSection from "@/components/hero/hero";
import PartnerOrganisations from "@/components/partners/partners";
import ServiceSection from "@/components/services-components/services_component/service";
import homePageStyles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={homePageStyles.homepage_container}>
      <HeroSection />
      <PartnerOrganisations />
      <ServiceSection />
    </div>
  );
}

import workPageStyles from "./work.module.css";
import WorkHeroSection from "@/components/work/work-hero-section/work-hero-section";
import WorkSectionOne from "@/components/work/work-section1/work-section1";
import WorkSectionTwo from "@/components/work/work-section2/work-section2";
import WorkSectionThree from "@/components/work/work-section3/work-section3";
import WorkCallToAction from "@/components/work/work-call-to-action/work-call-to-action";

export default function HowWeWorkPage() {
  return (
    <div className={workPageStyles.work_container}>
      <WorkHeroSection />
      {/* How we work */}
      <div className={workPageStyles.work_process_container}>
        {/* section 1 */}
        <WorkSectionOne />
        {/* section 2 */}
        <WorkSectionTwo />
        {/* section 3 */}
        <WorkSectionThree />
      </div>
      {/* call to action */}
      <WorkCallToAction />
    </div>
  );
}

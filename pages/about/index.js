import aboutStyles from "./about.module.css";
import AboutIntroSection from "@/components/about-page/about-intro/about-intro";
import AboutBodySection from "@/components/about-page/about-body/about-body";
import AboutCallToActionSection from "@/components/about-page/about-call-to-action/about-call-to-action";
import { useState } from "react";
const teamAtRigleProfileData = {
  managementTeam: [
    {
      id: "1",
      title: "Lead B2B",
      titleDescription: "Head of Customer Representatives Bamberg",
      firstName: "Nico",
      lastName: "Reichl",
      imageUrl: "../images/profile1.png",
      imageAlt: "Management",
      imageSize: {
        imageWidth: 211,
        imageHeight: 211,
      },
    },
    {
      id: "2",
      title: "CEO & Founder ",
      titleDescription: "Head of Project Management, Full Stack Developer",
      firstName: "Franz",
      lastName: "Nkemaka",
      imageUrl: "../images/franz.png",
      imageAlt: "Management",
      imageSize: {
        imageWidth: 225,
        imageHeight: 225,
      },
    },
    {
      id: "3",
      title: "Co-Founder",
      titleDescription: "Head of Customer Success",
      firstName: "Oumar",
      lastName: "Langer",
      imageUrl: "../images/oumar.png",
      imageAlt: "Management",
      imageSize: {
        imageWidth: 211,
        imageHeight: 211,
      },
    },
  ],
  employees: [
    {
      id: "1",
      firstName: "Omar",
      lastName: " Ben Brahim",
      position: "Customer Representative",
      residence: "Heidelberg",
      imageUrl: "../images/ommar.png",
      imageAlt: "employees",
      imageSize: {
        imageWidth: 167,
        imageHeight: 167,
      },
    },
    {
      id: "2",
      firstName: "Felipe",
      lastName: "Homberg",
      position: "Customer Representative",
      residence: "Mannheim",
      imageUrl: "../images/employee2.png",
      imageAlt: "employees",
      imageSize: {
        imageWidth: 167,
        imageHeight: 167,
      },
    },
    {
      id: "3",
      firstName: "Friedrich",
      lastName: "Haellmigk",
      position: "Customer Representative",
      residence: "München",
      imageUrl: "../images/employee3.png",
      imageAlt: "employees",
      imageSize: {
        imageWidth: 167,
        imageHeight: 167,
      },
    },
    {
      id: "4",
      firstName: "Noah",
      lastName: "Wirth Ngani",
      position: "Project Manager, Full Stack Developer",
      residence: "Stuttgart",
      imageUrl: "../images/employee4.png",
      imageAlt: "employees",
      imageSize: {
        imageWidth: 167,
        imageHeight: 167,
      },
    },
    {
      id: "5",
      name: "Takshak Ramteke",
      firstName: "Takshak",
      lastName: "Ramteke",
      position: "Full Stack Developer",
      residence: "Nagpur, India",
      imageUrl: "",
      imageAlt: "employees",
      imageSize: {
        imageWidth: 167,
        imageHeight: 167,
      },
    },
    {
      id: "6",
      firstName: "Hamza",
      lastName: "Farooqi",
      position: "Cyber Security Expert",
      residence: "Karachi, Pakistan",
      imageUrl: "",
      imageAlt: "employees",
      imageSize: {
        imageWidth: 167,
        imageHeight: 167,
      },
    },
    {
      id: "7",
      firstName: "Tavish",
      lastName: "Mehra",
      position: "Automation & Scraping Expert",
      residence: "Chandigarh, India",
      imageUrl: "",
      imageAlt: "employees",
      imageSize: {
        imageWidth: 167,
        imageHeight: 167,
      },
    },
    {
      id: "8",
      firstName: "John",
      lastName: "Doe",
      position: "Customer Representative",
      residence: "Heidelberg",
      imageUrl: "",
      imageAlt: "employees",
      imageSize: {
        imageWidth: 167,
        imageHeight: 167,
      },
    },
  ],
};

export default function AboutPage() {
  const [remainingMemebers, setRemainingMembers] = useState(0);
  return (
    <div className={aboutStyles.aboutContainer}>
      <AboutIntroSection />
      <AboutBodySection teamData={teamAtRigleProfileData} />
      <AboutCallToActionSection />
      <div>
        {/* <p>remaining item in the div{`${remainingMemebers}`}</p> */}
      </div>
    </div>
  );
}

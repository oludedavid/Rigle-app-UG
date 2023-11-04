import aboutBodyStyles from "./about-body.module.css";
import { useState, useEffect } from "react";

export default function AboutBodySection(props) {
  const [remainingEmployees, setRemainingEmployees] = useState(0);

  useEffect(() => {
    let remainingItemAfterIndexSeven = props.teamData.employees.slice(7);
    setRemainingEmployees(remainingItemAfterIndexSeven.length);
  }, [props.teamData.employees]);

  return (
    <div className={`${aboutBodyStyles.aboutBodyContainer}`}>
      <h1 className={`${aboutBodyStyles.aboutBodyHeader}`}>Our Team</h1>
      {/* Management */}
      <ul className={`${aboutBodyStyles.managementCardContainer}`}>
        {props.teamData.managementTeam.map((managementMemebers) => {
          return (
            <li
              key={managementMemebers.id}
              className={`${aboutBodyStyles.listCardContainer} ${aboutBodyStyles.managementlistCardContainer}`}
            >
              <header>
                <figure
                  className={`${aboutBodyStyles.managementlistCardImageContainer}`}
                >
                  <img
                    src={managementMemebers.imageUrl}
                    alt={`Profile Picture of ${managementMemebers.firstName} ${managementMemebers.lastName}`}
                    width={managementMemebers.imageSize.imageWidth}
                    height={managementMemebers.imageSize.imageHeight}
                    className={`${aboutBodyStyles.listCardImage}`}
                  />
                </figure>
              </header>
              <section className={`${aboutBodyStyles.headerContainer}`}>
                <h1
                  className={` ${aboutBodyStyles.managementListCardMainHeader} ${aboutBodyStyles.managementListCardFirstName}`}
                >
                  {managementMemebers.firstName}
                </h1>
                <h1
                  className={`${aboutBodyStyles.managementListCardSecondName}`}
                >
                  {managementMemebers.lastName}
                </h1>
              </section>
              <h4
                className={`${aboutBodyStyles.listCardSubHeader} ${aboutBodyStyles.managementListCardSubHeader}`}
              >
                {managementMemebers.title}
              </h4>
              <p
                className={`${aboutBodyStyles.listCardDescription} ${aboutBodyStyles.managementListCardMainDescription}`}
              >
                {managementMemebers.titleDescription}
              </p>
            </li>
          );
        })}
      </ul>

      {/* Employees */}
      <ul className={`${aboutBodyStyles.employeeCardContainer}`}>
        {props.teamData.employees.map((employees, index) => {
          if (index < 6) {
            return (
              <li
                key={employees.id}
                className={`${aboutBodyStyles.listCardContainer} ${aboutBodyStyles.employeeslistCardContainer}`}
              >
                <header className={`${aboutBodyStyles.listCardContainer}`}>
                  <figure
                    className={`${aboutBodyStyles.employeeslistCardImageContainer}`}
                  >
                    <img
                      src={
                        employees.imageUrl === ""
                          ? "../images/profile-user.png"
                          : employees.imageUrl
                      }
                      alt={`Profile Picture of ${employees.firstName} ${employees.lastName}`}
                      width={employees.imageSize.imageWidth}
                      height={employees.imageSize.imageHeight}
                      className={`${aboutBodyStyles.listCardImage}`}
                    />
                  </figure>
                </header>
                <section className={`${aboutBodyStyles.headerContainer}`}>
                  <h1
                    className={` ${aboutBodyStyles.employeesListCardMainHeader} ${aboutBodyStyles.employeesListCardFirstName}`}
                  >
                    {employees.firstName}
                  </h1>
                  <h1
                    className={`${aboutBodyStyles.employeesListCardSecondName}`}
                  >
                    {employees.lastName}
                  </h1>
                </section>

                <h4
                  className={`${aboutBodyStyles.listCardSubHeader} ${aboutBodyStyles.employeesListCardSubHeader}`}
                >
                  {employees.position}
                </h4>
                <p
                  className={`${aboutBodyStyles.listCardDescription} ${aboutBodyStyles.employeesListCardDescription}`}
                >
                  {employees.residence}
                </p>
              </li>
            );
          }
          return null;
        })}
        <div>
          <div className={aboutBodyStyles.remaining}>
            <div className={aboutBodyStyles.remainingEmployeesContainer}>
              <h2
                className={`${aboutBodyStyles.remainingEmployeesHeading}`}
              >{`+${remainingEmployees}`}</h2>
              <p className={`${aboutBodyStyles.remainingEmployeesPara}`}>
                Developers
              </p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}

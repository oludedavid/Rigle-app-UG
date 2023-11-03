import aboutBodyStyles from "./about-body.module.css";

export default function AboutBodySection(props) {
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
                    alt={managementMemebers.imgAlt}
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
        {props.teamData.employees.map((employees) => {
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
                    src={employees.imageUrl}
                    alt={employees.imgAlt}
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
        })}
      </ul>
    </div>
  );
}

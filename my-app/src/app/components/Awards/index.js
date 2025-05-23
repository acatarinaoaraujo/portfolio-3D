import styles from "./Awards.module.css";
import styled from "styled-components";

const badges = [
  {
    color: "gold",
    icon: "fa-trophy",
    label: "Kalo Grant 2023 - Best Solution ($1000)",
  },
  {
    color: "silver",
    icon: "fa-trophy",
    label: "HACC 2023 - Second Place ($2000)",
  },
  {
    color: "bronze",
    icon: "fa-trophy",
    label: "HACC 2022 - Third Place ($1000)",
  },
  {
    color: "blue",
    icon: "fa-award",
    label: "WWT Internship 2023 - Best Technical Solution",
  },
  {
    isCertificate: true,
    img: "images/data-analytics-certificate.png",
    label: "Google Advanced Data Analytics",
    link: "https://www.credly.com/badges/03e94c3c-ce2a-43fb-80a4-6257f723827e/public_url",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const index = () => {
  const awards = badges.filter((badge) => !badge.isCertificate);
  const certificates = badges.filter((badge) => badge.isCertificate);

  return (
    <Container id="awards">
      <Wrapper>
        <Title>Awards & Certificates</Title>
        <Desc>
          Recognized for excellence in collaborative software development and
          innovation, including awards at the{" "}
          <b>Hawaii Annual Code Challenge (HACC)</b> for impactful team
          projects, a <b>Kalo Grant</b> for app development, and first place in
          a cybersecurity internship project at <b>World Wide Technology</b>.
        </Desc>

        <div className={styles.mainWrapper}>
          {/* Display Awards */}
          {awards.map((badge, index) => (
            <div
              key={index}
              className={`${styles.badge} ${styles[badge.color]}`}
            >
              <div className={styles.circle}>
                {badge.icon ? (
                  <i
                    className={`fa ${badge.icon} fa-2xl`}
                    style={{ marginTop: "45px" }}
                  />
                ) : (
                  badge.customContent
                )}
              </div>
              <div className={styles.ribbon}>{badge.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.certificates}>
          {/* Display Certificates */}
          {certificates.map((certificate, index) => (
            <div key={index} className={styles.certificateCard}>
              <img src={certificate.img} alt="Certificate" />
              <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default index;

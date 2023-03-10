import "../styles/AboutMe.scss";

const textAboutMe = ["Hi", "I'm", "Andrey", "Web developer"];

const AboutMe = () => {
  return (
    <div className="loading">
      <div className="loading-text">
        {textAboutMe.map((textElement) => (
          <span className="loading-text-words">{textElement}</span>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

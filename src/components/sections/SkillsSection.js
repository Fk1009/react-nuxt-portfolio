import { useSelector } from 'react-redux';  // Import hooks from react-redux

const SkillsSection = () => {
    const skills = useSelector((state) => state.resume?.data?.resume?.skills);
    const resume = useSelector((state) => state.resume?.data?.main); 
    return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>{resume?.skillTagline}</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          
          <div className="col-lg-6">
            {skills?.map((skill, index) => {
              if (index < skills.length / 2) {
                return (
                  <div className="progress" key={index}>
                    <span className="skill">
                      <span>{skill.name}</span> <i className="val">{skill.level}</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={parseInt(skill.level)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                );
              }
              return null; 
            })}
          </div>

          <div className="col-lg-6">
            {skills?.map((skill, index) => {
              if (index >= skills.length / 2) {
                return (
                  <div className="progress" key={index}>
                    <span className="skill">
                      <span>{skill.name}</span> <i className="val">{skill.level}</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={parseInt(skill.level)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                );
              }
              return null; 
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { useSelector } from "react-redux"; // Import hooks from react-redux

const MainResume = () => {
  const resumeDetails = useSelector((state) => state.resume?.data);
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>

            <div className="resume-item pb-0">
              <h4>{resumeDetails?.main?.name}</h4>
              <p>
                <em>{resumeDetails?.resume?.careerObjective}</em>
              </p>
              <ul>
                <li>{resumeDetails?.main?.address?.street}, {resumeDetails?.main?.address?.state}, {resumeDetails?.main?.address?.city}</li>
                <li>{resumeDetails?.main?.phone}</li>
                <li>{resumeDetails?.main?.email}</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {resumeDetails?.resume?.education.map((item, index) => (
              <div className="resume-item" key={index}>
                <h4>{item.degree}</h4>
                <h5>{item.graduated}</h5>
                <p>
                  <em>{item.school}</em>
                </p>
                <p>{item.description}</p>
              </div>
            ))}

          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Skills</h3>
            {resumeDetails?.resume?.skills.map((item, index) => (
              <div className="resume-item" key={index}>
                <h5>{item.name}</h5>
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            {resumeDetails?.resume?.work.map((item, index) => (
              <div className="resume-item" key={index}>
                <h4>{item.company}</h4>
                <h5>{item.years}</h5>
                <p>
                  <em>{item.title} </em>
                </p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Personal Details</h3>
              <div className="resume-item" >
                <h5>DOB : {resumeDetails?.main?.birthday}</h5>
              </div>
              <div className="resume-item" >
                <h5>Gender : {resumeDetails?.main?.gender}</h5>
              </div>
              <div className="resume-item" >
                <h5>Nationality : {resumeDetails?.main?.nationality}</h5>
              </div>

            <h3 className="resume-title">Strength</h3>
            {resumeDetails?.main?.strength.map((item, index) => (
              <div className="resume-item" key={index}>
                <h5>{item.strnth1}</h5>
              </div>
            ))} 

            <h3 className="resume-title">Hobbies</h3>
            {resumeDetails?.main?.hobbies.map((item, index) => (
              <div className="resume-item" key={index}>
                <h5>{item.hob1}</h5>
              </div>
            ))}  
          </div>
        </div>



      </div>
    </section>
  );
};

export default MainResume;

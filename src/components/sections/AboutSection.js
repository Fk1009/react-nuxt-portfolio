import React from "react";
import Image from "next/image";
import { useSelector } from 'react-redux';  // Import hooks from react-redux

const AboutSection = () => {
  const resume = useSelector((state) => state.resume?.data?.main);  // Access the resume data from Redux store
  return (
    <section id="about" className="about section">
    <div className="container section-title" data-aos="fade-up">
      <h2>About</h2>
      <p>{resume?.description}</p>
    </div>
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4">
          <Image src="/assets/img/my-profile-img-4.jpg" alt="Profile Image" className="img-fluid" width={300} height={300} />
        </div>
        <div className="col-lg-8 content">
          <h2>{resume?.skillDescription}</h2>
          {/* <p className="fst-italic py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p> */}
          <div className="row">
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{resume?.birthday}</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{resume?.website}</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{resume?.phone}</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{resume?.address?.city}</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{resume?.age}</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{resume?.degree}</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{resume?.email}</span></li>              </ul>
            </div>
          </div>
          </div>
          {/* <p className="py-3">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis...
          </p> */}
        </div>
      </div>
    </div>
  </section>
  );
}

export default AboutSection;

import React from "react";
import Image from "next/image";
import { useSelector } from 'react-redux';  // Import hooks from react-redux

const PortfolioSection = () => {
  const resume = useSelector((state) => state.resume?.data); 
 
  return (
        <section id="portfolio" className="portfolio section light-background">
            <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>{resume?.main?.portfolioDescription}</p>
            </div>
            <div className="container">
            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                {resume?.portfolio?.projects?.map((project, index) => (
                    <div key={index} className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    <div className="portfolio-content h-100">
                        <Image
                        src={`/assets/img/portfolio/${project.image}`}
                        className="img-fluid"
                        alt={project.title}
                        width={500}
                        height={500}
                        />
                        <div className="portfolio-info">
                        <h4>{project.title}</h4>
                        <p>{project.category}</p>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={project.title}
                            className="glightbox preview-link"
                        >
                            <i className="bi bi-zoom-in"></i>
                        </a>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
</section>
  );
}

export default PortfolioSection;

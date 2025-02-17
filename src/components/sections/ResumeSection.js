import { useSelector } from 'react-redux';  // Import hooks from react-redux
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

const ResumeSection = () => {
  const resumeDetails = useSelector((state) => state.resume?.data);
  const contentRef = useRef();
  const generatePDF = async () => {
    const element = contentRef.current;

    // Ensure contentRef.current is not null
    if (!element) {
      console.error('Content reference is null!');
      return;
    }

    // Capture the content as a canvas with scaling
    const canvas = await html2canvas(element, {
      scale: 2, // Increase scale for better quality
      useCORS: true, // Allow cross-origin images to be rendered
    });
    
    // Convert the canvas to an image
    const imgData = canvas.toDataURL('image/png');

    // Initialize jsPDF with A4 size in mm (210mm x 297mm)
    const pdf = new jsPDF('p', 'mm', 'a4');

    // A4 page size in mm (210mm x 297mm)
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Scale the image to fit A4 dimensions (with a margin)
    const margin = 10;
    const imgWidth = pdfWidth - 2 * margin;
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

    // Ensure the image fits within the A4 height
    if (imgHeight > pdfHeight - 2 * margin) {
      const scaleFactor = (pdfHeight - 2 * margin) / imgHeight;
      imgHeight *= scaleFactor;
      imgWidth *= scaleFactor;
    }

    // Add the image to the PDF with adjusted dimensions
    pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);

    // Save the PDF with a filename
    pdf.save('download.pdf');
  };
return (

  
<section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <button
            onClick={generatePDF}
            className="btn btn-primary mt-4 download-btn"
          >
           Download <i className="bi bi-download"></i> 
        </button>

        </div>
      
      <div className="container" ref={contentRef} >
        <div className="row">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>

            <div className="resume-item pb-0">
              <h4>{resumeDetails?.main?.name}</h4>
              <p><em>{resumeDetails?.resume?.careerObjective}</em></p>
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
                <p><em>{item.school}</em></p>
                <p>{item.description}</p>
              </div>
            ))}

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            {resumeDetails?.resume?.work.map((item, index) => (
              <div className="resume-item" key={index}>
                <h4>{item.company}</h4>
                <h5>{item.years}</h5>
                <p><em>{item.title} </em></p>
                <p>{item.description}</p>
              </div>
            ))}

          </div>

        </div>
        </div>
      </section>
);
}

export default ResumeSection;
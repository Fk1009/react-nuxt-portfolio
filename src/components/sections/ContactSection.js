import { useSelector } from 'react-redux';  // Import hooks from react-redux

const ContactSection = () => {
  const addressDetails = useSelector((state) => state.resume?.data?.main);
  return (
<section id="contact" className="contact section">
<div className="container section-title" data-aos="fade-up">
  <h2>Contact</h2>
  <p>{addressDetails?.contactDescription}</p>
</div>
<div className="container" data-aos="fade-up" data-aos-delay="100">
  <div className="row gy-4">
    <div className="col-lg-12">
      <div className="info-wrap">
        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
          <i className="bi bi-geo-alt flex-shrink-0"></i>
          <div>
            <h3>Address</h3>
            <p>{addressDetails?.address?.street}, {addressDetails?.address?.state} {addressDetails?.address?.city}, {addressDetails?.address?.zip}</p>
          </div>
        </div>
        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
          <i className="bi bi-telephone flex-shrink-0"></i>
          <div>
            <h3>Call Us</h3>
            <p>{addressDetails?.phone}</p>
          </div>
        </div>
        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
          <i className="bi bi-envelope flex-shrink-0"></i>
          <div>
            <h3>Email Us</h3>
            <p>{addressDetails?.email}</p>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="col-lg-7">
      <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">
          <div className="col-md-6">
            <label htmlFor="name-field" className="pb-2">Your Name</label>
            <input type="text" name="name" id="name-field" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="email-field" className="pb-2">Your Email</label>
            <input type="email" name="email" id="email-field" className="form-control" required />
          </div>
          <div className="col-md-12">
            <label htmlFor="subject-field" className="pb-2">Subject</label>
            <input type="text" name="subject" id="subject-field" className="form-control" required />
          </div>
          <div className="col-md-12">
            <label htmlFor="message-field" className="pb-2">Message</label>
            <textarea name="message" rows="10" id="message-field" className="form-control" required></textarea>
          </div>
          <div className="col-md-12 text-center">
            <div className="loading">Loading...</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </div> */}
  </div>
</div>
</section>
  );
}

export default ContactSection;

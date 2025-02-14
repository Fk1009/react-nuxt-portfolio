import React, { useState, useEffect } from 'react';


const Footer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
  }, []);

  return (
      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Farhan khan</strong> <span>All Rights Reserved</span></p>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">Farhan khan</a>
          </div>
        </div>
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>
        {!isLoaded && <div id="preloader"></div>}

      </footer>
      
  );
}

export default Footer;

import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main';
import Footer from '../components/Footer';
import Script from 'next/script'
import { useDispatch, useSelector } from 'react-redux';  // Import hooks from react-redux
import { fetchResumeData } from '@/redux/slices/resumeSlice';
import React, { useEffect } from 'react';

export default function Home() {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);  // Access the resume data from Redux store
  useEffect(() => {
    dispatch(fetchResumeData());  
  }, [dispatch]);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Farhan khan</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        {/* Main CSS */}
        <link rel="stylesheet" href="/assets/css/main.css" />
              
        {/* Favicons */}
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/favicon.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Poppins:wght@100;300;400;500;600;700;800;900&family=Raleway:wght@100;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Vendor CSS */}
        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
        <link rel="stylesheet" href="/assets/vendor/glightbox/css/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css" />
      </Head>
      <Header/>
      <Main/>
      <Footer/>
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/php-email-form/validate.js"  strategy="afterInteractive" ></Script>
        <Script src="/assets/vendor/aos/aos.js"></Script>
        <Script src="/assets/vendor/typed.js/typed.umd.js"></Script>
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js"></Script>
        <Script src="/assets/vendor/waypoints/noframework.waypoints.js"></Script>
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js"></Script>
        <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></Script>
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></Script>
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js"></Script>
        <Script src="/assets/js/main.js"></Script>
    </div>
  )
}




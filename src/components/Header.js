import Navbar from './Navbar'
import SocialLinks from './SocialLinks'
import Image from "next/image";
import { useSelector } from 'react-redux';  // Import hooks from react-redux

export default function Header() {
  const resume = useSelector((state) => state.resume?.data?.main);
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <div className="profile-img">
         <Image src="/assets/img/my-profile-img-4.jpg" alt="Profile Image" className="img-fluid rounded-circle"  width={300} height={300}/>
      </div>
      <a href="index.html" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">{resume?.name}</h1>
      </a>

      <SocialLinks />
      <Navbar />
    </header>
  )
}

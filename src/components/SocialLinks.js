import { useSelector } from 'react-redux';  // Import hooks from react-redux

export default function SocialLinks() {
  const resume = useSelector((state) => state.resume?.data?.main?.social);  // Access the resume data from Redux store
  
  if (!resume || resume.length === 0) {
    return null; // Return null if there's no data
  }

  return (
    <div className="social-links text-center">
      {resume.map((social) => (
        <a key={social.name} href={social.url} className={social.name}>
          <i className={social.className}></i> {/* Dynamically add the icon class */}
        </a>
      ))}
    </div>
  );
}

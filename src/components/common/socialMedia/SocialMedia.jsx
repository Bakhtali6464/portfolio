import {



  faFacebookF,
  faWhatsapp,
  // faEnvelope,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; // or free-solid-svg-icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faFacebookF, link: "https://WWW.facebook.com/share/14KBZA5GYXu/" },
  {icon: faWhatsapp, link: "https://wa.me/923361476464?text=Hello!%20I%20just%20saw%20your%20portfolio%20and%20am%20interested%20to%20work."},
  { icon: faEnvelope, link: "mailto:bakhtali6464@gmail.com" },

  { icon: faInstagram, link: "https://www.instagram.com/bakhtalibaali/" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/bakhtali03361476464/" },

];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
       target="_blank"
  rel="noopener noreferrer"
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;

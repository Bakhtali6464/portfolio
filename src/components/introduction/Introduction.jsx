import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; // or free-solid-svg-icons


// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "6 Year",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "80+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "100%",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Bakht Ali
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a Freelance <span className="bg-highlight">Web Development/UI Designer</span>{" "}
            and <span className="bg-highlight"> Developer</span> based in
            Pakistan. I strives to build immersive and beautiful web
            applications through carefully crafted code and user-centric design.
          </p>
          <p className="text-center lg:text-start flex gap-2 justify-center lg:justify-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white flex items-center gap-2"
              href="https://wa.me/923361476464?text=Hello!%20I%20just%20saw%20your%20portfolio%20and%20am%20interested%20to%20work."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              WhatsApp
            </a>
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white flex items-center gap-2"
              href="mailto:bakhtali6464@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Email
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;

import { LuCalendarClock } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#151515] w-full py-16 px-12  text-white my-12 flex md:flex-row flex-col justify-between items-center rounded-lg">
      <div className="flex items-center">
        <div className="text-4xl mr-3 text-red-500">
          <LuCalendarClock />
        </div>
        <div>
          <p>We are open monday-friday</p>
          <h2 className="text-2xl">7:00 am - 9:00 pm</h2>
        </div>
      </div>

      <div className="flex items-center">
        <div className="text-4xl mr-3 text-red-500">
          <FaPhoneVolume />
        </div>
        <div>
          <p>Have a question?</p>
          <h2 className="text-2xl">+2546 251 2658</h2>
        </div>
      </div>

      <div className="flex items-center">
        <div className="text-4xl mr-3 text-red-500">
          <FaMapMarkerAlt />
        </div>
        <div>
          <p>Need a repair? our address</p>
          <h2 className="text-2xl">Liza Street, New York</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;

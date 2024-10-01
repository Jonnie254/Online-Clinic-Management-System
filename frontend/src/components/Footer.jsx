import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Our clinical appointment system simplifies the process of booking
            and managing appointments. With easy online access, patients can
            schedule, reschedule, or cancel appointments at their convenience.
            The system ensures real-time updates, appointment reminders, and
            secure handling of personal health information, making the entire
            process seamless for both patients and healthcare providers.
          </p>
        </div>
        {/* middle section section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul>
            <li>+2547898484934</li>
            <li>Jonnie254@proton.me</li>
          </ul>
        </div>
      </div>
      {/* copyright section */}
      <div>
        <hr/>
        <p className="py-5 test-sm text-center">© 2024 All rights reserved, Jonnie254</p>
      </div>
    </div>
  );
};

export default Footer;

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import callSupport from "../assets/callSupport.png";
import mailSupport from "../assets/mailSupport.png";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-5 md:px-20 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Quick Links */}
        <div>
          <img src="/asap-logo.png" alt="ASAP Kerala" className="w-24 mb-4" />
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            {[
              "About Us",
              "Careers",
              "Blogs",
              "Press Release",
              "Jobs",
              "Internship",
              "Contact Us",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Internship & Jobs */}
        <div>
          <h2 className="text-lg font-semibold">Internship by Stream</h2>
          <ul className="mt-2 space-y-2">
            {[
              "Computer Science",
              "Electronics",
              "Marketing",
              "Finance",
              "Civil",
              "Chemical",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mt-4">Jobs by Stream</h2>
          <ul className="mt-2 space-y-2">
            {[
              "Marketing",
              "Web Development",
              "Sales",
              "Digital Marketing",
              "Content Writing",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Courses & Companies */}
        <div>
          <h2 className="text-lg font-semibold">Guaranteed Courses</h2>
          <ul className="mt-2 space-y-2">
            {[
              "HR Management",
              "Digital Marketing",
              "UI/UX Design",
              "Product Management",
              "Full Stack Development",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mt-4">Explore Companies</h2>
          <ul className="mt-2 space-y-2">
            {["Top Companies", "IT Companies", "Startups", "Govt. PSU"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-blue-600 cursor-pointer transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Are you having any issues?</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <p className="flex items-center gap-2 text-sm">
              <img className="w-10 h-10" src={callSupport} alt="Call Support" />
              <span>
                Call Support:{" "}
                <span className="font-semibold">+91 9495999623</span>
              </span>
            </p>

            <p className="flex items-center gap-2 text-sm">
              <img
                className="w-10 h-10"
                src={mailSupport}
                alt="Email Support"
              />
              <span>
                Email Support:{" "}
                <span className="font-semibold">info@asapkerala.gov.in</span>
              </span>
            </p>
          </div>

          <h2 className="text-lg font-semibold mt-6">Newsletter</h2>
          <p className="text-sm mt-2">Never miss an update!</p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray px-3 py-2 w-full rounded-l-md focus:outline-none"
            />
            <button className="bg-[#5CB01A] text-white px-4 py-2 rounded-lg rounded-tr-3xl transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center max-w-7xl mx-auto text-center mt-8 text-sm border-t pt-4">
        <p>
          © 2024 ASAP Kerala. All Rights Reserved<br></br>
          Powered by SRV InfoTech
        </p>
        <div className="flex justify-end  mt-3 space-x-4 p-2 py-8">
          <p>Stay Connected With Us</p>
          <img className="w-[32px] h-[32px]" src={facebook} alt="" />
          <img className="w-[32px] h-[32px]" src={instagram} alt="" />
          <img className="w-[32px] h-[32px]" src={twitter} alt="" />
          <img className="w-[32px] h-[32px]" src={youtube} alt="" />
          <img className="w-[32px] h-[32px]" src={linkedin} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaEdit } from "react-icons/fa";

const Education = () => {
  return (
    <div className="mt-10 space-y-8">
      {/* Education Section */}
      <div>
        <div className="flex justify-between items-center mb-2 max-w-3xl">
          <h2 className="text-lg font-semibold text-gray-900">Education</h2>
          <button className="text-sm text-[#198FD9] bg-[#198FD91A] px-3 py-1 rounded-lg">
            Update Education
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg border border-[#EEEEEE]">
          {[
            {
              title: "Master of Business Administration (MBA)",
              school: "XYZ University, Thiruvananthapuram, Kerala",
              year: "2018 – 2020",
            },
            {
              title: "Higher Secondary Certificate (HSC)",
              school: "St. Mary’s Higher Secondary School, Ernakulam, Kerala",
              year: "2012 – 2014",
            },
            {
              title: "Secondary School Certificate (SSC)",
              school: "Govt. Model School, Alappuzha, Kerala",
              year: "2011 – 2012",
            },
          ].map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium text-gray-800 flex items-center">
                {edu.title}
                <button className="ml-2 text-orange-500 text-sm flex items-center">
                  <FaEdit className="mr-1" size={12} /> Edit
                </button>
              </p>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Objective Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-900">
            Career Objective
          </h2>
          <button className="text-sm text-[#198FD9] bg-[#198FD91A] px-3 py-1 rounded-lg">
            Update
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg border border-[#EEEEEE]">
          <p className="font-medium text-gray-800">For Entry-Level Position</p>
          <p className="text-gray-600 mt-1 text-sm">
            Enthusiastic and highly motivated graduate with a degree in Business
            Administration, eager to apply strong analytical and communication
            skills in a fast-paced corporate environment. Looking for an
            entry-level role in marketing where I can contribute to team success
            while gaining hands-on experience and advancing my career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;

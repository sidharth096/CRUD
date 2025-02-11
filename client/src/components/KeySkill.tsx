import { FaDownload, FaTrashAlt } from "react-icons/fa";

const KeySkills = () => {
  const skills = [
    "Communication",
    "UI Designing",
    "UI Development",
    "Leadership",
    "Human Resource",
    "php",
    "Accounting",
    "Data Science",
  ];

  return (
    <div className="mt-10 space-y-8">
      {/* Key Skills Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-900">Key Skills</h2>
          <button className="text-sm text-[#198FD9] bg-[#198FD91A] px-3 py-1 rounded-lg">
            Update Skills
          </button>
        </div>
        <div className="p-4 bg-white rounded-lg border border-[#EEEEEE] flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Resume Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Resume</h2>
        <div className="p-6 bg-white rounded-lg border border-[#EEEEEE]">
          {/* Uploaded Resume */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src="/pdf-icon.png" // Replace with actual resume preview if available
                alt="Resume"
                className="w-10 h-10 rounded-md mr-3"
              />
              <div>
                <p className="font-medium text-gray-800">abhishek_resume.pdf</p>
                <p className="text-gray-500 text-sm">Uploaded on Sep 30, 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="text-[#198FD9] text-lg">
                <FaDownload />
              </button>
              <button className="text-red-500 text-lg">
                <FaTrashAlt />
              </button>
            </div>
          </div>

          {/* Resume Upload Options */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg flex justify-center items-center">
              <button className="text-sm text-[#198FD9] bg-[#198FD91A] px-3 py-1 rounded-lg">
                Update Resume
              </button>
              <p className="text-xs text-gray-500 ml-2">doc, docx, pdf up to 2 MB</p>
            </div>
            <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg flex justify-center items-center">
              <button className="text-sm text-[#198FD9] bg-[#198FD91A] px-3 py-1 rounded-lg">
                Add Video Resume
              </button>
              <p className="text-xs text-gray-500 ml-2">mp4, mkv up to 20 MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeySkills;

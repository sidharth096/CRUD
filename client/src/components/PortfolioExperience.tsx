const PortfolioExperience = () => {
    const portfolioLinks = [
      { label: "GitHub", url: "https://github.com/abhishekshank" },
      { label: "Behance", url: "https://www.behance.net/abhishekshank" },
      { label: "Personal Website", url: "http://www.abhishekshankar.inf" },
    ];
  
    const experiences = [
      {
        title: "Software Developer",
        company: "Tech Innovations Inc., Kozhikode",
        role: "Software Developer",
        duration: "January 2021 - Present",
        projects: ["ASAP CSP", "Kannur International Airport", "Kerala Police"],
      },
      {
        title: "Project Manager",
        company: "BuildRight Construction Co., Pune",
        role: "Project Manager",
        duration: "June 2016 - November 2021",
        projects: [],
      },
    ];
  
    return (
      <div className="mt-10 space-y-8">
        {/* Portfolio Section */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-900">Portfolio</h2>
            <button className="text-sm text-[#198FD9] bg-[#198FD91A] px-3 py-1 rounded-lg">
              Update Portfolio
            </button>
          </div>
          <div className="p-4 bg-white rounded-lg border border-[#EEEEEE] space-y-2">
            {portfolioLinks.map((link, index) => (
              <p key={index} className="text-gray-700">
                <strong>{link.label}</strong>
                <br />
                <a href={link.url} className="text-[#198FD9]" target="_blank" rel="noopener noreferrer">
                  {link.url}
                </a>
              </p>
            ))}
          </div>
        </div>
  
        {/* Work Experience Section */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-900">Work Experience</h2>
            <button className="text-sm text-[#198FD9] bg-[#198FD91A] px-3 py-1 rounded-lg">
              Add Experience
            </button>
          </div>
          <div className="p-4 bg-white rounded-lg border border-[#EEEEEE] space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between">
                  <h3 className="text-md font-medium text-gray-900">{exp.title}</h3>
                  <button className="text-xs text-[#FF6B6B] border border-[#FF6B6B] px-2 py-0.5 rounded-md">
                    Edit
                  </button>
                </div>
                <p className="text-gray-700">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.role}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
                {exp.projects.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.projects.map((project, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
  
        {/* Preferences and Documents Section */}
        <div className="flex flex-col space-y-4">
          <button className="text-sm text-[#198FD9] bg-[#198FD91A] px-3 py-1 rounded-lg self-start">
            Add Preferences
          </button>
          <button className="text-sm text-[#198FD9] bg-[#198FD91A] px-3 py-1 rounded-lg self-start">
            Add Documents
          </button>
        </div>
      </div>
    );
  };
  
  export default PortfolioExperience;
  
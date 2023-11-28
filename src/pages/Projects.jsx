const Projects = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="transform transition-all hover:scale-[1.01] p-1 rounded-lg  bg-gradient-to-r from-[#FFD700] via-[#FFA07A] to-[#FF6347]">
          <div className=" p-6 rounded-lg shadow-md border-gradient   ">
            <h2 className="text-xl font-semibold mb-4">
              Travel Companion Website
            </h2>
            <p className="text-gray-400">
              A robust website designed to assist travelers with essential
              information and features.
            </p>
            <div>
              <ul className="flex gap-2 justify-evenly pt-6">
                <li>
                  <a href="" className="hover:border p-2 rounded border-white">
                    Link
                  </a>
                </li>
                <li>
                  <a href="" className="hover:border p-2 rounded border-white">
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="transform transition-all hover:scale-[1.01] p-1 rounded-lg  bg-gradient-to-r from-[#20B2AA] via-[#87CEEB] to-[#4169E1]">
          <div className=" p-6 rounded-lg shadow-md border-gradient   ">
            <h2 className="text-xl font-semibold mb-4">E-commerce Platform</h2>
            <p className="text-gray-400">
              Developed a comprehensive e-commerce platform with seamless user
              experience.
            </p>
            <div>
              <ul className="flex gap-2 justify-evenly pt-6">
                <li>
                  <div></div>
                  <a href="" className="hover:border p-2 rounded border-white">
                    Link
                  </a>
                </li>
                <li>
                  <a href="" className="hover:border p-2 rounded border-white">
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="transform transition-all hover:scale-[1.01] p-1 rounded-lg  bg-gradient-to-r from-[#32CD32] via-[#9ACD32] to-[#556B2F]">
          <div className=" p-6 rounded-lg shadow-md border-gradient   ">
            <h2 className="text-xl font-semibold mb-4">Portfolio Website</h2>
            <p className="text-gray-400">
              Created a personal portfolio website showcasing skills, projects,
              and achievements.
            </p>
            <div>
              <ul className="flex gap-2 justify-evenly pt-6">
                <li>
                  <a href="" className="hover:border p-2 rounded border-white">
                    Link
                  </a>
                </li>
                <li>
                  <a href="" className="hover:border p-2 rounded border-white">
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="transform transition-all hover:scale-[1.01] p-1 rounded-lg  bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#DC143C]">
          <div className=" p-6 rounded-lg shadow-md border-gradient   ">
            <h2 className="text-xl font-semibold mb-4">
              Social Media Dashboard
            </h2>
            <p className="text-gray-400">
              Developed a dynamic social media dashboard for efficient content
              management.
            </p>
            <div>
              <ul className="flex gap-2 justify-evenly pt-6">
                <li>
                  <a href="" className="hover:border p-2 rounded border-white">
                    Link
                  </a>
                </li>
                <li>
                  <a href="" className="hover:border p-2 rounded border-white">
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="pt-3 text-lg">
          <a href="">For more Projects.......</a>
        </p>
      </div>
    </div>
  );
};

export default Projects;

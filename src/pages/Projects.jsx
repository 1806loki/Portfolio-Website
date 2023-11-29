const Projects = () => {
  return (
    <div id="projects" className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="transform transition-all hover:scale-[1.01] p-1 rounded-lg  bg-gradient-to-r from-[#FFD700] via-[#FFA07A] to-[#FF6347]">
          <div className=" p-6 rounded-lg shadow-md border-gradient   ">
            <h2 className="text-xl font-semibold mb-4 flex flex-col">
              Travel Companion Website <span className="text-sm">RoamEase</span>
            </h2>
            <p className="text-gray-400">
              I designed a Travel website, offering a seamless and visually
              engaging platform for users to plan and organize their journeys
              with ease
            </p>
            <div>
              <ul className="flex gap-2 justify-evenly pt-6">
                <li>
                  <a
                    href="https://roamease.netlify.app/"
                    className="hover:border p-2 rounded border-white"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/1806loki/Travel-Website.git"
                    className="hover:border p-2 rounded border-white"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="transform transition-all hover:scale-[1.01] p-1 rounded-lg  bg-gradient-to-r from-[#32CD32] via-[#9ACD32] to-[#556B2F]">
          <div className=" p-6 rounded-lg shadow-md border-gradient   ">
            <h2 className="text-xl font-semibold mb-4 flex flex-col">
              Injury Tracker <span className="text-sm">InjuryLogix</span>
            </h2>

            <p className="text-gray-400">
              I developed an Injury Tracker website, seamlessly integrating
              user-friendly design . It empowers users to efficiently track and
              manage injuries, providing valuable insights.
            </p>
            <div>
              <ul className="flex gap-2 justify-evenly pt-6">
                <li>
                  <a
                    href="https://lief-injury-tracker.netlify.app/"
                    className="hover:border p-2 rounded border-white"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/1806loki/Lief-Injury-Tracking-System.git"
                    className="hover:border p-2 rounded border-white"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="transform transition-all hover:scale-[1.01] p-1 rounded-lg  bg-gradient-to-r from-[#20B2AA] via-[#87CEEB] to-[#4169E1]">
          <div className=" p-6 rounded-lg shadow-md border-gradient   ">
            <h2 className="text-xl font-semibold mb-4 flex flex-col">
              E-commerce Platform <span className="text-sm">PureThreads</span>
            </h2>
            <p className="text-gray-400">
              I developed an E-commerce site that blends user-friendly design
              with efficient functionality, offering a smooth and secure online
              shopping experience
            </p>
            <div>
              <ul className="flex gap-2 justify-evenly pt-6">
                <li>
                  <div></div>
                  <a
                    href="https://purethreads.netlify.app/"
                    className="hover:border p-2 rounded border-white"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/1806loki/PureThreads.git"
                    className="hover:border p-2 rounded border-white"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="transform transition-all hover:scale-[1.01] p-1 rounded-lg  bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#DC143C]">
          <div className=" p-6 rounded-lg shadow-md border-gradient   ">
            <h2 className="text-xl font-semibold mb-4 flex flex-col">
              Udemy Clone <span className="text-sm">Alemeno</span>
            </h2>
            <p className="text-gray-400">
              I built a Udemy-inspired platform utilizing the Udemy API,
              ensuring a familiar interface while harnessing the power of their
              resources for an enriched online learning experience.
            </p>
            <div>
              <ul className="flex gap-2 justify-evenly pt-6">
                <li>
                  <a
                    href="https://github.com/1806loki/Alemeno.git"
                    className="hover:border p-2 rounded border-white"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="pt-3 text-lg hover:text-blue-400/60">
          <a href="https://github.com/1806loki?tab=repositories">
            For more Projects.......
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;

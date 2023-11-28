import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <footer className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center px-4 md:px-0">
        <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
        <div className="mb-8 flex w-full items-center gap-3 space-x-0 sm:space-x-2 md:gap-0">
          <div className="flex items-center gap-3"></div>
        </div>
        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-start space-y-4">
             <a
              className="flex items-center text-gray-500 transition-colors hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200/80"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/anilseervi/"
            >
              LinkedIn
              <svg
                className="ml-1 inline-block h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
            <a
              className="flex items-center text-gray-500 transition-colors hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200/80"
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/linaseervi"
            >
              Instagram
              <svg
                className="ml-1 inline-block h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col Nameitems-start space-y-4">
            <div className="flex flex-col items-start space-y-4">
              <a
                className="flex items-center text-gray-500 transition-colors hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200/80"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/anilseervi/"
              >
                LinkedIn
                <svg
                  className="ml-1 inline-block h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
              <a
                className="flex items-center text-gray-500 transition-colors hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200/80"
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/linaseervi"
              >
                Instagram
                <svg
                  className="ml-1 inline-block h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col Nameitems-start space-y-4"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

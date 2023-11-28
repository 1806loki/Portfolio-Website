const Intro = () => {
  return (
    <div className="intro flex">
      <section className="mb-4 flex flex-col-reverse items-start sm:flex-row">
        <div className="flex flex-col pr-8">
          <h1 className="mb-1 text-3xl font-bold text-black dark:text-white md:text-5xl">
            Lokesh Thalathoti
          </h1>
          <h2 className="mb-4 text-2xl text-gray-700 dark:text-gray-200">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Designing web with code for faster and better accessibility.
            Sometimes also does some open-sourcery stuff.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Intro;

import React from "react";

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <div className="mx-auto md:p-8 md-6 flex flex-col max-w-3xl items-center gap-1 mb-5 rounded-3xl bg-white">
        <p className="font-semibold text-center text-2xl md:text-4xl mb-2">
          <span className="text-primary">1</span>
          Welcome
        </p>
        <p className="font-semibold text-center text-2xl md:text-4xl mb-2">
          <span className="text-primary">2</span>
          Package
        </p>
        <p className="font-semibold text-center text-2xl md:text-4xl mb-2">
          <span className="text-primary">3</span>
          Styles
        </p>
        <p className="font-semibold text-center text-2xl md:text-4xl mb-2">
          <span className="text-primary">4</span>
          Upload
        </p>
        <p className="font-semibold text-center text-2xl md:text-4xl mb-2">
          <span className="text-primary">5</span>
          Summary
        </p>
      </div>
    </section>
  );
};

export default Home;

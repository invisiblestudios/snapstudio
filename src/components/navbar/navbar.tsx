import React from "react";

const Navbar = () => {
  return (
    <nav className="h-screen flex flex-col items-center justify-center">
      <div className="mx-auto p-6 md:p-8 flex max-w-3xl text-sm items-center gap-4 mb-5 rounded-3xl bg-white shadow-md">
        <p className="font-semibold text-center text-sm">
          <span className="text-primary">1</span> Welcome
        </p>
        <p className="font-semibold text-center text-sm">
          <span className="text-primary">2</span> Package
        </p>
        <p className="font-semibold text-center text-sm">
          <span className="text-primary">3</span> Styles
        </p>
        <p className="font-semibold text-center text-sm">
          <span className="text-primary">4</span> Upload
        </p>
        <p className="font-semibold text-center text-sm">
          <span className="text-primary">5</span> Summary
        </p>
      </div>
    </nav>
  );
};

export default Navbar;

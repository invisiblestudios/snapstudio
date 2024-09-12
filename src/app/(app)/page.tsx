import Navbar from "@/components/navbar/navbar";
import Home from "@/modules/home/homepage";

const AppHomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
       <Navbar />
      <Home />
    </div>
  );
};

export default AppHomePage;

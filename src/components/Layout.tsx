import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [displayDesktopDropDown, setDisplayDesktopDropDown] = useState(true);
  return (
    <>
      <Navbar displayed={displayDesktopDropDown} />
      <main
        onMouseEnter={() => setDisplayDesktopDropDown(false)}
        onMouseLeave={() => setDisplayDesktopDropDown(true)}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;

import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Overlay from "./UI/Overlay";

const Layout = ({ children }) => {
  const [displayDesktopDropDown, setDisplayDesktopDropDown] = useState(true);
  const [displayDesktopDropDown2, setDisplayDesktopDropDown2] = useState(false);
  return (
    <>
      <Navbar
        displayed={displayDesktopDropDown}
        dropDown={() => setDisplayDesktopDropDown2(true)}
      />
      <main
        onMouseEnter={() => setDisplayDesktopDropDown(false)}
        onMouseLeave={() => setDisplayDesktopDropDown(true)}
      >
        {children}
      </main>
      <Overlay displayed={displayDesktopDropDown && displayDesktopDropDown2} />
      <Footer />
    </>
  );
};
export default Layout;

import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Overlay from "./UI/Overlay";

const Layout = ({ children }) => {
  const [displayDesktopDropDown, setDisplayDesktopDropDown] = useState(false);
  return (
    <>
      <Navbar
        displayed={displayDesktopDropDown}
        dropDown={() => setDisplayDesktopDropDown(true)}
      />
      <main>{children}</main>
      <Overlay
        displayed={displayDesktopDropDown}
        hovered={() => setDisplayDesktopDropDown(false)}
      />
      <Footer />
    </>
  );
};
export default Layout;

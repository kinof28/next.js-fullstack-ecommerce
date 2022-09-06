import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Overlay from "./UI/Overlay";

const Layout = ({ children }) => {
  const [displayDesktopDropDown, setDisplayDesktopDropDown] = useState(false);
  const [blackDropDown, setBlackDropDown] = useState(false);
  return (
    <>
      <Navbar
        displayed={displayDesktopDropDown}
        dropDown={() => setDisplayDesktopDropDown(true)}
        dropUp={() => setDisplayDesktopDropDown(false)}
        toggle={() => setDisplayDesktopDropDown((prev) => !prev)}
        black={blackDropDown}
        blackDropDown={() => setBlackDropDown(true)}
        whiteDropDown={() => setBlackDropDown(false)}
      />
      <main>{children}</main>
      <Overlay
        displayed={displayDesktopDropDown}
        hovered={() => {
          if (!blackDropDown) setDisplayDesktopDropDown(false);
        }}
        onClick={() => setDisplayDesktopDropDown(false)}
      />
      <Footer />
    </>
  );
};
export default Layout;

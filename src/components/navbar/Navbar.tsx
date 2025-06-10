import { useRef } from "react";
import styled from 'styled-components';
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Switch from "./switch";
import DownloadCv from "./DownloadCv";

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

const Navbar = ({ theme, setTheme }) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    console.log("Menu is open?", isOpen);
    return (
      <>
        <motion.nav
            className="navFramer"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <motion.div className="background" variants={sidebar} />
            <Navigation theme={theme} setTheme={setTheme} isOpen={isOpen} toggleOpen={toggleOpen} />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
        <NavDesktop>
          <div className="nav-container">
            <div className="logo">
              <span>&lt;</span>Fausto<span>&gt;</span>
            </div>

            <div className="nav-links">
              <a href="#AboutMe">SOBRE MÍ</a>
              <a href="#Proyects">PROYECTOS</a>
              <a href="#Tools">HABILIDADES</a>
              <a href="#Footer">CONTACTO</a>
            </div>

            <div className="nav-actions">
              <Switch theme={theme} setTheme={setTheme} />
              <DownloadCv />
            </div>
          </div>
        </NavDesktop>
      </>
    );
};

export default Navbar;

const NavDesktop = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }

  @media (min-width: 1023px) {
    width: 100%;
    padding: 1.2rem 3rem;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 100;

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 1rem 2rem;
      width: 100%;
      max-width: 1080px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }

    .logo {
      font-family: 'Kanit', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.text};
    }

    .logo span {
      color: #a259ff;
      font-weight: 700;
    }

    .nav-links {
      display: flex;
      gap: 2.5rem;
    }

    .nav-links a {
      font-family: 'Kanit', sans-serif;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1rem;
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav-links a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      height: 2px;
      width: 0%;
      background: #a259ff;
      transition: width 0.3s ease;
    }

    .nav-links a:hover {
      color: #fff;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 3rem;
    }

    .cv-button {
      background: transparent;
      border: 1.5px solid #a259ff;
      padding: 8px 18px;
      border-radius: 12px;
      color: #fff;
      font-weight: 600;
      font-family: 'Kanit', sans-serif;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .cv-button:hover {
      background: #a259ff33;
    }
  }
`;


import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Switch from "./switch";
import DownloadCv from "./DownloadCv";
import styled from "styled-components";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0
  }
};

export const Navigation = ({ theme, setTheme, isOpen, toggleOpen }) => (
  <SwitchDownloadStyles>
    <motion.ul
      variants={variants}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      {itemIds.map(i => (
        <MenuItem i={i} key={i} onClick={toggleOpen} />
      ))}
      <div className="nav-actions">
        <Switch theme={theme} setTheme={setTheme} />
        <DownloadCv />
      </div>
    </motion.ul>
  </SwitchDownloadStyles>
);


const itemIds = [0, 1, 2, 3, 4];

const SwitchDownloadStyles = styled.div`
  .nav-actions {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 1rem;
    gap: 3rem;
  }
`;

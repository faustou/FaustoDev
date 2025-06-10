import { motion } from "framer-motion";
import styled from 'styled-components';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const TittlesMenu = ["Sobre Mi", "Proyectos", "Habilidades", "Contacto"];
const anchors = ["#AboutMe", "#Proyects", "#Tools", "#Footer"];

export const MenuItem = ({ i, onClick  }) => {
  return (
    <MenuItemStyles>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href={anchors[i]} onClick={onClick}>{TittlesMenu[i]}</a>
      </motion.li>
    </MenuItemStyles>
  );
};

const MenuItemStyles = styled.div`
  font-family: 'Kanit', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    position: relative;
    padding-left: 1rem;
    display: inline-block;
    transition: color 0.3s ease;
  }

  a::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 100%;
    background-color: transparent;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  a:hover::before {
    background-color: #a259ff;
  }
`;

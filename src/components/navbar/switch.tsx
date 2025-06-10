import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

type SwitchProps = {
  theme: 'dark' | 'light';
  setTheme: (mode: 'dark' | 'light') => void;
};

const Switch: React.FC<SwitchProps> = ({ theme, setTheme }) => {
  const [isOn, setIsOn] = useState(theme === 'dark');

  const toggleMode = () => {
    const newMode = isOn ? 'light' : 'dark';
    setTheme(newMode);
    setIsOn(!isOn);
  };

  return (
    <ToggleWrapper
      $mode={theme}
      onClick={toggleMode}
      style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
    >
      <motion.div layout className="handle">
        <AnimatePresence mode="wait" initial={false}>
          <motion.i
            key={isOn ? 'moon' : 'sun'}
            className={`icon fas fa-${isOn ? 'moon' : 'sun'}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>
      </motion.div>
    </ToggleWrapper>
  );
};

export default Switch;

const ToggleWrapper = styled.div<{ $mode: 'dark' | 'light' }>`
  height: 24px;
  width: 48px;
  padding: 3px;
  background: ${({ $mode }) =>
    $mode === 'dark'
      ? 'linear-gradient(135deg, #2a0845, #6441a5)'
      : 'linear-gradient(135deg, #eee, #ccc)'};
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;
  border: 1px solid ${({ $mode }) => ($mode === 'dark' ? '#a259ff' : '#999')};

  .handle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${({ $mode }) => ($mode === 'dark' ? '#fff' : '#222')};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    font-size: 0.75rem;
    color: ${({ $mode }) => ($mode === 'dark' ? '#501a96' : '#f5a623')};
  }
`;

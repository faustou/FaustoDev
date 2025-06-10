import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

const DownloadCv = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Cierra el menú si clickeás afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DropdownWrapper ref={wrapperRef}>
      <MainButton onClick={() => setOpen(prev => !prev)}>Ver CV</MainButton>
      {open && (
        <DropdownMenu>
          <DropdownItem href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            Ver CV
          </DropdownItem>
          <DropdownItem href="/cv.pdf" download rel="noopener noreferrer">
            Descargar CV
          </DropdownItem>
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default DownloadCv;

// Estilos
const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const MainButton = styled.button`
  font-family: 'Kanit', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  padding: 8px 18px;
  border-radius: 12px;
  border: 1.5px solid ${({ theme }) => theme.text};
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.text + '33'};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 120%;
  left: 0;
  background-color: ${({ theme }) => theme.terciary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  padding: 0.5rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 10;
  min-width: 160px;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.primary + '22'};
  }
`;

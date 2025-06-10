import { useState } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import styled, { ThemeProvider } from 'styled-components';
import Theme from './theme.ts'
import AboutMe from './components/aboutMe/AboutMe.tsx';
import Tools from './components/tools/Tools.tsx';
import Proyects from './components/projects/Proyects.tsx';
import Footer from './components/footer/Footer.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <>
      <ThemeProvider theme={Theme[theme]}>
        <AppContainer>
          <Navbar theme={theme} setTheme={setTheme} />
          <section id='AboutMe'><AboutMe /></section>
          <section id='Proyects'><Proyects /></section>
          <section id='Tools'><Tools /></section>
          <section id='Footer'><Footer /></section>
        </AppContainer>
      </ThemeProvider>
    </>
  )
}

export default App

const AppContainer = styled.div`
  background: ${({theme}) => theme.bg};
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    background: ${({ theme }) => theme.terciary};
    z-index: 0;
    border-radius: 0 0.5rem 0.5rem 0;
    box-shadow: 4px 0 15px rgba(0, 0, 0, 0.4);
    pointer-events: none; /* ← para que no tape los clics al contenido */
  }

  .hamburger-button {
    outline: none;
    border: none;
    position: absolute;
    top: 18px;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
  }

  li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .icon-placeholder {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex: 40px 0;
    margin-right: 20px;
  }

  .text-placeholder {
    border-radius: 5px;
    width: 200px;
    height: 20px;
    flex: 1;
  }

  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .navFramer {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    z-index: 20;
  }

  @media (min-width: 1024px) {
    .navFramer {
    display: none;
    }
  }
`;

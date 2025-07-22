import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';

const AboutMe = () => {
    return (
        <AboutMeStyles>
            <div className='aboutMetextContainer'>
                <img src="https://i.ibb.co/xtybWrMz/imagen-2025-06-17-192839384.png" alt="perfil-photo" />
            </div>
            <div className='greeting'>
                <p className='greetingHello'> Hola, Soy</p>
                <h2> FAUSTO SCARMATO </h2>
                <p> Frontend 
                    <span> 
                        <Typewriter
                            words={['Developer', 'Developer, Programmer', 'Developer, Programmer, Enthusiast.']}
                            loop={false}
                            cursor
                            cursorColor='white'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span> 
                </p>
                <div className='textContainer'>
                    <h3>Sobre Mi:</h3>
                    <h4>Me apasiona la tecnología y su impacto en la experiencia digital. Como frontend developer, creo interfaces intuitivas y atractivas con tecnologías web modernas, priorizando el rendimiento, la accesibilidad y la usabilidad. 🚀</h4>
                </div>
            </div>
        </AboutMeStyles>
    );
};

export default AboutMe;

const AboutMeStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.bg};

  .aboutMetextContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    
    img {
      border-radius: 50%;
      width: 75%!important;
      margin-left: 420px;
    }
  }

  .greeting {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 150px;
    font-family: 'Kanit', sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.text};

    .greetingHello {
      font-size: 3rem;
      font-weight: 700;
      margin: 3rem 0 1rem 0;
    }

    p {
      font-size: 1.5rem;

      span {
        margin-left: 0.2rem;
      }
    }

    h2 {
      line-height: 0.05;
    }
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 80%;
    margin-top: 2rem;
    
    h4 {
      margin-left: 1rem;
    }
  }

  /* MEDIA QUERY */
  @media (max-width: 1400px) {

    .aboutMetextContainer img {
      width: 95% !important;
      margin-left: 220px;
    }
  
  }
  
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    gap: 20px;

    .aboutMetextContainer,
    .greeting,
    .textContainer {
      width: 100%;
      align-items: center;
      text-align: center;
    }

    .aboutMetextContainer img {
      margin: 0;
      width: 350px!important;
      height: 350px;
    }

    .greeting {
      align-items: center;
      margin-left: 0px;
    }
    
    .greeting p {
      font-size: 12px;
    }

    .textContainer {
      align-items: center;
      margin-top: 0;
      margin-bottom: 5rem;
    }
  }
`;

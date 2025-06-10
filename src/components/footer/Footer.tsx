import styled from 'styled-components';
import DownloadCv from '../navbar/DownloadCv';

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-inner">
        <div className="footer-logo-area">
          <div className="footer-logo">&lt;Fausto&gt;</div>
          <DownloadCv />
        </div>

        <div className="footer-contact">
          <h2>CONTACTO</h2>
          <div className="contact-row">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            <p>faustoscarmato@hotmail.com</p>
          </div>
        </div>

        <div className="footer-redes">
          <h2>REDES</h2>
          <div className="icons">
            <a href="https://github.com/faustou">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/fausto-scarmato/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zM3.743 5.182c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025H8.5V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
            <a href="mailto:faustoscarmato@hotmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648"/>
              </svg>
            </a>

          </div>
        </div>
      </div>

      <p className="copyright">© 2024 Fausto Scarmato. Todos los derechos reservados.</p>
    </FooterStyles>
  );
};

export default Footer;



const FooterStyles = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  padding: 2.5rem 2rem;
  color: ${({ theme }) => theme.text};
  font-family: 'Kanit', sans-serif;
  font-size: 1rem;

  .footer-inner {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    border-bottom: 1px solid #444;
    padding-bottom: 1.5rem;
  }

  .footer-logo {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }

  .footer-contact,
  .footer-redes {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-contact h2,
  .footer-redes h2 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .contact-row {
    display: flex;
    gap: 0.8rem;
    color: ${({ theme }) => theme.text};
  }
  
  .contact-row svg {
  fill:  ${({ theme }) => theme.text};
  }

  .icons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .icons svg {
    color: ${({ theme }) => theme.text};
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .icons svg:hover {
    transform: scale(1.2);
  }

  .copyright {
    text-align: center;
    margin-top: 2rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
  }

  .footer-logo-area {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  /* MOBILE STYLES */
  @media (max-width: 768px) {
    .footer-inner {
      flex-direction: column;
      align-items: center;
      border-bottom: none;
      padding-bottom: 0;
      gap: 2rem;
    }

    .footer-logo {
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
    }

    .contact-row {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      text-align: center;
    }

    .footer-contact h2 {
      display: none;
    }

    .footer-redes {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }

    .icons {
      justify-content: center;
    }

    .icons svg {
        width: 40px;
        height: 40px;
        padding: 8px;
        border: 1px solid #a259ff;
        border-radius: 50%;
        box-sizing: content-box;
        display: inline-block;
    }

    .icons svg path {
        transform: scale(0.8);
        transform-origin: center;
    }

    .copyright {
      margin-top: 2.5rem;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.text};
      line-height: 1.5;
    }

    .footer-logo-area {
      align-items: center;
      text-align: center;
    }
  }
`;

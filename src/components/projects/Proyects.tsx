import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './ProyectsStyles.css';
import { Navigation } from 'swiper/modules';
import { Button, Modal } from 'react-bootstrap';
import ReactIcon from '../../assets/icons/react.svg';
import JsIcon from '../../assets/icons/js.svg';
import MpIcon from '../../assets/icons/MP.svg';
import CssIcon from '../../assets/icons/css.svg';
import BootstrapIcon from '../../assets/icons/bootstrap.svg';
import TrelloIcon from '../../assets/icons/trello.svg';
import FirebaseIcon from '../../assets/icons/firebase.svg';
import SassIcon from '../../assets/icons/sass.svg';
import StyledComponents from '../../assets/icons/styledcomponents.svg';

const Proyects = () => {
  const [showModal, setShowModal] = useState(null); // Controla qué modal está abierto

  const handleShow = (index) => setShowModal(index); // Abre un modal específico
  const handleClose = () => setShowModal(null); // Cierra el modal

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          967: { slidesPerView: 3 },
        }}
      >
        {/* Proyecto 1: 3NG TECH */}
        <SwiperSlide>
      <div className='tech-3ng'>
        <Button className='ButtonView' variant="dark" onClick={() => handleShow(1)}>
          <img width="64" height="64" src="https://img.icons8.com/arcade/64/look.png" alt="look"/>
        </Button>

        <div className="stack-icons">
            <img src={ReactIcon} alt="React" />
            <img src={JsIcon} alt="JavaScript" />
            <img src={BootstrapIcon} alt="Bootstrap" />
            <img src={TrelloIcon} alt="Trello" />
        </div>
      </div>
    </SwiperSlide>


        {/* Proyecto 2: COINPAY */}
        <SwiperSlide>
        <div className='coinpay'>
          <Button className='ButtonView' variant="dark" onClick={() => handleShow(2)}>
            <img width="64" height="64" src="https://img.icons8.com/arcade/64/look.png" alt="look"/>  
          </Button>

          <div className="stack-icons">
            <img src={ReactIcon} alt="React" />
            <img width="48" height="48" src="https://img.icons8.com/lollipop/48/database.png" alt="database"/>
            <img src={StyledComponents} alt="Styled-Components" />
            <img src={BootstrapIcon} alt="Bootstrap" />
          </div>
        </div>
        </SwiperSlide>

        {/* Proyecto 3: BACHSHOP */}
        <SwiperSlide>
        <div className='bachshop'>
          <Button className='ButtonView' variant="dark" onClick={() => handleShow(3)}>
            <img width="64" height="64" src="https://img.icons8.com/arcade/64/look.png" alt="look"/>
          </Button>

          <div className="stack-icons">
          <img src={JsIcon} alt="JavaScript" />
          <img src={FirebaseIcon} alt="Firebase" />
          <img src={SassIcon} alt="SASS" />
          <img src={BootstrapIcon} alt="Bootstrap" />
        </div>
        </div>
        </SwiperSlide>

                {/* Proyecto 4: GA */}
        <SwiperSlide>
        <div className='GA-FIT'>
          <Button className='ButtonView' variant="dark" onClick={() => handleShow(4)}>
            <img width="64" height="64" src="https://img.icons8.com/arcade/64/look.png" alt="look"/>
          </Button>

          <div className="stack-icons">
          <img src={ReactIcon} alt="React" />
          <img src={MpIcon} alt="Mercado-Pago" />
          <img src={CssIcon} alt="CSS" />
          <img src={BootstrapIcon} alt="Bootstrap" />
        </div>
        </div>
        </SwiperSlide>
      </Swiper>

      {/* MODAL PARA 3NG TECH */}
      <Modal show={showModal === 1} onHide={handleClose} centered contentClassName="tech-modal modal-content">
        <Modal.Body className="tech-modal-body">
          <div className="modal-card-tech">
            <h2 className="modal-title-tech">3NG TECH</h2>
            <h3 className="modal-subtitle-tech">— WEB DESIGN</h3>
            <p className="modal-description-tech">
              Agencia digital enfocada en diseño web para empresas tecnológicas. Landing page clara, moderna, orientada a la captación de leads.
            </p>
            <p className="modal-tech-tech">
              <strong>Tecnologías:</strong> JavaScript, React, Bootstrap, SASS
            </p>
            <div className="modal-actions">
              <a href="https://3ng.tech" target="_blank" rel="noopener noreferrer">
                <Button className="modal-visit-tech">VER SITIO</Button>
              </a>
            </div>
            <Button className='button-close modal-visit-tech' variant="secondary" onClick={handleClose}>X</Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* MODAL PARA COINPAY */}
      <Modal show={showModal === 2} onHide={handleClose} centered contentClassName='modal-content'>
        <Modal.Body className="coinpay-modal modal-coinpay">
          <div className="modal-card-coinpay">
            <h2 className="modal-title-coinpay">COINPAY<br />Crypto Bank Web3</h2>
            <p className="modal-description-coinpay">
              Plataforma de servicios financieros Web3 que permite operaciones con criptomonedas. Interfaz rápida, moderna y optimizada para el ecosistema blockchain.
            </p>
            <p className="modal-tech-coinpay">
              <strong>Tecnologías:</strong> React, JavaScript, Styled-Components, API REST, Axios
            </p>
            <div className="modal-actions">
              <a href="https://coinpay.netlify.app" target="_blank" rel="noopener noreferrer">
                <Button className="modal-visit-coinpay">Visitar sitio</Button>
              </a>
            </div>
          </div>
          <Button className='modal-visit-coinpay button-close' variant="secondary" onClick={handleClose}>X</Button>
        </Modal.Body>
      </Modal>

      {/* MODAL PARA BACHSHOP */}
      <Modal show={showModal === 3} onHide={handleClose} centered contentClassName='modal-content'>
      <Modal.Body className='modal-bach bachshop-modal'>
          <div className="modal-card">
            <h2 className="modal-title">BachShop —<br />E-Commerce de Bienestar</h2>
            <p className="modal-description">
              Tienda online especializada en esencias florales de Bach. Pensada para personas que buscan bienestar emocional, con un diseño cálido y funcional que facilita la experiencia de compra.
            </p>
            <p className="modal-tech">
              <strong>Tecnologías:</strong> JavaScript, Firebase, SASS, Bootstrap
            </p>
            <div className="modal-actions">
              <a href="https://bachshop.netlify.app" target="_blank" rel="noopener noreferrer">
                <Button className="modal-visit">Visitar sitio</Button>
              </a>
            </div>
          </div>
          <Button className='button-close modal-visit' variant="secondary" onClick={handleClose}>X</Button>
        </Modal.Body>
      </Modal>

      {/* MODAL PARA GA-FIT */}
      <Modal show={showModal === 4} onHide={handleClose} centered contentClassName='modal-content'>
        <Modal.Body className='modal-gafit gafit-modal'>
          <div className="modal-card-gafit">
            <h2 className="modal-title-gafit">FITPLANS —<br />Planes Fitness Online</h2>
            <p className="modal-description-gafit">
              Plataforma moderna y responsiva para entrenadores y gimnasios. Presentación clara de planes de entrenamiento, pago con Mercado Pago, enfoque comercial directo y diseño atractivo.
            </p>
            <p className="modal-tech-gafit">
              <strong>Tecnologías:</strong> React, SDK Mercado Pago, CSS, Bootstrap
            </p>
            <div className="modal-actions">
              <a href="">
                <Button className="modal-visit-gafit">Visitar sitio</Button>
              </a>
            </div>
          </div>
          <Button className='button-close modal-visit-gafit' variant="secondary" onClick={handleClose}>X</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Proyects;

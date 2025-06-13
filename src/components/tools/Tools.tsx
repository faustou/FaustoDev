import styled from 'styled-components';

const Tools = () => {
    return (
        <ToolsStyles>
            <h2>HABILIDADES DESARROLLADAS: </h2>
            <section className='layout'>
                <div className='tools card'>
                    <div className="card-body">
                        <div className='tool'>
                            <div>
                                <div className='icon-container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
                                </div>
                            </div>
                            <div className='icon-text'>
                                <p className='main-title'>Desarrollo Frontend</p>
                                <p className='sub-title'>React.js, Angular.js</p>
                            </div>
                        </div>
                        <div className='description-tool'>
                            <p className='description'>Construcción de interfaces de usuario responsivas e interactivas con características modernas de React y Angular.js para un rendimiento óptimo.</p>
                        </div>
                    </div>
                </div>
                <div className='tools card'>
                    <div className="card-body">
                        <div className='tool'>
                            <div>
                            <div className='icon-container'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3"><path d="M300-360q-25 0-42.5-17.5T240-420v-40h60v40h60v-180h60v180q0 25-17.5 42.5T360-360h-60Zm220 0q-17 0-28.5-11.5T480-400v-40h60v20h80v-40H520q-17 0-28.5-11.5T480-500v-60q0-17 11.5-28.5T520-600h120q17 0 28.5 11.5T680-560v40h-60v-20h-80v40h100q17 0 28.5 11.5T680-460v60q0 17-11.5 28.5T640-360H520Z"/></svg>
                                    </div>
                            </div>
                            <div className='icon-text'>
                                <p className='main-title'>TypeScript</p>
                                <p className='sub-title'>TypeScript, JavaScript</p>
                            </div>
                        </div>
                        <div className='description-tool'>
                            <p className='description'>Escritura de código con lenguajes seguros para una mejor mantenibilidad y experiencia del desarrollador.</p>
                        </div>
                    </div>
                </div>
                <div className='tools card'>
                    <div className="card-body">
                        <div className='tool'>
                            <div>
                                <div className='icon-container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h420v-140H160v140Zm500 0h140v-360H660v360ZM160-460h420v-140H160v140Z"/></svg>
                                </div>
                            </div>
                            <div className='icon-text'>
                                <p className='main-title'>Diseño UI/UX</p>
                                <p className='sub-title'>Styled Components, SASS, Bootstrap...</p>
                            </div>
                        </div>
                        <div className='description-tool'>
                            <p className='description'>Creación de interfaces de usuario bonitas e intuitivas con principios y marcos de diseño modernos.</p>
                        </div>
                    </div>
                </div>
                <div className='tools card'>
                    <div className="card-body">
                        <div className='tool'>
                            <div>
                                <div className='icon-container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M467-120q-73-1-136-14t-110-34.5q-47-21.5-74-50T120-280q0 33 27 61.5t74 50Q268-147 331-134t136 14Zm-15-200q-38-2-73.5-6.5t-67.5-12q-32-7.5-60-17.5t-51-23q23 13 51 23t60 17.5q32 7.5 67.5 12T452-320Zm28-279q89 0 179-26.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 27 101.5 53.5T480-599Zm220 479h40v-164l72 72 28-28-120-120-120 120 28 28 72-72v164Zm20 80q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM443-201q3 22 9 42t15 39q-73-1-136-14t-110-34.5q-47-21.5-74-50T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v187q-19-9-39-15t-41-9v-62q-52 29-124 44t-156 15q-85 0-157-15t-123-44v101q51 47 130.5 62.5T480-400h11q-13 18-22.5 38T452-320q-76-4-141-18.5T200-379v99q7 13 30 26.5t56 24q33 10.5 73.5 18T443-201Z"/></svg>
                                </div>
                            </div>
                            <div className='icon-text'>
                                <p className='main-title'>Gestión de Estado</p>
                                <p className='sub-title'>Redux, Context API</p>
                            </div>
                        </div>
                        <div className='description-tool'>
                            <p className='description'>Gestión de estados complejos de aplicaciones con soluciones modernas de gestión de estado.</p>
                        </div>
                    </div>
                </div>
                <div className='tools card'>
                    <div className="card-body">
                        <div className='tool'>
                            <div>
                                <div className='icon-container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M838-65 720-183v89h-80v-226h226v80h-90l118 118-56 57ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 20-2 40t-6 40h-82q5-20 7.5-40t2.5-40q0-20-2.5-40t-7.5-40H654q3 20 4.5 40t1.5 40q0 20-1.5 40t-4.5 40h-80q3-20 4.5-40t1.5-40q0-20-1.5-40t-4.5-40H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h134v80H404q12 43 31 82.5t45 75.5q20 0 40-2.5t40-4.5v82q-20 2-40 4.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm34-240h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm172 462q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5Zm28-462h152q-12-43-31-82.5T480-798q-26 36-45 75.5T404-640Zm234 0h118q-29-51-73-87.5T584-782q18 34 31.5 69.5T638-640Z"/></svg>
                                </div>
                            </div>
                            <div className='icon-text'>
                                <p className='main-title'>Rendimiento Web</p>
                                <p className='sub-title'>Optimización, SEO</p>
                            </div>
                        </div>
                        <div className='description-tool'>
                            <p className='description'>Optimización de aplicaciones web para velocidad, accesibilidad y visibilidad en motores de búsqueda.</p>
                        </div>
                    </div>
                </div>
                <div className='tools card'>
                    <div className="card-body">
                        <div className='tool'>
                            <div>
                                <div className='icon-container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q14 0 26 3t23 8l57-71q-28-31-39-70t-5-78l-81-27q-17 25-43 40t-58 15q-50 0-85-35T0-580q0-50 35-85t85-35q50 0 85 35t35 85v8l81 28q20-36 53.5-61t75.5-32v-87q-39-11-64.5-42.5T360-840q0-50 35-85t85-35q50 0 85 35t35 85q0 42-26 73.5T510-724v87q42 7 75.5 32t53.5 61l81-28v-8q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-32 0-58.5-15T739-515l-81 27q6 39-5 77.5T614-340l57 70q11-5 23-7.5t26-2.5q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-20 6.5-38.5T624-232l-57-71q-41 23-87.5 23T392-303l-56 71q11 15 17.5 33.5T360-160q0 50-35 85t-85 35ZM120-540q17 0 28.5-11.5T160-580q0-17-11.5-28.5T120-620q-17 0-28.5 11.5T80-580q0 17 11.5 28.5T120-540Zm120 420q17 0 28.5-11.5T280-160q0-17-11.5-28.5T240-200q-17 0-28.5 11.5T200-160q0 17 11.5 28.5T240-120Zm240-680q17 0 28.5-11.5T520-840q0-17-11.5-28.5T480-880q-17 0-28.5 11.5T440-840q0 17 11.5 28.5T480-800Zm0 440q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm240 240q17 0 28.5-11.5T760-160q0-17-11.5-28.5T720-200q-17 0-28.5 11.5T680-160q0 17 11.5 28.5T720-120Zm120-420q17 0 28.5-11.5T880-580q0-17-11.5-28.5T840-620q-17 0-28.5 11.5T800-580q0 17 11.5 28.5T840-540ZM480-840ZM120-580Zm360 120Zm360-120ZM240-160Zm480 0Z"/></svg>
                                </div>
                            </div>
                            <div className='icon-text'>
                                <p className='main-title'>Metodologías Ágiles</p>
                                <p className='sub-title'>Scrum, Trello</p>
                            </div>
                        </div>
                        <div className='description-tool'>
                            <p className='description'>Trabajo eficiente en entornos ágiles con enfoque en la entrega continua.</p>
                        </div>
                    </div>
                </div>
                <div className='tools card'>
                    <div className="card-body">
                        <div className='tool'>
                            <div>
                                <div className='icon-container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M600-80v-100L320-320H120v-240h172l108-124v-196h240v240H468L360-516v126l240 120v-50h240v240H600ZM480-720h80v-80h-80v80ZM200-400h80v-80h-80v80Zm480 240h80v-80h-80v80ZM520-760ZM240-440Zm480 240Z"/></svg>
                                </div>
                            </div>
                            <div className='icon-text'>
                                <p className='main-title'>Control de Versiones</p>
                                <p className='sub-title'>Git, GitHub</p>
                            </div>
                        </div>
                        <div className='description-tool'>
                            <p className='description'>Gestión eficiente de versiones de código con Git y colaboración efectiva a través de GitHub.</p>
                        </div>
                    </div>
                </div>
                <div className='tools card'>
                    <div className="card-body">
                        <div className='tool'>
                            <div>
                                <div className='icon-container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z"/></svg>
                                </div>
                            </div>
                            <div className='icon-text'>
                                <p className='main-title'>Multidispositivo</p>
                                <p className='sub-title'>Mobile first, Desktop first</p>
                            </div>
                        </div>
                        <div className='description-tool'>
                            <p className='description'>Diseño y desarrollo de interfaces adaptables a cualquier dispositivo, garantizando una experiencia óptima en móviles, tablets y desktops.</p>
                        </div>
                    </div>
                </div>
                <div className='tools card'>
                    <div className="card-body">
                        <div className='tool'>
                            <div>
                                <div className='icon-container'>
                                    <svg fill="#e3e3e3" height="24px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" id="Expertise" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M245.368,46.908c0.738,0.535,1.049,1.488,0.768,2.355l-5.426,16.697c-0.633,1.943,1.592,3.559,3.244,2.357L258.157,58 c0.738-0.537,1.738-0.537,2.477,0l14.203,10.318c1.652,1.201,3.877-0.414,3.246-2.357l-5.426-16.697 c-0.283-0.867,0.027-1.82,0.766-2.355l14.203-10.457c1.652-1.201,0.805-3.951-1.238-3.951h-17.557c-0.912,0-1.723-0.451-2.004-1.32 l-5.426-16.628c-0.631-1.941-3.379-1.908-4.01,0.033l-5.426,16.578c-0.283,0.867-1.092,1.337-2.006,1.337h-17.557 c-2.041,0-2.891,2.75-1.238,3.951L245.368,46.908z"></path> <path d="M419.888,105.883c-0.645-0.646-0.801-1.635-0.387-2.447l7.971-15.645c0.926-1.818-1.018-3.762-2.838-2.836l-15.643,7.971 c-0.813,0.416-1.801,0.258-2.447-0.387L394.13,80.125c-1.443-1.445-3.891-0.197-3.572,1.82l2.746,17.34 c0.143,0.902-0.313,1.795-1.125,2.209l-15.643,7.971c-1.82,0.926-1.391,3.641,0.627,3.959l17.34,2.748 c0.904,0.143,1.611,0.85,1.754,1.752l2.744,17.34c0.32,2.018,3.035,2.447,3.961,0.627l7.971-15.643 c0.414-0.814,1.307-1.268,2.209-1.125l17.34,2.746c2.018,0.32,3.266-2.129,1.82-3.572L419.888,105.883z"></path> <path d="M497.972,252.951l-16.354-5.426c-0.871-0.283-1.117-1.092-1.117-2.006v-17.557c0-2.041-2.957-2.891-4.156-1.238 l-10.486,14.203c-0.539,0.738-1.578,1.049-2.445,0.768l-16.739-5.428c-1.941-0.631-3.578,1.592-2.379,3.244l10.311,14.205 c0.535,0.738,0.532,1.738-0.005,2.477l-10.322,14.205c-1.199,1.652,0.412,3.875,2.355,3.244l16.696-5.426 c0.869-0.281,1.818,0.027,2.357,0.766l10.659,14.203c1.199,1.652,4.154,0.805,4.154-1.238v-17.557c0-0.914,0.246-1.723,1.117-2.004 l16.527-5.428C500.086,256.33,499.915,253.582,497.972,252.951z"></path> <path d="M139.704,108.779c2.018-0.32,2.447-3.033,0.629-3.961l-15.643-7.971c-0.816-0.414-1.271-1.307-1.125-2.209l2.744-17.34 c0.32-2.018-2.129-3.264-3.572-1.82l-12.412,12.414c-0.646,0.646-1.637,0.803-2.449,0.387l-15.645-7.971 c-1.818-0.926-3.762,1.018-2.834,2.836l7.969,15.645c0.416,0.813,0.26,1.801-0.387,2.447L84.565,113.65 c-1.443,1.443-0.197,3.893,1.82,3.572l17.34-2.746c0.904-0.143,1.793,0.311,2.209,1.125l7.971,15.643 c0.928,1.82,3.641,1.391,3.959-0.627l2.748-17.34c0.143-0.902,0.85-1.609,1.752-1.752L139.704,108.779z"></path> <path d="M67.948,232.941c1.199-1.65-0.416-3.875-2.357-3.242l-16.697,5.424c-0.869,0.283-1.82-0.027-2.355-0.766l-10.274-14.203 c-1.199-1.652-3.764-0.805-3.764,1.238v17.557c0,0.914-0.634,1.723-1.505,2.004l-16.721,5.428c-1.941,0.629-1.957,3.377-0.013,4.01 L31,255.814c0.869,0.283,1.5,1.092,1.5,2.006v17.557c0,2.041,2.565,2.891,3.764,1.238l10.298-14.203 c0.537-0.738,1.473-1.049,2.342-0.766l16.691,5.426c1.943,0.631,3.553-1.592,2.354-3.244l-10.32-14.203 c-0.537-0.74-0.536-1.74,0.001-2.479L67.948,232.941z"></path> <path d="M370.45,256.971c-1.906-41.326-25.762-76.92-60.197-95.363c-2.715-1.48-5.514-2.838-8.371-4.074 c-13.943-6.061-29.33-9.424-45.504-9.424c-60.75,0-110.352,47.451-113.909,107.326l0.031-0.006v0.203 c0,2.209-0.105,12.098-0.105,12.098l-1.701,3.77h11.371c4.273-14,17.393-23.568,32.871-23.568 c18.945,0,34.359,15.826,34.359,34.771c0,18.943-15.414,34.052-34.359,34.052c-18.135,0-33.029-14.255-34.266-32.255h-13.568 c-0.289,0-0.563,0.463-0.842,0.424l-14.273,39.865c-2.004,5.559,2.113,11.711,8.02,11.711h12.291l-0.092,63.488 c0,12.535,10.166,22.512,22.701,22.512H205.5v59.693c0,9.301,9.341,16.307,18.642,16.307h104.434 c9.301,0,16.925-7.006,16.925-16.307V362.277c0-16.357,4.316-32.328,11.959-46.795c7.984-15.111,12.658-32.227,13.094-50.404 c0.02-0.912,0.029-1.844,0.029-2.777C370.582,260.518,370.53,258.734,370.45,256.971z M258.216,248.5H248.5v9.793 c0,3.418-3.084,6.188-6.5,6.188s-6.5-2.77-6.5-6.188V248.5h-8.802c-3.416,0-6.188-3.084-6.188-6.5s2.771-6.5,6.188-6.5h8.802 v-8.725c0-3.416,3.084-6.188,6.5-6.188s6.5,2.771,6.5,6.188v8.725h9.716c3.416,0,6.188,3.084,6.188,6.5 S261.632,248.5,258.216,248.5z"></path> <path d="M200.507,298.637c3.938-3.982,6.414-9.449,6.414-15.523c0-12.129-9.855-21.982-21.984-21.982 c-6.008,0-11.475,2.408-15.457,6.346c-4.025,4.004-6.523,9.539-6.523,15.637c0,12.127,9.854,21.982,21.98,21.982 C191.013,305.096,196.524,302.621,200.507,298.637z"></path> </g> </g></svg>
                                </div>
                            </div>
                            <div className='icon-text'>
                                <p className='main-title'>Soft Skills</p>
                                <p className='sub-title'></p>
                            </div>
                        </div>
                        <div className='description-tool'>
                            <p className='description'>Comunicación, trabajo en equipo, resolución de problemas, adaptabilidad.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ToolsStyles>
    );
};

export default Tools;

const ToolsStyles = styled.div`
  width: 100vw;
  font-family: 'Inter', sans-serif;
  background: ${({ theme }) => theme.bg};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .layout {
    width: 100%;
    display: flex;
    gap: 28px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .tools {
    width: 470px;
    height: 180px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${({ theme }) => theme.primary};
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border: 1px solid #262626;
    transition: transform 0.3s ease;
  }

  .tools:hover {
    transform: translateY(-5px);
  }

  .tool {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 20px;
    gap: 20px;
  }

  .icon-container {
    background-color:${({ theme }) => theme.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    height: 48px;
    width: 48px;
    box-shadow: 0 4px 10px rgba(162, 89, 255, 0.3);
  }

  .icon-container svg {
    width: 28px;
    height: 28px;
  }

  .icon-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .main-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0;
  }

  .sub-title {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
    margin-top: -3px;
  }

  .description-tool {
    margin: 0px 15px 25px 15px;
  }

  .description {
    margin: 0 0 0 10px;
    text-align: left;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
  }

  h2 {
    margin: 5rem 2rem;
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.text};
    text-align: center;
  }

  @media (max-width: 967px) {
    h2 {
      margin: 3rem;
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    background-size: 60px 60px;
    background-position: center top;

    h2 {
      margin: 3rem;
      font-size: 1.6rem;
    }
  }

  @media (max-width: 600px) {
    .tools {
      width: 360px;
      height: 170px;
    }
    h2 {
      margin: 3rem;
      font-size: 1.4rem;
    }
  }

  @media (max-width: 425px) {
    .tools {
      width: 320px;
      height: 180px;
    }

    h2 {
      margin: 1.5rem;
      font-size: 1.2rem;
    }
  }
`;

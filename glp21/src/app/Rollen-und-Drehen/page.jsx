'use client'

import Image from 'next/image';
import React, { useState } from 'react';

function page() {

  const [expandedStep1, setExpandedStep1] = useState(null);
  const [expandedStep2, setExpandedStep2] = useState(null);
  const [expandedStep3, setExpandedStep3] = useState(null);
  const [expandedStep4, setExpandedStep4] = useState(null);

  const handleToggle1 = (alt) => {
    setExpandedStep1(prev => (prev === alt ? null : alt));
  };
  const handleToggle2 = (alt) => {
    setExpandedStep2(prev => (prev === alt ? null : alt));
  };
  const handleToggle3 = (alt) => {
    setExpandedStep3(prev => (prev === alt ? null : alt));
  };
  const handleToggle4 = (alt) => {
    setExpandedStep4(prev => (prev === alt ? null : alt));
  };

  const step1 = [
    { src: "/vids/RollenD/Schritt1einfach.mp4", alt: "Übung Einfach", desc: "Felgaufzug in den Stütz am unteren Holmen und Rolle vorwärts", resc: "Felgaufzug in den Stütz am unteren Holmen und Rolle vorwärts" },
    { src: "/vids/RollenD/Schritt1mittel.mp4", alt: "Übung Mittel", desc: "Feldaufschwung mit Stütz vorlings am hohen Holm, Hinuntergleiten gebückt über niederen Holm in Hockstand", resc: "Feldaufschwung mit Stütz vorlings am hohen Holm, Hinuntergleiten gebückt über niederen Holm in Hockstand" },
    { src: "/vids/RollenD/Schritt1schwer.mp4", alt: "Übung Schwer", desc: "Felgaufzug am hohen Holmen mit Felgabschwung vorwärts gespreizt am hohen Holm", resc: "Felgaufzug am hohen Holmen mit Felgabschwung vorwärts gespreizt am hohen Holm" },
    { src: "/vids/RollenD/Schritt1erkl1.mp4", alt: "Erklärung 1", desc: "Erklärung 1", resc: "Beim Felgaufzug wird ein Drehgriff verwendet. So kann mit einer Hand gestützt und mit der anderen dem Bein Schwung gegeben werden. Beim Abrollen verwendet man dann den Klammergriff." },
    { src: "/vids/RollenD/Schritt1erkl2.mp4", alt: "Erklärung 2", desc: "Erklärung 2", resc: "Beim Felgaufzug am hohen Holmen wird ebenfalls ein Drehgriff verwendet, zusätzlich kann durch den Stützgriff geholfen werden, damit die Stange erreicht wird." }
  ];

  const step2 = [
    { src: "/vids/RollenD/Schritt2einfach.mp4", alt: "Übung Einfach", desc: "Felge vorwärts", resc: "Felge vorwärts" },
    { src: "/vids/RollenD/Schritt2mittel.mp4", alt: "Übung Mittel", desc: "Felgaufzug", resc: "Felgaufzug" },
    { src: "/vids/RollenD/Schritt2schwer.mp4", alt: "Übung Schwer", desc: "Bauchwelle", resc: "Bauchwelle" },
    { src: "/vids/RollenD/Schritt2erkl1.mp4", alt: "Erklärung 1", desc: "Erklärung 1", resc: "Beim Felgaufzug am Reck wird der Drehgriff verwendet, damit mit dem Schwung geholfen werden kann." },
    { src: "/vids/RollenD/Schritt2erkl2.mp4", alt: "Erklärung 2", desc: "Erklärung 2", resc: "Bei der Bauchwelle wird ein Stützgriff verwendet, weil so die Turnenden an der Stange bleiben." },
    { src: "/vids/RollenD/Schritt2erkl3.mp4", alt: "Erklärung 3", desc: "Erklärung 3", resc: "Selbständig können Kindern den Felgaufzug machen, indem sie einen Gymnastikball zur Hilfe nehmen." }
  ];

  const step3 = [
    { src: "/vids/RollenD/Schritt3einfach.mp4", alt: "Übung Einfach 1", desc: "Rolle vor- und rückwärts", resc: "Rolle vor- und rückwärts" },
    { src: "/vids/RollenD/Schritt3einfach2.mp4", alt: "Übung Einfach 2", desc: "Rolle vor- und rückwärts", resc: "Rolle vor- und rückwärts" },
    { src: "/vids/RollenD/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Rad auf beide Seiten", resc: "Rad auf beide Seiten" },
    { src: "/vids/RollenD/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Handstandabrollen", resc: "Handstandabrollen" },
    { src: "/vids/RollenD/Schritt3erkl.mp4", alt: "Erklärungen", desc: "Erklärungen", resc: "Beim Handstandabrollen wird ein Klammergriff verwendet, damit die Turnenden gut im Handstand stehen können. Tipp: Beim Abrollen kann langsam mit nach unten gegangen werden. → Wichtig, immer den Kopf einziehen." }
  ];

  const step4 = [
    { src: "/vids/RollenD/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Rolle aus dem Stand", resc: "Rolle aus dem Stand" },
    { src: "/vids/RollenD/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Sprungrolle", resc: "Sprungrolle" },
    { src: "/vids/RollenD/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Rückwärtsrolle", resc: "Rückwärtsrolle" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wichtig zu beachten ist, dass das Kinn immer bei der Brust ist, so wird das Rollen einfacher." }
  ];

  return (
    <>
      {/* Bahnenbild */}
      <div className="flex-container">
        <div className="ame">
          <h2>Bahnenbild</h2>
          <a href="/vids/RollenD/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/RollenD/GanzeBahn.jpeg" alt="Gesamte Bahn" />
          </a>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ margin: "0 2.75rem" }}>Posten 1</p> <p style={{ margin: "0 2.75rem" }}>Posten 2</p> <p style={{ margin: "0 2.75rem" }}>Posten 3</p> <p style={{ margin: "0 2.75rem" }}>Posten 4</p>
          </div>
        </div>
      </div>
      {/* Infotexts */}
      <div className="flex-container">
        <div className="abme">
          <h2>Informationen zur Bahn</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            Die Gerätebahn gehört zu der Kategorie «Rollen und Drehen» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b style={{ color: '#dcc' }}>Sicherheitshinweis:</b><br />
            Wichtig ist, dass die Geräte kontrolliert werden. Zudem sollte beachtet werden, dass das Minitramp an der 40er-Matte befestigt wird, um Verschiebungen zu vermeiden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Posten 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>1x Schulstufenbarren</li>
            <b>Posten 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Reck</li>
            <li style={{ marginLeft: '24px' }}>6x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x Gymnastikball</li>
            <b>Posten 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>10x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>3x Bänkli</li>
            <li style={{ marginLeft: '24px' }}>4x Seile</li>
            <b>Posten 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Minitrampolin</li>
            <li style={{ marginLeft: '24px' }}>1x 40er-Matte (Sprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>3x Kastenteile</li>
            <li style={{ marginLeft: '24px' }}>2x Seile</li>
          </div>
        </div>
      </div>
      {/*Posten 1*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Posten 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Schulstufenbarren</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/RollenD/Schritt1bild.jpeg" alt="Posten 1" />
            </div>
            <br />
            <div className="pics">
              {step1.map((step1) => (
                <div className="responsive" key={step1.alt} onClick={() => handleToggle1(step1.alt)}>
                  <div className="gallery">
                    {expandedStep1 === step1.alt ? (
                      <>
                        <a style={{ pointerEvents: "none", cursor: "default" }} href={step1.src}>
                          <Image
                            src={step1.src}
                            alt={step1.alt}
                            width={300}
                            height={200}
                            layout="responsive"
                            quality={75}
                          />
                        </a>
                        <div className="desc">{step1.resc}</div>
                      </>
                    ) : (
                      <div className="desc">{step1.desc}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </details>
      {/*Posten 2*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Posten 2</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Reck</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/RollenD/Schritt2bild.jpeg" alt="Posten 2" />
            </div>
            <br />
            <div className="pics">
              {step2.map((step2) => (
                <div className="responsive" key={step2.alt} onClick={() => handleToggle2(step2.alt)}>
                  <div className="gallery">
                    {expandedStep2 === step2.alt ? (
                      <>
                        <a style={{ pointerEvents: "none", cursor: "default" }} href={step2.src}>
                          <Image
                            src={step2.src}
                            alt={step2.alt}
                            width={300}
                            height={200}
                            layout="responsive"
                            quality={75}
                          />
                        </a>
                        <div className="desc">{step2.resc}</div>
                      </>
                    ) : (
                      <div className="desc">{step2.desc}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </details>
      {/*Posten 3*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Posten 3</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Schiefe Ebene mit einer Bodenbahn</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/RollenD/Schritt3bild.jpeg" alt="Posten 3" />
            </div>
            <br />
            <div className="pics">
              {step3.map((step3) => (
                <div className="responsive" key={step3.alt} onClick={() => handleToggle3(step3.alt)}>
                  <div className="gallery">
                    {expandedStep3 === step3.alt ? (
                      <>
                        <a style={{ pointerEvents: "none", cursor: "default" }} href={step3.src}>
                          <Image
                            src={step3.src}
                            alt={step3.alt}
                            width={300}
                            height={200}
                            layout="responsive"
                            quality={75}
                          />
                        </a>
                        <div className="desc">{step3.resc}</div>
                      </>
                    ) : (
                      <div className="desc">{step3.desc}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </details>
      {/*Posten 4*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Posten 4</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Sprunganlage mit Minitramp</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/RollenD/Schritt4bild.jpeg" alt="Posten 4" />
            </div>
            <br />
            <div className="pics">
              {step4.map((step4) => (
                <div className="responsive" key={step4.alt} onClick={() => handleToggle4(step4.alt)}>
                  <div className="gallery">
                    {expandedStep4 === step4.alt ? (
                      <>
                        <a style={{ pointerEvents: "none", cursor: "default" }} href={step4.src}>
                          <Image
                            src={step4.src}
                            alt={step4.alt}
                            width={300}
                            height={200}
                            layout="responsive"
                            quality={75}
                          />
                        </a>
                        <div className="desc">{step4.resc}</div>
                      </>
                    ) : (
                      <div className="desc">{step4.desc}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </details>
    </>
  )
}


export default page
// blabla

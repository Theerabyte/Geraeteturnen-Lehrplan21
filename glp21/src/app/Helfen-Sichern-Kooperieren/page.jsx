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
    { src: "/vids/HelfenSichern/Schritt1einfach.mp4", alt: "Übung Einfach", desc: "Handstand", resc: "Handstand" },
    { src: "/vids/HelfenSichern/Schritt1mittel.mp4", alt: "Übung Mittel", desc: "Handstandabrollen", resc: "Handstandabrollen" },
    { src: "/vids/HelfenSichern/Schritt1schwer.mp4", alt: "Übung Schwer", desc: "Kopfstand", resc: "Kopfstand" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Hier sollen die Kinder Klammergriffe verwenden, so haben sie optimalen Halt." }
  ];

  const step2 = [
    { src: "/vids/HelfenSichern/Schritt2einfach.mp4", alt: "Übung Einfach", desc: "Vorschwung", resc: "Vorschwung" },
    { src: "/vids/HelfenSichern/Schritt2mittel.mp4", alt: "Übung Mittel", desc: "Bauchwelle", resc: "Bauchwelle" },
    { src: "/vids/HelfenSichern/Schritt2schwer.mp4", alt: "Übung Schwer", desc: "Felgauszug", resc: "Felgauszug" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Beim Vorschwung wird der Klammergriff verwendet. Bei der Bauchwelle darf das Seil nicht zu locker sein und es muss darauf geachtet werden, dass es in die richtige Richtung gedreht wird. Beim Felgaufzug sollen die Kinder den Drehgriff verwenden." }
  ];

  const step3 = [
    { src: "/vids/HelfenSichern/Schritt3einfach.mp4", alt: "Übung Einfach", desc: "Türmli", resc: "Türmli" },
    { src: "/vids/HelfenSichern/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Flieger", resc: "Flieger" },
    { src: "/vids/HelfenSichern/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Sternheber", resc: "Sternheber" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Mit mutigen Kindern kann auch der Freihändige Flieger geübt werden. Hier sollte eine Lehrperson dem Kind nahe am Körperschwerpunkt helfen." }
  ];

  const step4 = [
    { src: "/vids/HelfenSichern/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Handstandabrollen", resc: "Handstandabrollen" },
    { src: "/vids/HelfenSichern/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Handstandaufgang", resc: "Handstandaufgang" },
    { src: "/vids/HelfenSichern/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Feldaufschwung mit Stütz vorlings am hohen Holm", resc: "Feldaufschwung mit Stütz vorlings am hohen Holm" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Die Kinder verwenden hier hauptsächlich Klammergriffe, ausser beim Felgaufzug, da empfiehlt sich ein Drehgriff." }
  ];

  return (
    <>
      {/* Bahnenbild */}
      <div className="flex-container">
        <div className="ame">
          <h2>Bahnenbild</h2>
          <a href="/vids/HelfenSichern/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/HelfenSichern/GanzeBahn.jpeg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Helfen und Sichern» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass die Kinder vorher eine Einführung bekommen, was alles wichtig ist beim Helfen. Sie sollten wissen, dass man den Kopf zur Brust nehmen sollte, wo man hält und welche Hilfsgriffe verwendet werden sollten.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Posten 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
            <b>Posten 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Reck</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <b>Posten 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
            <b>Posten 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schulstufenbarren</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
          </div>
        </div>
      </div>
      {/*Posten 1*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Posten 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Boden</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/HelfenSichern/Schritt1bild.jpeg" alt="Posten 1" />
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
              <img src="/vids/HelfenSichern/Schritt2bild.jpeg" alt="Posten 2" />
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
            <h2>Boden mit einer Sprossenwand</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/HelfenSichern/Schritt3bild.jpeg" alt="Posten 3" />
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
            <h2>Schulstufenbarren</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/HelfenSichern/Schritt4bild.jpeg" alt="Posten 4" />
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
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
    { src: "/vids/BeweglichkeitKraft/Schritt1einfach.mov", alt: "Übung Einfach", desc: "Liegestützdrehen", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt1mittel.mov", alt: "Übung Mittel", desc: "Liegestützposition auf einem Ball", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt1schwer.mov", alt: "Übung Schwer", desc: "Grätsche mit Übungen", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt1bild.jpg", alt: "Erklärungen", desc: "Erklärungen", resc: "Bei der Liegestütze sollte ein klares I ersichtlich sein." }
  ];

  const step2 = [
    { src: "/vids/BeweglichkeitKraft/Schritt2einfach.mov", alt: "Übung Einfach", desc: "Vorhandstütz", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt2mittel.mov", alt: "Übung Mittel", desc: "Rückhandstütz", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt2schwer.mov", alt: "Übung Schwer", desc: "Liegestützen", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt2bild.jgp", alt: "Erklärungen", desc: "Erklärungen", resc: "Bei allen 3 Übungen muss von den Turnenden aus den Schultern gestossen werden, dabei muss der Bauch angespannt sein." }
  ];

  const step3 = [
    { src: "/vids/BeweglichkeitKraft/Schritt3einfach.mov", alt: "Übung Einfach", desc: "Handstand", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt3mittel.mov", alt: "Übung Mittel", desc: "Klappmesser", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt3schwer.mov", alt: "Übung Schwer", desc: "Brücke", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/SChritt3bild.JPEG", alt: "Erklärungen", desc: "Erklärungen", resc: "Wenn die Kinder unsicher sind, kann beim Handstand durch einen Klammergriff geholfen werden." }
  ];

  const step4 = [
    { src: "/vids/BeweglichkeitKraft/Schritt4einfach.mov", alt: "Übung Einfach", desc: "Springen mit Stütz", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt4mittel.mov", alt: "Übung Mittel", desc: "Aufsprung mit Stütz", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt4schwer.mov", alt: "Übung Schwer", desc: "Überschlag", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt4erklärung.mov", alt: "Erklärungen", desc: "Erklärungen", resc: "Beim Überschlag wird der Kreuzgriff verwendet, so wird der turnenden Person das Drehen erleichtert." }
  ];

  return (
    <>
      {/* Bahnenbild */}
      <div className="flex-container">
        <div className="ame">
          <h2>Bahnenbild</h2>
          <a href="/vids/BeweglichkeitKraft/GanzeBahn.jpg" target="_blank">
            <img src="/vids/BeweglichkeitKraft/GanzeBahn.jpg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Beweglichkeit und Kraft» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass beim Posten 4 immer eine erwachsene Person anwesend ist für die Sicherheit der Turnenden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Posten 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
            <b>Posten 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Reck</li>
            <li style={{ marginLeft: '24px' }}>2x Gummiband</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <b>Posten 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
            <b>Posten 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Schwedenkasten</li>
            <li style={{ marginLeft: '24px' }}>1x Minitramp</li>
            <li style={{ marginLeft: '24px' }}>1x 40er-Matte (Sprungmatte)</li>
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
              <img src="/vids/BeweglichkeitKraft/Schritt1bild.jpeg" alt="Posten 1" />
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
              <img src="/vids/BeweglichkeitKraft/Schritt2bild.jpeg" alt="Posten 2" />
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
            <h2>Sprossenwand</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/BeweglichkeitKraft/Schritt3bild.jpeg" alt="Posten 3" />
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
            <h2>Sprung mit einem Kasten</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/BeweglichkeitKraft/Schritt4bild.jpeg" alt="Posten 4" />
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

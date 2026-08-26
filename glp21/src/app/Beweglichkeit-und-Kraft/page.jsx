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
    { src: "/vids/BeweglichkeitKraft/Schritt1einfach.mp4", alt: "Übung Einfach", desc: "Liegestützdrehen", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt1mittel.mp4", alt: "Übung Mittel", desc: "Liegestützposition auf einem Ball", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt1schwer.mp4", alt: "Übung Schwer", desc: "Grätsche mit Übungen", resc: "? Untertittel" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Bei der Liegestütze sollte ein klares I ersichtlich sein." }
  ];

  const step2 = [
    { src: "/vids/BeweglichkeitKraft/Schritt2einfach.mp4", alt: "Übung Einfach", desc: "Vorhandstütz", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt2mittel.mp4", alt: "Übung Mittel", desc: "Rückhandstütz", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt2schwer.mp4", alt: "Übung Schwer", desc: "Liegestützen", resc: "? Untertittel" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Bei allen 3 Übungen muss von den Turnenden aus den Schultern gestossen werden, dabei muss der Bauch angespannt sein." }
  ];

  const step3 = [
    { src: "/vids/BeweglichkeitKraft/Schritt3einfach.mp4", alt: "Übung Einfach", desc: "Handstand", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Klappmesser", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Brücke", resc: "? Untertittel" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wenn die Kinder unsicher sind, kann beim Handstand durch einen Klammergriff geholfen werden." }
  ];

  const step4 = [
    { src: "/vids/BeweglichkeitKraft/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Springen mit Stütz", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Aufsprung mit Stütz", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Überschlag", resc: "? Untertittel" },
    { src: "/vids/BeweglichkeitKraft/Schritt4erklärung.mp4", alt: "Erklärungen", desc: "Erklärungen", resc: "Beim Überschlag wird der Kreuzgriff verwendet, so wird der turnenden Person das Drehen erleichtert." }
  ];

  return (
    <>
      {/* Bahnenbild */}
      <div className="flex-container">
        <div className="ame">
          <h2>Bahnenbild</h2>
          <a href="/vids/BeweglichkeitKraft/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/BeweglichkeitKraft/GanzeBahn.jpeg" alt="Gesamte Bahn" />
          </a>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ margin: "0 2.75rem" }}>Station 1</p> <p style={{ margin: "0 2.75rem" }}>Station 2</p> <p style={{ margin: "0 2.75rem" }}>Station 3</p> <p style={{ margin: "0 2.75rem" }}>Station 4</p>
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
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 1</summary>
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
                        {step1.src ? (
                          <video
                            width={400}
                            height={300}
                            controls
                            src={step1.src}
                            alt={step1.alt}
                            style={{ maxWidth: '100%', height: 'auto' }}
                            onClick={(e) => e.stopPropagation()}
                          />) : null}
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
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 2</summary>
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
                        {step2.src ? (
                          <video
                            width={400}
                            height={300}
                            controls
                            src={step2.src}
                            alt={step2.alt}
                            style={{ maxWidth: '100%', height: 'auto' }}
                            onClick={(e) => e.stopPropagation()}
                          />) : null}
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
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 3</summary>
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
                        {step3.src ? (
                          <video
                            width={400}
                            height={300}
                            controls
                            src={step3.src}
                            alt={step3.alt}
                            style={{ maxWidth: '100%', height: 'auto' }}
                            onClick={(e) => e.stopPropagation()}
                          />) : null}
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
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 4</summary>
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
                        {step4.src ? (
                          <video
                            width={400}
                            height={300}
                            controls
                            src={step4.src}
                            alt={step4.alt}
                            style={{ maxWidth: '100%', height: 'auto' }}
                            onClick={(e) => e.stopPropagation()}
                          />) : null}
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

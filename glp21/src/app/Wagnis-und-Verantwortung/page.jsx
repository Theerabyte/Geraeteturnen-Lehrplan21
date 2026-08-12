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
    { src: "/vids/WagnisVerantwortung/Schritt1einfach.mp4", alt: "Übung Einfach", desc: "Klettern auf allen Vieren", resc: "Klettern auf allen Vieren" },
    { src: "/vids/WagnisVerantwortung/Schritt1mittel.mp4", alt: "Übung Mittel", desc: "Klettern mit Niedersprung", resc: "Klettern mit Niedersprung" },
    { src: "/vids/WagnisVerantwortung/Schritt1schwer.mp4", alt: "Übung Schwer", desc: "Hochhangeln mit Niedersprung", resc: "Hochhangeln mit Niedersprung" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wichtig ist, dass die Kinder beim Niedersprung erst nach unten schauen. Tipp: Bei rutschigen Händen ist Magnesium hilfreich." }
  ];

  const step2 = [
    { src: "/vids/WagnisVerantwortung/Schritt2einfach.mp4", alt: "Übung Einfach", desc: "Streckspünge mit Pausen", resc: "Streckspünge mit Pausen" },
    { src: "/vids/WagnisVerantwortung/Schritt2mittel.mp4", alt: "Übung Mittel", desc: "Strecksprünge", resc: "Strecksprünge" },
    { src: "/vids/WagnisVerantwortung/Schritt2schwer.mp4", alt: "Übung Schwer", desc: "Strecksprünge mit einer Sprungrolle", resc: "Strecksprünge mit einer Sprungrolle" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Bei unsicheren Kindern kann durch eine Hand das Getrauen gefördert werden." }
  ];

  const step3 = [
    { src: "/vids/WagnisVerantwortung/Schritt3einfach.mp4", alt: "Übung Einfach", desc: "Rutschen im Päckli mit einer Rolle", resc: "Rutschen im Päckli mit einer Rolle" },
    { src: "/vids/WagnisVerantwortung/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Rutschen auf dem Rücken mit einer Rolle", resc: "Rutschen auf dem Rücken mit einer Rolle" },
    { src: "/vids/WagnisVerantwortung/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Rutschen auf dem Bauch mit einer Rolle", resc: "Rutschen auf dem Bauch mit einer Rolle" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Durch das Verstellen der Höhe des Kastens kann das Bänkli steiler gemacht werden." }
  ];

  const step4 = [
    { src: "/vids/WagnisVerantwortung/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Springen im Barren", resc: "Springen im Barren" },
    { src: "/vids/WagnisVerantwortung/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Springen im Barren mit Niedersprung", resc: "Springen im Barren mit Niedersprung" },
    { src: "/vids/WagnisVerantwortung/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Durchsprung im Barren", resc: "Durchsprung im Barren" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wenn Kinder den Niedersprung das erste Mal machen, kann man für die Sicherheit eine dünne Yogamatte über den Holmen legen." }
  ];

  return (
    <>
      {/* Bahnenbild */}
      <div className="flex-container">
        <div className="ame">
          <h2>Bahnenbild</h2>
          <a href="/vids/WagnisVerantwortung/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/WagnisVerantwortung/GanzeBahn.jpeg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Wagnis und Verantwortung» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass die Kletterstange gut befestigt ist. Zudem sollte beim Schwedenkasten einige Teile herausgenommen werden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Posten 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>Kletterstange</li>
            <li style={{ marginLeft: '24px' }}>1x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 40er-Matte (Sprungmatte)</li>
            <b>Posten 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schwedenkasten</li>
            <li style={{ marginLeft: '24px' }}>1x 40er-Matte (Sprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>1x - 2x Minitramp</li>
            <li style={{ marginLeft: '24px' }}>1x Booster</li>
            <b>Posten 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schwedenkasten</li>
            <li style={{ marginLeft: '24px' }}>1x Bänkli</li>
            <li style={{ marginLeft: '24px' }}>5x dünne Matten (Leichtturnmatten)</li>
            <b>Posten 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Barren</li>
            <li style={{ marginLeft: '24px' }}>1x Sprungbock</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
          </div>
        </div>
      </div>
      {/*Posten 1*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Posten 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Kletterstangen</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/WagnisVerantwortung/Schritt1bild.jpeg" alt="Posten 1" />
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
        <summary style={{ fontSize: 'x-Large' }}>Übungen Posten 2</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Sprungparcours</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/WagnisVerantwortung/Schritt2bild.jpeg" alt="Posten 2" />
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
        <summary style={{ fontSize: 'x-Large' }}>Übungen Posten 3</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Schräges Bänkli</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/WagnisVerantwortung/Schritt3bild.jpeg" alt="Posten 3" />
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
        <summary style={{ fontSize: 'x-Large' }}>Übungen Posten 4</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Sprungbarren</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/WagnisVerantwortung/Schritt4bild.jpeg" alt="Posten 4" />
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
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
    { src: "/vids/RollenD/Schritt1einfach.mov", alt: "Übung Einfach", desc: "Darüber laufen vor- und rückwärts", resc: "? Untertitel" },
    { src: "/vids/RollenD/Schritt1mittel.mov", alt: "Übung Mittel", desc: "Springen mit Standwaagen", resc: "? Untertitel" },
    { src: "/vids/RollenD/Schritt1schwer.mov", alt: "Übung Schwer", desc: "Handstand an der Sprossenwand", resc: "? Untertitel" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Damit die Motivation vorhanden bleibt, können die Seile selber in Formen gelegt werden und zusätzliche ergänzt werden." }
  ];

  const step2 = [
    { src: "/vids/RollenD/Schritt2einfach.mov", alt: "Übung Einfach", desc: "Darüber laufen vor- und rückwärts", resc: "Darüberlaufen vor- und rückwärts" },
    { src: "/vids/RollenD/Schritt2mittel.mov", alt: "Übung Mittel", desc: "Halbe und ganze Drehungen", resc: "Halbe und ganze Drehungen" },
    { src: "/vids/RollenD/Schritt2schwer.mov", alt: "Übung Schwer", desc: "Standwaage", resc: "Standwaage" },
    { src: "/vids/RollenD/Schritt2erkl.mov", alt: "Erklärungen", desc: "Erklärungen", resc: "Hilfsgriffe: Bei der Standwaage sollte der Stützgriff verwendet werden und möglichst nahe am Körperschwerpunkt gehalten werden. Kinder können sich auch selber helfen, indem sie sich die Hand geben und so dem Gleichgewicht helfen." }
  ];

  const step3 = [
    { src: "/vids/RollenD/Schritt3einfach.mov", alt: "Übung Einfach", desc: "Darüber laufen", resc: "Darüber laufen" },
    { src: "/vids/RollenD/Schritt3mittel.mov", alt: "Übung Mittel", desc: "Seitwärts darüber laufen", resc: "Seitwärts darüber laufen" },
    { src: "/vids/RollenD/Schritt3schwer.mov", alt: "Übung Schwer", desc: "Standwaage", resc: "Standwaage" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wenn die Kinder sehr unsicher sind, kann der Barren zu Beginn auch geradegestellt werden." }
  ];

  const step4 = [
    { src: "/vids/RollenD/Schritt4einfach.mov", alt: "Übung Einfach", desc: "Darüber laufen", resc: "Darüber laufen" },
    { src: "/vids/RollenD/Schritt4mittel.mov", alt: "Übung Mittel", desc: "Auf den Knien darüber und evtl. Jemanden kreuzen", resc: "Auf den Knien darüber und evtl. Jemanden kreuzen" },
    { src: "/vids/RollenD/Schritt4schwer.mov", alt: "Übung Schwer", desc: "Kreativ mit Bällen", resc: "Kreativ mit Bällen" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Bei Bedarf können die Bänkli zu Beginn auch andersrum stehen." }
  ];

  return (
    <>
      {/* <h1>Balancieren</h1> */}
      <div className="flex-container">
        <div className="abme">
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <br />
            <h2>Bahnenbild</h2>
            <br />
            <p>Schrittennummerierung</p>
            <br />
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
            <li style={{ marginLeft: '24px' }}>6x dünne Matten (Leitturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x Gymnastikball</li>
            <b>Posten 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>10x dünne Matten (Leitturnmatten)</li>
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
      <details>
        <summary>Schritt 1</summary>
        <div className="flex-container">
          <div className="HnI">
            <h2>InfoText: Übungen</h2>
            {/* <h4>InfoText</h4> */}
            <br />
            <div className="pics">
              {step1.map((hobby) => (
                <div className="responsive" key={hobby.alt} onClick={() => handleToggle(hobby.alt)}>
                  <div className="gallery">
                    {expandedHobby === hobby.alt ? (
                      <>
                        <a style={{ pointerEvents: "none", cursor: "default" }} href={hobby.src}>
                          <Image
                            src={hobby.src}
                            alt={hobby.alt}
                            width={300}
                            height={200}
                            layout="responsive"
                            quality={75}
                          />
                        </a>
                        <div className="desc">{hobby.resc}</div>
                      </>
                    ) : (
                      <div className="desc">{hobby.desc}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </details>
      <details>
        <summary>Schritt 2</summary>
        <div className="flex-container">
          <div className="HnI">
            <h2>InfoText: Übungen</h2>
            {/* <h4>InfoText</h4> */}
            <br />
            <div className="pics">
              {step2.map((hobby) => (
                <div className="responsive" key={hobby.alt} onClick={() => handleToggle(hobby.alt)}>
                  <div className="gallery">
                    {expandedHobby === hobby.alt ? (
                      <>
                        <a style={{ pointerEvents: "none", cursor: "default" }} href={hobby.src}>
                          <Image
                            src={hobby.src}
                            alt={hobby.alt}
                            width={300}
                            height={200}
                            layout="responsive"
                            quality={75}
                          />
                        </a>
                        <div className="desc">{hobby.resc}</div>
                      </>
                    ) : (
                      <div className="desc">{hobby.desc}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </details>
      <details>
        <summary>Schritt 3</summary>
        <div className="flex-container">
          <div className="HnI">
            <h2>InfoText: Übungen</h2>
            {/* <h4>InfoText</h4> */}
            <br />
            <div className="pics">
              {step3.map((hobby) => (
                <div className="responsive" key={hobby.alt} onClick={() => handleToggle(hobby.alt)}>
                  <div className="gallery">
                    {expandedHobby === hobby.alt ? (
                      <>
                        <a style={{ pointerEvents: "none", cursor: "default" }} href={hobby.src}>
                          <Image
                            src={hobby.src}
                            alt={hobby.alt}
                            width={300}
                            height={200}
                            layout="responsive"
                            quality={75}
                          />
                        </a>
                        <div className="desc">{hobby.resc}</div>
                      </>
                    ) : (
                      <div className="desc">{hobby.desc}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </details>
      <details>
        <summary>Schritt 4</summary>
        <div className="flex-container">
          <div className="HnI">
            <h2>InfoText: Übungen</h2>
            {/* <h4>InfoText</h4> */}
            <br />
            <div className="pics">
              {step4.map((hobby) => (
                <div className="responsive" key={hobby.alt} onClick={() => handleToggle(hobby.alt)}>
                  <div className="gallery">
                    {expandedHobby === hobby.alt ? (
                      <>
                        <a style={{ pointerEvents: "none", cursor: "default" }} href={hobby.src}>
                          <Image
                            src={hobby.src}
                            alt={hobby.alt}
                            width={300}
                            height={200}
                            layout="responsive"
                            quality={75}
                          />
                        </a>
                        <div className="desc">{hobby.resc}</div>
                      </>
                    ) : (
                      <div className="desc">{hobby.desc}</div>
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

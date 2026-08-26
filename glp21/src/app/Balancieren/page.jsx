'use client'

import React, { useState } from 'react';

const stepsData = [
    {
        image1: "/vids/Balacieren/Schritt1bild.jpg",
        items1: [
            { src: "/vids/Balacieren/Schritt1einfach.mov", alt: "Übung Einfach", desc: "Darüber laufen vor- und rückwärts", resc: "Darüber laufen vor- und rückwärts" },
            { src: "/vids/Balacieren/Schritt1mittel.mov", alt: "Übung Mittel", desc: "Springen mit Standwaagen", resc: "Springen mit Standwaagen" },
            { src: "/vids/Balacieren/Schritt1schwer.mov", alt: "Übung Schwer", desc: "Handstand an der Sprossenwand", resc: "Handstand an der Sprossenwand" },
            { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Damit die Motivation vorhanden bleibt, können die Seile selber in Formen gelegt werden und zusätzliche ergänzt werden." }
        ],
        image2: "/vids/Balacieren/Schritt2bild.jpeg",
        items2: [
            { src: "/vids/Balacieren/Schritt2einfach.mov", alt: "Übung Einfach", desc: "Darüber laufen vor- und rückwärts", resc: "Darüberlaufen vor- und rückwärts" },
            { src: "/vids/Balacieren/Schritt2mittel.mov", alt: "Übung Mittel", desc: "Halbe und ganze Drehungen", resc: "Halbe und ganze Drehungen" },
            { src: "/vids/Balacieren/Schritt2schwer.mov", alt: "Übung Schwer", desc: "Standwaage", resc: "Standwaage" },
            { src: "/vids/Balacieren/Schritt2erkl.mov", alt: "Erklärungen", desc: "Erklärungen", resc: "Hilfsgriffe: Bei der Standwaage sollte der Stützgriff verwendet werden und möglichst nahe am Körperschwerpunkt gehalten werden. Kinder können sich auch selber helfen, indem sie sich die Hand geben und so dem Gleichgewicht helfen." }
        ],
        image3: "/vids/Balacieren/Schritt3bild.jpeg",
        items3: [
            { src: "/vids/Balacieren/Schritt3einfach.mp4", alt: "Übung Einfach", desc: "Darüber laufen", resc: "Darüber laufen" },
            { src: "/vids/Balacieren/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Seitwärts darüber laufen", resc: "Seitwärts darüber laufen" },
            { src: "/vids/Balacieren/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Standwaage", resc: "Standwaage" },
            { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wenn die Kinder sehr unsicher sind, kann der Barren zu Beginn auch geradegestellt werden." }
        ],
        image4: "/vids/Balacieren/Schritt4bild.jpeg",
        items4: [
            { src: "/vids/Balacieren/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Darüber laufen", resc: "Darüber laufen" },
            { src: "/vids/Balacieren/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Auf den Knien darüber und evtl. Jemanden kreuzen", resc: "Auf den Knien darüber und evtl. Jemanden kreuzen" },
            { src: "/vids/Balacieren/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Kreativ mit Bällen", resc: "Kreativ mit Bällen" },
            { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Bei Bedarf können die Bänkli zu Beginn auch andersrum stehen." }
        ],
    }
];

function MediaItem({ item, isExpanded, onToggle }) {
    return (
        <div className="responsive" onClick={() => onToggle(item.alt)}>
            <div className="gallery">
                {isExpanded ? (
                    <>
                        {item.src && item.src.endsWith('.mp4') ? (
                            <video
                                width={400}
                                height={300}
                                controls
                                src={item.src}
                                alt={item.alt}
                                style={{ maxWidth: '100%', height: 'auto' }}
                                onClick={(e) => e.stopPropagation()}
                                preload="metadata"
                            />
                        ) : item.src ? (
                            <video
                                width={400}
                                height={300}
                                controls
                                src={item.src}
                                alt={item.alt}
                                style={{ maxWidth: '100%', height: 'auto' }}
                                onClick={(e) => e.stopPropagation()}
                                preload="metadata"
                            />
                        ) : null}
                        <div className="desc">{item.resc}</div>
                    </>
                ) : (
                    <div className="desc">{item.desc}</div>
                )}
            </div>
        </div>
    );
}

export default function Page() {
    const [expandedItems, setExpandedItems] = useState({});

    const toggleItem = (stepKey, alt) => {
        setExpandedItems((prev) => ({
            ...prev,
            [stepKey]: prev[stepKey] === alt ? null : alt,
        }));
    };

  return (
    <>
      {/* Bahnenbild */}
      <div className="flex-container">
        <div className="ame">
          <h2>Bahnenbild</h2>
          <a href="/vids/Balacieren/GanzeBahn.jpg" target="_blank">
            <img src="/vids/Balacieren/GanzeBahn.jpg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Balancieren» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass die Sprossenwand gut befestig ist. Auch beim Reck und Barren sollte eine erwachsene Person kontrollieren, ob alles befestigt ist.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Station 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>2x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>3x - 4x Sprungseile</li>
            <b>Station 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x tiefes Reck</li>
            <li style={{ marginLeft: '24px' }}>2x dünne Matten (Leichtturnmatten)</li>
            <b>Station 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schulstufenbarren</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <b>Station 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Bänkli</li>
          </div>
        </div>
      </div>
      {/*Station 1*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Balancieren mit Seilen</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Balacieren/Schritt1bild.jpg" alt="Station 1" />
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
      {/*Station 2*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 2</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Tiefes Reck</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Balacieren/Schritt2bild.jpeg" alt="Station 2" />
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
      {/*Station 3*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 3</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Schräger Schulstufenbarren</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Balacieren/Schritt3bild.jpeg" alt="Station 3" />
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
      {/*Station 4*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 4</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Bänklibalken</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Balacieren/Schritt4bild.jpeg" alt="Station 4" />
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
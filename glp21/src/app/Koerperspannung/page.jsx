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
    { src: "/vids/Koerperspannung/Schritt1einfach.mp4", alt: "Übung Einfach", desc: "Spagetti", resc: "Spagetti" },
    { src: "/vids/Koerperspannung/Schritt1mittel.mp4", alt: "Übung Mittel", desc: "Drehen auf dem Rücken", resc: "Drehen auf dem Rücken" },
    { src: "/vids/Koerperspannung/Schritt1schwer.mp4", alt: "Übung Schwer", desc: "Schiffli", resc: "Schiffli" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Beim C+ sollten die Schultern immer in der Luft sein, so kann besser gedreht werden." }
  ];

  const step2 = [
    { src: "/vids/Koerperspannung/Schritt2einfach.mp4", alt: "Übung Einfach", desc: "Strecksprünge", resc: "Strecksprünge" },
    { src: "/vids/Koerperspannung/Schritt2mittel.mp4", alt: "Übung Mittel", desc: "Strecksprünge mit einem Ball", resc: "Strecksprünge mit einem Ball" },
    { src: "/vids/Koerperspannung/Schritt2schwer.mp4", alt: "Übung Schwer", desc: "Handstand", resc: "Handstand" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Hier ist wichtig, dass die Turnenden nicht die Kontrolle verlieren. Bei unsicheren Kindern kann zu Beginn ein Reuterbrett verwendet werden." }
  ];

  const step3 = [
    { src: "/vids/Koerperspannung/Schritt3einfach.mp4", alt: "Übung Einfach", desc: "Schaukeln im Stand", resc: "Schaukeln im Stand" },
    { src: "/vids/Koerperspannung/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Beidbeiniges Schaukeln auf dem Kasten", resc: "Beidbeiniges Schaukeln auf dem Kasten" },
    { src: "/vids/Koerperspannung/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Vor- und Rückschaukeln", resc: "Vor- und Rückschaukeln" },
    { src: "/vids/Koerperspannung/Schritt3erkl1.mp4", alt: "Erklärung 1", desc: "Erklärung 1", resc: "Beim Schaukeln im Stand sollte darauf geachtet werden, dass das Kurbet immer gleich abläuft. Durch Stützgriffe kann das kontrolliert werden." },
    { src: "/vids/Koerperspannung/Schritt3erkl2.mp4", alt: "Erklärung 2", desc: "Erklärung 2", resc: "Damit beim Schwingen auf dem Kasten auch ein schönes C1 ausgeführt wird, kann im Vorschwung die turnende Person gehalten werden. Dafür benutzt man ein Stützgriff." }
  ];

  const step4 = [
    { src: "/vids/Koerperspannung/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Liegestützdrehen", resc: "Liegestützdrehen" },
    { src: "/vids/Koerperspannung/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Spagetti stehen", resc: "Spagetti stehen" },
    { src: "/vids/Koerperspannung/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Liegestützkampf", resc: "Liegestützkampf" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wichtig ist, dass die Kinder nicht durchhängen in den Positionen, es soll also ein schönes I zu sehen sein." }
  ];

  return (
    <>
      {/* Bahnenbild */}
      <div className="flex-container">
        <div className="ame">
          <h2>Bahnenbild</h2>
          <a href="/vids/Koerperspannung/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/Koerperspannung/GanzeBahn.jpeg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Körperspannung» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass das Minitramp immer wieder kontrolliert wird, da dies leicht verrutschen kann. Vorzeitig kann mit den Kindern noch trocken die Positionen C+, C- und I angeschaut werden, so können die Übungen besser ausgeführt werden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Posten 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Ball</li>
            <li style={{ marginLeft: '24px' }}>1x Holzstab</li>
            <li style={{ marginLeft: '24px' }}>1x Kastenteil</li>
            <b>Posten 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>1x Kastenteil</li>
            <li style={{ marginLeft: '24px' }}>1x Minitramp</li>
            <li style={{ marginLeft: '24px' }}>2x dünne Matten (Leichtturnmatten)</li>
            <b>Posten 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Schaukelringe</li>
            <li style={{ marginLeft: '24px' }}>2x 16er-Matte (Niedersprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>6x dünne Matten (Leichtturnmatten)</li>
            <b>Posten 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
          </div>
        </div>
      </div>
      {/*Posten 1*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Posten 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Kasten</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Koerperspannung/Schritt1bild.jpeg" alt="Posten 1" />
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
            <h2>Sprung an der Sprossenwand</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Koerperspannung/Schritt2bild.jpeg" alt="Posten 2" />
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
            <h2>Schaukelringe</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Koerperspannung/Schritt3bild.jpeg" alt="Posten 3" />
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
            <h2>Boden</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Koerperspannung/Schritt4bild.jpeg" alt="Posten 4" />
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
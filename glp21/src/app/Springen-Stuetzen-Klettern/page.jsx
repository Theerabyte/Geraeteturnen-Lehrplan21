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
    { src: "/vids/SpringenSK/Schritt1einfach.mp4", alt: "Übung Einfach", desc: "Strecksprünge", resc: "Strecksprünge" },
    { src: "/vids/SpringenSK/Schritt1mittel.mp4", alt: "Übung Mittel", desc: "Strecksprünge mit halber Drehung", resc: "Strecksprünge mit halber Drehung" },
    { src: "/vids/SpringenSK/Schritt1schwer.mp4", alt: "Übung Schwer", desc: "Strecksprünge mit Päckli- und Grätschwinkelsprung", resc: "Strecksprünge mit Päckli- und Grätschwinkelsprung" },
    { src: "/vids/SpringenSK/Schritt1erkl.mp4",  alt: "Erklärungen", desc: "Erklärungen", resc: "Durch den Klammergriff nahe am Körperschwerpunkt kann bei gespannten Sprüngen geholfen werden." }
  ];

  const step2 = [
    { src: "/vids/SpringenSK/Schritt2einfach.mp4", alt: "Übung Einfach", desc: "Durchstützen", resc: "Durchstützen" },
    { src: "/vids/SpringenSK/Schritt2mittel.mp4", alt: "Übung Mittel", desc: "Hoch- und Runterdrücken", resc: "Hoch- und Runterdrücken" },
    { src: "/vids/SpringenSK/Schritt2schwer1.mp4", alt: "Übung Schwer 1", desc: "Sturzhang oder Winkelstütz", resc: "Sturzhang oder Winkelstütz" },
    { src: "/vids/SpringenSK/Schritt2schwer2.mp4", alt: "Übung Schwer 2", desc: "Sturzhang oder Winkelstütz", resc: "Sturzhang oder Winkelstütz" },
    { src: "/vids/SpringenSK/Schritt2erkl.mp4", alt: "Erklärungen", desc: "Erklärungen", resc: "Bei dem Winkelstütz wird ein Stützgriff verwendet, so können die Beine gespannt bleiben." }
  ];

  const step3 = [
    { src: "/vids/SpringenSK/Schritt3einfach.mp4", alt: "Übung Einfach", desc: "Klettern und Bändeli mit der Hand berühren", resc: "Klettern und Bändeli mit der Hand berühren" },
    { src: "/vids/SpringenSK/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Klettern und Bändeli mit dem Fuss berühren mit Drehungen", resc: "Klettern und Bändeli mit dem Fuss berühren mit Drehungen" },
    { src: "/vids/SpringenSK/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Im Handstand laufen und Bändeli berühren", resc: "Im Handstand laufen und Bändeli berühren" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Die Kinder können selber auch Parcours zusammenstellen, indem sie verschiedene Farben der Bändeli wählen." }
  ];

  const step4 = [
    { src: "/vids/SpringenSK/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Strecksprung", resc: "Strecksprung" },
    { src: "/vids/SpringenSK/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Sprungrolle", resc: "Sprungrolle" },
    { src: "/vids/SpringenSK/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Salto vorwärts", resc: "Salto vorwärts" },
    { src: "/vids/SpringenSK/Schritt4erkl1.mp4", alt: "Erklärung 1", desc: "Erklärung 1", resc: "Damit die Turnenden im Strecksprung höher kommen, kann anhand einer Angel der Fokus auf die Höhe gesetzt werden." },
    { src: "/vids/SpringenSK/Schritt4erkl2.mp4", alt: "Erklärung 2", desc: "Erklärung 2", resc: "Bei der Sprungrolle kann dasselbe gemacht werden, indem eine Hand als Höhe dient." },
    { src: "/vids/SpringenSK/Schritt4erkl3.mp4", alt: "Erklärung 3", desc: "Erklärung 3", resc: "Beim Halten des Saltos wird ein Kreuzgriff verwendet, so kann eine Drehung sicher ablaufen." }
  ];

  return (
    <>
      {/* Bahnenbild */}
      <div className="flex-container">
        <div className="ame">
          <h2>Bahnenbild</h2>
          <a href="/vids/SpringenSK/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/SpringenSK/GanzeBahn.jpeg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Springen, Stützen und Klettern» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b style={{ color: '#dcc' }}>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass die Sprossenwand und der Barren kontrolliert werden, ob diese fest stehen. Beim Minitramp kann die Höhe variiert werden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Posten 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Reuterbrett</li>
            <li style={{ marginLeft: '24px' }}>1x Kastenteil</li>
            <li style={{ marginLeft: '24px' }}>1x dünne Matten (Leichtturnmatten)</li>
            <b>Posten 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Barren</li>
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
            <b>Posten 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>8x - 12x Bändeli</li>
            <b>Posten 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schwedenkasten</li>
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
            <h2>Reuterbrett</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/SpringenSK/Schritt1bild.jpeg" alt="Posten 1" />
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
            <h2>Barren</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/SpringenSK/Schritt2bild.jpeg" alt="Posten 2" />
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
              <img src="/vids/SpringenSK/Schritt3bild.jpeg" alt="Posten 3" />
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
            <h2>Sprung</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/SpringenSK/Schritt4bild.jpeg" alt="Posten 4" />
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
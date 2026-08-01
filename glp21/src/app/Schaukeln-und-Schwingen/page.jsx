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
    { src: "/vids/SchaukelnSchwingen/Schritt1einfach.mp4", alt: "Übung Einfach", desc: "Rückschwung und Vorschwung", resc: "Rückschwung und Vorschwung" },
    { src: "/vids/SchaukelnSchwingen/Schritt1mittel.mp4", alt: "Übung Mittel", desc: "Rückschwung und Vorschwung mit Grätschsitz", resc: "Rückschwung und Vorschwung mit Grätschsitz" },
    { src: "/vids/SchaukelnSchwingen/Schritt1schwer.mp4", alt: "Übung Schwer", desc: "Rückschwung und Vorschwung mit Wende zum Niedersprung", resc: "Rückschwung und Vorschwung mit Wende zum Niedersprung" },
    { src: "/vids/SchaukelnSchwingen/Schritt1erkl1.mp4", alt: "Erklärung 1", desc: "Erklärung 1", resc: "Beim Schwingen am Barren kann der turnenden Person geholfen werden, indem eine Hand an der Schulter stabilisiert und die andere den Schwung kontrolliert." },
    { src: "/vids/SchaukelnSchwingen/Schritt1erkl2.mp4", alt: "Erklärung 2", desc: "Erklärung 2", resc: "Beim Niedersprung wird ein Stützgriff verwendet, um die Turnenden dabei richtig zu leiten. So erfolgt ein verlangsamter Niedersprung." },
    { src: null, alt: "Erklärung 3", desc: "Erklärung 3", resc: "Tipp: Wenn das Schwingen noch unsicher ist, kann der Niedersprung auch aus dem Stand langsam geübt werden. Auch hier wird ein Stützgriff empfohlen." }
  ];

  const step2 = [
    { src: "/vids/SchaukelnSchwingen/Schritt2einfach.mp4", alt: "Übung Einfach", desc: "Vor- und Rückschweben", resc: "Vor- und Rückschweben" },
    { src: "/vids/SchaukelnSchwingen/Schritt2mittel.mp4", alt: "Übung Mittel", desc: "Grätschwinkel mit Vorschwung", resc: "Grätschwinkel mit Vorschwung" },
    { src: "/vids/SchaukelnSchwingen/Schritt2schwer.mp4", alt: "Übung Schwer", desc: "Rückschwung mit Grätschwinkel", resc: "Rückschwung mit Grätschwinkel" },
    { src: "/vids/SchaukelnSchwingen/Schritt2erkl.mp4", alt: "Erklärungen", desc: "Erklärungen", resc: "Das Halten kann hier auf dem Schwedenkasten gemacht werden. Hierbei sollte ein Stützgriff verwendet werden. Wichtig, nicht an den Gelenken stützen, sondern nahe am Körper halten." }
  ];

  const step3 = [
    { src: "/vids/SchaukelnSchwingen/Schritt3einfach.mp4", alt: "Übung Einfach", desc: "Schwingen", resc: "Schwingen" },
    { src: "/vids/SchaukelnSchwingen/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Schwingen mit Bällen", resc: "Schwingen mit Bällen" },
    { src: "/vids/SchaukelnSchwingen/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Schwingen im Grätschwinkelsitz", resc: "Schwingen im Grätschwinkelsitz" },
    { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Hier kann sich frei ausgelebt werden und mit anderen Übungen ergänzt werden." }
  ];

  const step4 = [
    { src: "/vids/SchaukelnSchwingen/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Rück- und Vorschaukeln", resc: "Rück- und Vorschaukeln" },
    { src: "/vids/SchaukelnSchwingen/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Rück- und Vorschaukeln mit halber Drehung", resc: "Rück- und Vorschaukeln mit halber Drehung" },
    { src: "/vids/SchaukelnSchwingen/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Schaukeln mit Sturzhang", resc: "Schaukeln mit Sturzhang" },
    { src: "/vids/SchaukelnSchwingen/Schritt4erkl1.mp4", alt: "Erklärung 1", desc: "Erklärung 1", resc: "Beim Rück- und Vorschaukeln kann durch ein Anschieben das Schaukeln vereinfacht werden" },
    { src: "/vids/SchaukelnSchwingen/Schritt4erkl2.mp4", alt: "Erklärung 2", desc: "Erklärung 2", resc: "Bei der halben Drehung wird an den Füssen ein Klammergriff verwendet, um den Turnenden so ein Gefühl für die Drehung zu geben." },
    { src: "/vids/SchaukelnSchwingen/Schritt4erkl3.mp4", alt: "Erklärung 3", desc: "Erklärung 3", resc: "Beim Sturzhang wird der Drehgriff verwendet, um den Schwung zu verstärken." }
  ];

  return (
    <>
      {/* Bahnenbild */}
      <div className="flex-container">
        <div className="ame">
          <h2>Bahnenbild</h2>
          <a href="/vids/SchaukelnSchwingen/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/SchaukelnSchwingen/GanzeBahn.jpeg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Schaukeln und Schwingen» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b style={{ color: '#dcc' }}>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass während dem Schwingen an den Ringen, nichts verstellt wird. Beim hohen Reck kann für die höhere Sicherheit Magnesium verwendet werden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Posten 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Barren</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
            <b>Posten 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x hohes Reck</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>2x Schwedenkasten</li>
            <b>Posten 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Bänkli</li>
            <li style={{ marginLeft: '24px' }}>8x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>3x Affenschwänze (Lianen)</li>
            <b>Posten 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schaukelringe</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
          </div>
        </div>
      </div>
      {/*Posten 1*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Posten 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Barren</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/SchaukelnSchwingen/Schritt1bild.jpeg" alt="Posten 1" />
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
            <h2>Hohes Reck</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/SchaukelnSchwingen/Schritt2bild.jpeg" alt="Posten 2" />
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
            <h2>Affenschwänze</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/SchaukelnSchwingen/Schritt3bild.jpeg" alt="Posten 3" />
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
            <h2>Ringe</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/SchaukelnSchwingen/Schritt4bild.jpeg" alt="Posten 4" />
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
'use client'

import Image from 'next/image';
import React, { useState } from 'react';

function page() {

  const [expandedHobby, setExpandedHobby] = useState(null);

  const handleToggle = (alt) => {
    setExpandedHobby(prev => (prev === alt ? null : alt));
  };

  const step1 = [
    { src: "/vids/BeweglichkeitKraft/Schritt1einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach xyz" },
    { src: "/vids/BeweglichkeitKraft/Schritt1mittel.mov", desc: "Übung Mittel", resc: "Übung Mittel xyz" },
    { src: "/vids/BeweglichkeitKraft/Schritt1schwer.mov", desc: "Übung Schwer", resc: "Übung Schwer xzy" },
    { src: "/vids/BeweglichkeitKraft/Schritt1bild.jpg", alt: "Übung Extraschwer", desc: "Übung Extraschwer", resc: "Übung Extraschwer xyz" }
  ];
  
  const step2 = [
    { src: "/vids/BeweglichkeitKraft/Schritt2einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach Untertitel" },
    { src: "/vids/BeweglichkeitKraft/Schritt2mittel.mov", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel Untertitel" },
    { src: "/vids/BeweglichkeitKraft/Schritt2schwer.mov", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer Untertitel" },
    { src: "/vids/BeweglichkeitKraft/Schritt2bild.jgp", alt: "Übung Erklärung", desc: "Übung Erklärung", resc: "Übung Erklärung Untertitel" }
  ];
  
  const step3 = [
    { src: "/vids/BeweglichkeitKraft/Schritt3einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach Untertitel" },
    { src: "/vids/BeweglichkeitKraft/Schritt3mittel.mov", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel Untertitel" },
    { src: "/vids/BeweglichkeitKraft/Schritt3schwer.mov", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer Untertitel" },
    { src: "/vids/BeweglichkeitKraft/SChritt3bild.JPEG", alt: "Übung Erklärung", desc: "Übung Erklärung", resc: "Übung Erklärung Untertitel" }
  ];
  
  const step4 = [
    { src: "/vids/BeweglichkeitKraft/Schritt4einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach Untertitel" },
    { src: "/vids/BeweglichkeitKraft/Schritt4mittel.mov", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel Untertitel" },
    { src: "/vids/BeweglichkeitKraft/Schritt4schwer.mov", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer Untertitel" },
    { src: "/vids/BeweglichkeitKraft/Schritt4erklärung.mov", alt: "Übung Erklärung", desc: "Übung Erklärung", resc: "Übung Erklärung Untertitel" }
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
      <div className="flex-container">
        <div className="abme">
          <h2>InfoText: Geschichte</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            Geschichte zum Ablauf / zur Bahn
          </div>
        </div>
        <div className="abme">
          <h2>InfoText: Material</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            Materialliste & Anwendungsfall
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

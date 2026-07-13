'use client'

import Image from 'next/image';
import React, { useState } from 'react';

function page() {

  const [expandedHobby, setExpandedHobby] = useState(null);

  const handleToggle = (alt) => {
    setExpandedHobby(prev => (prev === alt ? null : alt));
  };

  const step1 = [
    { src: "/vids/Balacieren/Station1einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach Untertitel" },
    { src: "/vids/Balacieren/Station1mittel.mov", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel Untertitel" },
    { src: "/vids/Balacieren/Station1schwer.mov", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer Untertitel" },
    { src: "/vids/Balacieren/Station1bild.jpg", alt: "Übung Erklärung", desc: "Übung Erklärung", resc: "Übung Erklärung Untertitel" }
  ];

  const step2 = [
    { src: "/vids/Balacieren/Station2einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach Untertitel" },
    { src: "/vids/Balacieren/Station2mittel.mov", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel Untertitel" },
    { src: "/vids/Balacieren/Station2schwer.mov", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer Untertitel" },
    { src: "/vids/Balacieren/Station2erkl.mov", alt: "Übung Erklärung", desc: "Übung Erklärung", resc: "Übung Erklärung Untertitel" }
  ];

  const step3 = [
    { src: "/vids/Balacieren/Station3einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach Untertitel" },
    { src: "/vids/Balacieren/Station3mittel.mov", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel Untertitel" },
    { src: "/vids/Balacieren/Station3schwer.mov", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer Untertitel" },
    { src: "/vids/Balacieren/Station3bild.JPEG", alt: "Übung Erklärung", desc: "Übung Erklärung", resc: "Übung Erklärung Untertitel" }
  ];

  const step4 = [
    { src: "/vids/Balacieren/Station4einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach Untertitel" },
    { src: "/vids/Balacieren/Station4mittel.mov", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel Untertitel" },
    { src: "/vids/Balacieren/Station4schwer.mov", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer Untertitel" },
    { src: "/vids/Balacieren/Station4bild.JPEG", alt: "Übung Erklärung", desc: "Übung Erklärung", resc: "Übung Erklärung Untertitel" }
  ];

  return (
    <>
      <div className="flex-container">
        <div className="abme">
          <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2>Bahnenbild</h2>
            <a href="/vids/Balacieren/GanzeBahn.jpg" target="_blank">
              <img src="/vids/Balacieren/GanzeBahn.jpg" alt="Gesamte Bahn" />
            </a>
          </div>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <p style={{ margin: "0 2.75rem" }}>Station 1</p>
            <p style={{ margin: "0 2.75rem" }}>Station 2</p>
            <p style={{ margin: "0 2.75rem" }}>Station 3</p>
            <p style={{ margin: "0 2.75rem" }}>Station 4</p>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="abme">
          <h2>InfoText: Achtungen etc</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            Infos zum Ablauf / zur Bahn
          </div>
        </div>
        <div className="abme">
          <h2>InfoText: Material</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            Materialliste & Anwendungsfall
          </div>
        </div>
      </div>
      {/*Station 1*/}
      <details>
        <summary>Station 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Übungen Station 1</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Balacieren/Station1bild.jpg" alt="Station 1" />
              <h4>InfoText</h4>
            </div>
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
      {/*Station 2*/}
      <details>
        <summary>Station 2</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Übungen Station 2</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Balacieren/Station2bild.jpeg" alt="Station 2" />
              <h4>InfoText</h4>
            </div>
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
      {/*Station 3*/}
      <details>
        <summary>Station 3</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Übungen Station 3</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Balacieren/Station3bild.jpeg" alt="Station 3" />
              <h4>InfoText</h4>
            </div>
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
      {/*Station 4*/}
      <details>
        <summary>Station 4</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Übungen Station 4</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Balacieren/Station4bild.jpeg" alt="Station 4" />
              <h4>InfoText</h4>
            </div>
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

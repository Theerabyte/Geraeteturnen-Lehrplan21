'use client'

import Image from 'next/image';
import React, { useState } from 'react';

function page() {

  const [expandedHobby, setExpandedHobby] = useState(null);

  const handleToggle = (alt) => {
    setExpandedHobby(prev => (prev === alt ? null : alt));
  };

  const step1 = [
    { src: "/hob/ba.jpg", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach xyz" },
    { src: "/hob/bu.jpg", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel xyz" },
    { src: "/hob/da.jpg", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer xzy" },
    { src: "/hob/ic.jpg", alt: "Übung Extraschwer", desc: "Übung Extraschwer", resc: "Übung Extraschwer xyz" }
  ];
  
  const step2 = [
    { src: "/hob/ba.jpg", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach xyz" },
    { src: "/hob/bu.jpg", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel xyz" },
    { src: "/hob/da.jpg", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer xzy" },
    { src: "/hob/ic.jpg", alt: "Übung Extraschwer", desc: "Übung Extraschwer", resc: "Übung Extraschwer xyz" }
  ];
  
  const step3 = [
    { src: "/hob/ba.jpg", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach xyz" },
    { src: "/hob/bu.jpg", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel xyz" },
    { src: "/hob/da.jpg", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer xzy" },
    { src: "/hob/ic.jpg", alt: "Übung Extraschwer", desc: "Übung Extraschwer", resc: "Übung Extraschwer xyz" }
  ];
  
  const step4 = [
    { src: "/hob/ba.jpg", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach xyz" },
    { src: "/hob/bu.jpg", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel xyz" },
    { src: "/hob/da.jpg", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer xzy" },
    { src: "/hob/ic.jpg", alt: "Übung Extraschwer", desc: "Übung Extraschwer", resc: "Übung Extraschwer xyz" }
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

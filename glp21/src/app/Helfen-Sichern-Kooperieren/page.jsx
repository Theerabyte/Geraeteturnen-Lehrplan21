'use client'

import Image from 'next/image';
import React, { useState } from 'react';

function page() {

  const [expandedHobby, setExpandedHobby] = useState(null);

  const handleToggle = (alt) => {
    setExpandedHobby(prev => (prev === alt ? null : alt));
  };

  const hobbies = [
    { src: "/hob/ba.jpg", alt: "ba", desc: "ba", resc: "bad" },
    { src: "/hob/bu.jpg", alt: "bu", desc: "bu", resc: "bud" },
    { src: "/hob/da.jpg", alt: "da", desc: "da", resc: "dad" },
    { src: "/hob/ic.jpg", alt: "ic", desc: "ic", resc: "icd" },
    { src: "/hob/dn.jpg", alt: "dn", desc: "dn", resc: "dnd" },
    { src: "/hob/pc.png", alt: "pc", desc: "pc", resc: "pcd" },
    { src: "/hob/bw.jpg", alt: "bw", desc: "bw", resc: "bwd" },
    { src: "/hob/mu.png", alt: "mu", desc: "mu", resc: "mud" }
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
      <details>
        <summary>Schritt 1</summary>
        <div className="flex-container">
          <div className="abme">
            <h2>InfoText</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
              Text
            </div>
          </div>
          <div className="abme">
            <h2>InfoText</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
              Text
            </div>
          </div>
          <div className="HnI">
            <h2>InfoText</h2>
            <h4>InfoText</h4>
            <br />
            <div className="pics">
              {hobbies.map((hobby) => (
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
            {/* <div className="clearfix"></div> */}
          </div>
        </div>
      </details>
      <details>
        <summary>Schritt 2</summary>
        <div className="flex-container">
          <div className="abme">
            <h2>InfoText</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
              Text
            </div>
          </div>
          <div className="abme">
            <h2>InfoText</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
              Text
            </div>
          </div>
          <div className="HnI">
            <h2>InfoText</h2>
            <h4>InfoText</h4>
            <br />
            <div className="pics">
              {hobbies.map((hobby) => (
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
            {/* <div className="clearfix"></div> */}
          </div>
        </div>
      </details>
      <details>
        <summary>Schritt 3</summary>
        <div className="flex-container">
          <div className="abme">
            <h2>InfoText</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
              Text
            </div>
          </div>
          <div className="abme">
            <h2>InfoText</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
              Text
            </div>
          </div>
          <div className="HnI">
            <h2>InfoText</h2>
            <h4>InfoText</h4>
            <br />
            <div className="pics">
              {hobbies.map((hobby) => (
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
            {/* <div className="clearfix"></div> */}
          </div>
        </div>
      </details>
      <details>
        <summary>Schritt 4</summary>
        <div className="flex-container">
          <div className="abme">
            <h2>InfoText</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
              Text
            </div>
          </div>
          <div className="abme">
            <h2>InfoText</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
              Text
            </div>
          </div>
          <div className="HnI">
            <h2>InfoText</h2>
            <h4>InfoText</h4>
            <br />
            <div className="pics">
              {hobbies.map((hobby) => (
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
            {/* <div className="clearfix"></div> */}
          </div>
        </div>
      </details>
    </>
  )
}

export default page

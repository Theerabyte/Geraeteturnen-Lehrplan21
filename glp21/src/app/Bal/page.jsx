'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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
    <div className="flex-container">
      <div className="abme">
        <h2>hoMe</h2>
        <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
          hoTextMe

        </div>
      </div>
      <div className="HnI">
        <h2>hoHo</h2>
        <h4>hoTextHo</h4>
        <br />
        <div className="pics">
          {hobbies.map((hobby) => (
            <div className="responsive" key={hobby.alt} onClick={() => handleToggle(hobby.alt)}>
              <div className="gallery">
                {expandedHobby === hobby.alt ? (
                  <>
                    <a style={{ pointerEvents: 'none', cursor: 'default' }} href={hobby.src}>
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
        <div className="clearfix"></div>
        <br />
        <div style={{ padding: "6px" }}>
          <p>hoTextIn</p>
        </div>
      </div>
    </div>
  )
}

export default page

'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick'; // Import react-slick

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function page() {

  const [expandedHobby, setExpandedHobby] = useState(null);

  const handleToggle = (alt) => {
    setExpandedHobby(prev => (prev === alt ? null : alt));
  };

  const step1 = [
    { src: "/vids/Balacieren/Schritt1einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach Untertitel" },
    { src: "/vids/Balacieren/Schritt1mittel.mov", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel Untertitel" },
    { src: "/vids/Balacieren/Schritt1schwer.mov", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer Untertitel" },
    { src: "/vids/Balacieren/Schritt1bild.jpg", alt: "Übung Erklärung", desc: "Übung Erklärung", resc: "Übung Erklärung Untertitel" }
  ];

  const step2 = [
    { src: "/vids/Balacieren/Schritt2einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach Untertitel" },
    { src: "/vids/Balacieren/Schritt2mittel.mov", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel Untertitel" },
    { src: "/vids/Balacieren/Schritt2schwer.mov", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer Untertitel" },
    { src: "/vids/Balacieren/Schritt2erkl.mov", alt: "Übung Erklärung", desc: "Übung Erklärung", resc: "Übung Erklärung Untertitel" }
  ];

  const step3 = [
    { src: "/vids/Balacieren/Schritt3einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach Untertitel" },
    { src: "/vids/Balacieren/Schritt3mittel.mov", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel Untertitel" },
    { src: "/vids/Balacieren/Schritt3schwer.mov", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer Untertitel" },
    { src: "/vids/Balacieren/SChritt3bild.JPEG", alt: "Übung Erklärung", desc: "Übung Erklärung", resc: "Übung Erklärung Untertitel" }
  ];

  const step4 = [
    { src: "/vids/Balacieren/Schritt4einfach.mov", alt: "Übung Einfach", desc: "Übung Einfach", resc: "Übung Einfach Untertitel" },
    { src: "/vids/Balacieren/Schritt4mittel.mov", alt: "Übung Mittel", desc: "Übung Mittel", resc: "Übung Mittel Untertitel" },
    { src: "/vids/Balacieren/Schritt4schwer.mov", alt: "Übung Schwer", desc: "Übung Schwer", resc: "Übung Schwer Untertitel" },
    { src: "/vids/Balacieren/Schritt4bild.JPEG", alt: "Übung Erklärung", desc: "Übung Erklärung", resc: "Übung Erklärung Untertitel" }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      {/* Your existing content remains unchanged */}
      
      {/* Example for Step 1 with carousel */}
      <details>
        <summary>Schritt 1</summary>
        <div className="flex-container">
          <div className="HnI">
            <h2>InfoText: Übungen</h2>
            <br />
            <div className="pics">
              <Slider {...sliderSettings}>
                {step1.map((hobby) => (
                  <div key={hobby.alt} onClick={() => handleToggle(hobby.alt)} style={{ cursor: 'pointer' }}>
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
                        <>
                          <Image
                            src={hobby.src}
                            alt={hobby.alt}
                            width={300}
                            height={200}
                            layout="responsive"
                            quality={75}
                          />
                          <div className="desc">{hobby.desc}</div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
              {/* Text bubble beneath each step */}
              <div style={{
                marginTop: '10px',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: '#f0f0f0',
                display: 'inline-block'
              }}>
                {/* You can dynamically change this text based on selected image if needed */}
                {expandedHobby ? expandedHobby : 'Select an image for details'}
              </div>
            </div>
          </div>
        </div>
      </details>

      {/* Repeat for other steps similarly, just replace step1 with step2, step3, step4 */}
      
      {/* Step 2 */}
      <details>
        <summary>Schritt 2</summary>
        <div className="flex-container">
          <div className="HnI">
            <h2>InfoText: Übungen</h2>
            <br />
            <div className="pics">
              <Slider {...sliderSettings}>
                {step2.map((hobby) => (
                  <div key={hobby.alt} onClick={() => handleToggle(hobby.alt)} style={{ cursor: 'pointer' }}>
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
                        <>
                          <Image
                            src={hobby.src}
                            alt={hobby.alt}
                            width={300}
                            height={200}
                            layout="responsive"
                            quality={75}
                          />
                          <div className="desc">{hobby.desc}</div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
              <div style={{
                marginTop: '10px',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: '#f0f0f0',
                display: 'inline-block'
              }}>
                {expandedHobby ? expandedHobby : 'Select an image for details'}
              </div>
            </div>
          </div>
        </div>
      </details>
      
    </>
  );
}

export default page
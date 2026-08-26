'use client'

import React, { useState } from 'react';

const stepsData = [
  {
    image1: "/vids/BeweglichkeitKraft/Schritt1bild.jpeg",
    items1: [
      { src: "/vids/BeweglichkeitKraft/Schritt1einfach.mp4", alt: "Übung Einfach", desc: "Liegestützdrehen", resc: "Liegestützdrehen" },
      { src: "/vids/BeweglichkeitKraft/Schritt1mittel.mp4", alt: "Übung Mittel", desc: "Liegestützposition auf einem Ball", resc: "Liegestützposition auf einem Ball" },
      { src: "/vids/BeweglichkeitKraft/Schritt1schwer.mp4", alt: "Übung Schwer", desc: "Grätsche mit Übungen", resc: "Grätsche mit Übungen" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Bei der Liegestütze sollte ein klares I ersichtlich sein." }
    ],
    image2: "/vids/BeweglichkeitKraft/Schritt2bild.jpeg",
    items2: [
      { src: "/vids/BeweglichkeitKraft/Schritt2einfach.mp4", alt: "Übung Einfach", desc: "Vorhandstütz", resc: "Vorhandstütz" },
      { src: "/vids/BeweglichkeitKraft/Schritt2mittel.mp4", alt: "Übung Mittel", desc: "Rückhandstütz", resc: "Rückhandstütz" },
      { src: "/vids/BeweglichkeitKraft/Schritt2schwer.mp4", alt: "Übung Schwer", desc: "Liegestützen", resc: "Liegestützen" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Bei allen 3 Übungen muss von den Turnenden aus den Schultern gestossen werden, dabei muss der Bauch angespannt sein." }
    ],
    image3: "/vids/BeweglichkeitKraft/Schritt3bild.jpeg",
    items3: [
      { src: "/vids/BeweglichkeitKraft/Schritt3einfach.mp4", alt: "Übung Einfach", desc: "Handstand", resc: "Handstand" },
      { src: "/vids/BeweglichkeitKraft/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Klappmesser", resc: "Klappmesser" },
      { src: "/vids/BeweglichkeitKraft/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Brücke", resc: "Brücke" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wenn die Kinder unsicher sind, kann beim Handstand durch einen Klammergriff geholfen werden." }
    ],
    image4: "/vids/BeweglichkeitKraft/Schritt4bild.jpeg",
    items4: [
      { src: "/vids/BeweglichkeitKraft/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Springen mit Stütz", resc: "Springen mit Stütz" },
      { src: "/vids/BeweglichkeitKraft/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Aufsprung mit Stütz", resc: "Aufsprung mit Stütz" },
      { src: "/vids/BeweglichkeitKraft/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Überschlag", resc: "Überschlag" },
      { src: "/vids/BeweglichkeitKraft/Schritt4erklärung.mp4", alt: "Erklärungen", desc: "Erklärungen", resc: "Beim Überschlag wird der Kreuzgriff verwendet, so wird der turnenden Person das Drehen erleichtert." }
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
          <a href="/vids/BeweglichkeitKraft/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/BeweglichkeitKraft/GanzeBahn.jpeg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Beweglichkeit und Kraft» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass beim Station 4 immer eine erwachsene Person anwesend ist für die Sicherheit der Turnenden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Station 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
            <b>Station 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Reck</li>
            <li style={{ marginLeft: '24px' }}>2x Gummiband</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <b>Station 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
            <b>Station 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Schwedenkasten</li>
            <li style={{ marginLeft: '24px' }}>1x Minitramp</li>
            <li style={{ marginLeft: '24px' }}>1x 40er-Matte (Sprungmatte)</li>
          </div>
        </div>
      </div>
      {/*Station 1*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Boden</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={stepsData[0].image1} alt="Station 1" />
            </div>
            <br />
            <div className="pics">
              {stepsData[0].items1.map((item) => (
                <MediaItem
                  key={item.alt}
                  item={item}
                  isExpanded={expandedItems['step1'] === item.alt}
                  onToggle={() => toggleItem('step1', item.alt)}
                />
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
            <h2>Reck</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={stepsData[0].image2} alt="Station 2" />
            </div>
            <br />
            <div className="pics">
              {stepsData[0].items2.map((item) => (
                <MediaItem
                  key={item.alt}
                  item={item}
                  isExpanded={expandedItems['step2'] === item.alt}
                  onToggle={() => toggleItem('step2', item.alt)}
                />
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
            <h2>Sprossenwand</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={stepsData[0].image3} alt="Station 3" />
            </div>
            <br />
            <div className="pics">
              {stepsData[0].items3.map((item) => (
                <MediaItem
                  key={item.alt}
                  item={item}
                  isExpanded={expandedItems['step3'] === item.alt}
                  onToggle={() => toggleItem('step3', item.alt)}
                />
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
            <h2>Sprung mit einem Kasten</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={stepsData[0].image4} alt="Station 4" />
            </div>
            <br />
            <div className="pics">
              {stepsData[0].items4.map((item) => (
                <MediaItem
                  key={item.alt}
                  item={item}
                  isExpanded={expandedItems['step4'] === item.alt}
                  onToggle={() => toggleItem('step4', item.alt)}
                />
              ))}
            </div>
          </div>
        </div>
      </details>
    </>
  );
}
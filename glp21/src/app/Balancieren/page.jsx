'use client'

import React, { useState } from 'react';

const stepsData = [
  {
    image1: "/vids/Balacieren/Schritt1bild.jpg",
    items1: [
      { src: "/vids/Balacieren/Schritt1einfach.mov", alt: "Übung Einfach", desc: "einfach: Darüber laufen vor- und rückwärts", resc: "einfach: Darüber laufen vor- und rückwärts" },
      { src: "/vids/Balacieren/Schritt1mittel.mov", alt: "Übung Mittel", desc: "mittel: Springen mit Standwaagen", resc: "mittel: Springen mit Standwaagen" },
      { src: "/vids/Balacieren/Schritt1schwer.mov", alt: "Übung Schwer", desc: "schwer: Handstand an der Sprossenwand", resc: "schwer: Handstand an der Sprossenwand" },
      { src: null, alt: "Erklärungen", desc: "Erklärung", resc: "Damit die Motivation vorhanden bleibt, können die Seile selber in Formen gelegt und zusätzliche ergänzt werden." }
    ],
    image2: "/vids/Balacieren/Schritt2bild.jpeg",
    items2: [
      { src: "/vids/Balacieren/Schritt2einfach.mov", alt: "Übung Einfach", desc: "einfach: Darüber laufen vor- und rückwärts", resc: "einfach: Darüberlaufen vor- und rückwärts" },
      { src: "/vids/Balacieren/Schritt2mittel.mov", alt: "Übung Mittel", desc: "mittel: Halbe und ganze Drehungen", resc: "mittel: Halbe und ganze Drehungen" },
      { src: "/vids/Balacieren/Schritt2schwer.mov", alt: "Übung Schwer", desc: "schwer: Standwaage", resc: "schwer: Standwaage" },
      { src: "/vids/Balacieren/Schritt2erkl.mov", alt: "Erklärungen", desc: "Erklärung", resc: "Hilfsgriffe: Bei der Standwaage sollte der Stützgriff verwendet werden und möglichst nahe am Körperschwerpunkt gehalten werden. Kinder können sich auch selber helfen, indem sie sich die Hand geben und so dem Gleichgewicht helfen." }
    ],
    image3: "/vids/Balacieren/Schritt3bild.JPEG",
    items3: [
      { src: "/vids/Balacieren/Schritt3einfach.MP4", alt: "Übung Einfach", desc: "einfach: Darüber laufen", resc: "einfach: Darüber laufen" },
      { src: "/vids/Balacieren/Schritt3mittel.MP4", alt: "Übung Mittel", desc: "mittel: Seitwärts darüber laufen", resc: "mittel: Seitwärts darüber laufen" },
      { src: "/vids/Balacieren/Schritt3schwer.MP4", alt: "Übung Schwer", desc: "schwer: Standwaage", resc: "schwer: Standwaage" },
      { src: null, alt: "Erklärungen", desc: "Erklärung", resc: "Wenn die Kinder sehr unsicher sind, kann der Barren zu Beginn geradegestellt werden." }
    ],
    image4: "/vids/Balacieren/Schritt4bild.JPEG",
    items4: [
      { src: "/vids/Balacieren/Schritt4einfach.MP4", alt: "Übung Einfach", desc: "einfach: Darüber laufen", resc: "einfach: Darüber laufen" },
      { src: "/vids/Balacieren/Schritt4mittel.MP4", alt: "Übung Mittel", desc: "mittel: Auf den Knien darüber und evtl. Jemanden kreuzen", resc: "mittel: Auf den Knien darüber und evtl. Jemanden kreuzen" },
      { src: "/vids/Balacieren/Schritt4schwer.MP4", alt: "Übung Schwer", desc: "schwer: Kreativ mit Bällen", resc: "schwer: Kreativ mit Bällen" },
      { src: null, alt: "Erklärungen", desc: "Erklärung", resc: "Bei Bedarf können die Bänkli zu Beginn auch andersrum stehen." }
    ],
  }
];

function MediaItem({ item, isExpanded, onToggle }) {
  return (
    <div className="responsive" onClick={() => onToggle(item.alt)}>
      <div className="gallery">
        {isExpanded ? (
          <>
            {item.src && item.src.endsWith('.MP4') ? (
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
          <a href="/vids/Balacieren/GanzeBahn.jpg" target="_blank">
            <img src="/vids/Balacieren/GanzeBahn.png" alt="Gesamte Bahn"/>
          </a>
          <div style={{ display: "flex", flexDirection: "row" }}> <p style={{ margin: "0 2.75rem" }}>Station 1</p> <p style={{ margin: "0 2.75rem" }}>Station 2</p> <p style={{ margin: "0 2.75rem" }}>Station 3</p> <p style={{ margin: "0 2.75rem" }}>Station 4</p> </div>
        </div>
      </div>

      {/* Infos */}
      <div className="flex-container">
        <div className="abme">
          <h2>Informationen zur Bahn</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            Die Gerätebahn gehört zu der Kategorie «Balancieren» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass die Sprossenwand gut befestig ist. Auch beim Reck und Barren sollte eine erwachsene Person kontrollieren, ob alles befestigt ist.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Station 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>2x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>3x - 4x Sprungseile</li>
            <b>Station 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x tiefes Reck</li>
            <li style={{ marginLeft: '24px' }}>1x dünne 16er-Matte (Niedersprungmatte)</li>
            <b>Station 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schulstufenbarren</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <b>Station 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Bänkli</li>
            <li style={{ marginLeft: '24px' }}>verschiedene Bälle</li>
          </div>
        </div>
      </div>

      {/* Station 1 */}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 1</summary>
        <div className="flex-container">
          <div className="HnI">
            <h2>Balancieren mit Seilen</h2>
            <div style={{ whiteSpace: "pre-line", fontSize: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/vids/Balacieren/Schritt1bild.jpg" alt="Station 1" />
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

      {/* Station 2 */}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 2</summary>
        <div className="flex-container">
          <div className="HnI">
            <h2>Tiefes Reck</h2>
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

      {/* Station 3 */}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 3</summary>
        <div className="flex-container">
          <div className="HnI">
            <h2>Schräger Schulstufenbarren</h2>
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

      {/* Station 4 */}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 4</summary>
        <div className="flex-container">
          <div className="HnI">
            <h2>Bänklibalken</h2>
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
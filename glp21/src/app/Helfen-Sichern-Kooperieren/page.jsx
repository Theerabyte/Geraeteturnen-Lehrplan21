'use client'

import React, { useState } from 'react';

const stepsData = [
  {
    image1: "/vids/HelfenSichern/Schritt1bild.JPEG",
    items1: [
      { src: "/vids/HelfenSichern/Schritt3einfach.MP4", alt: "Übung Einfach", desc: "Türmli", resc: "Türmli" },
      { src: "/vids/HelfenSichern/Schritt3mittel.MP4", alt: "Übung Mittel", desc: "Flieger", resc: "Flieger" },
      { src: "/vids/HelfenSichern/Schritt3schwer.MP4", alt: "Übung Schwer", desc: "Sternheber", resc: "Sternheber" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Mit mutigen Kindern kann auch der Freihändige Flieger geübt werden. Hier sollte eine Lehrperson dem Kind nahe am Körperschwerpunkt helfen." }

    ],
    image2: "/vids/HelfenSichern/Schritt2bild.JPEG",
    items2: [
      { src: "/vids/HelfenSichern/Schritt2einfach.MP4", alt: "Übung Einfach", desc: "Vorschwung", resc: "Vorschwung" },
      { src: "/vids/HelfenSichern/Schritt2mittel.MP4", alt: "Übung Mittel", desc: "Bauchwelle", resc: "Bauchwelle" },
      { src: "/vids/HelfenSichern/Schritt2schwer.MP4", alt: "Übung Schwer", desc: "Felgaufzug", resc: "Felgaufzug" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Beim Vorschwung wird der Klammergriff verwendet. Bei der Bauchwelle darf das Seil nicht zu locker sein und es muss darauf geachtet werden, dass es in die richtige Richtung gedreht wird. Beim Felgaufzug sollen die Kinder den Drehgriff verwenden." }
    ],
    image3: "/vids/HelfenSichern/Schritt3bild.JPEG",
    items3: [
      { src: "/vids/HelfenSichern/Schritt1einfach.MP4", alt: "Übung Einfach", desc: "Handstand", resc: "Handstand" },
      { src: "/vids/HelfenSichern/Schritt1mittel.MP4", alt: "Übung Mittel", desc: "Handstandabrollen", resc: "Handstandabrollen" },
      { src: "/vids/HelfenSichern/Schritt1schwer.MP4", alt: "Übung Schwer", desc: "Kopfstand", resc: "Kopfstand" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Hier sollen die Kinder Klammergriffe verwenden, so haben sie optimalen Halt." }
    ],
    image4: "/vids/HelfenSichern/Schritt4bild.JPEG",
    items4: [
      { src: "/vids/HelfenSichern/Schritt4einfach.MP4", alt: "Übung Einfach", desc: "Handstandabrollen", resc: "Handstandabrollen" },
      { src: "/vids/HelfenSichern/Schritt4mittel.MP4", alt: "Übung Mittel", desc: "Handstandaufgang", resc: "Handstandaufgang" },
      { src: "/vids/HelfenSichern/Schritt4schwer.MP4", alt: "Übung Schwer", desc: "Feldaufschwung mit Stütz vorlings am hohen Holm", resc: "Feldaufschwung mit Stütz vorlings am hohen Holm" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Die Kinder verwenden hier hauptsächlich Klammergriffe, ausser beim Felgaufzug, da empfiehlt sich ein Drehgriff." }
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
          <a href="/vids/HelfenSichern/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/HelfenSichern/GanzeBahn.jpeg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Helfen und Sichern» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass die Kinder vorher eine Einführung bekommen, was alles wichtig ist beim Helfen. Sie sollten wissen, dass man den Kopf zur Brust nehmen sollte, wo man hält und welche Hilfsgriffe verwendet werden sollten.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Station 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
            <b>Station 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Reck</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <b>Station 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
            <b>Station 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schulstufenbarren</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
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
            <h2>Boden mit einer Sprossenwand</h2>
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
            <h2>Schulstufenbarren</h2>
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
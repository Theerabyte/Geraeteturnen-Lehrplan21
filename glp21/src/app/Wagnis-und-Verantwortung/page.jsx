'use client'

import React, { useState } from 'react';

const stepsData = [
  {
    image1: "/vids/WagnisVerantwortung/Schritt1bild.jpeg",
    items1: [
      { src: "/vids/WagnisVerantwortung/Schritt1einfach.mp4", alt: "Übung Einfach", desc: "Klettern auf allen Vieren", resc: "Klettern auf allen Vieren" },
      { src: "/vids/WagnisVerantwortung/Schritt1mittel.mp4", alt: "Übung Mittel", desc: "Klettern mit Niedersprung", resc: "Klettern mit Niedersprung" },
      { src: "/vids/WagnisVerantwortung/Schritt1schwer.mp4", alt: "Übung Schwer", desc: "Hochhangeln mit Niedersprung", resc: "Hochhangeln mit Niedersprung" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wichtig ist, dass die Kinder beim Niedersprung erst nach unten schauen. Tipp: Bei rutschigen Händen ist Magnesium hilfreich." }
    ],
    image2: "/vids/WagnisVerantwortung/Schritt2bild.jpeg",
    items2: [
      { src: "/vids/WagnisVerantwortung/Schritt2einfach.mp4", alt: "Übung Einfach", desc: "Streckspünge mit Pausen", resc: "Streckspünge mit Pausen" },
      { src: "/vids/WagnisVerantwortung/Schritt2mittel.mp4", alt: "Übung Mittel", desc: "Strecksprünge", resc: "Strecksprünge" },
      { src: "/vids/WagnisVerantwortung/Schritt2schwer.mp4", alt: "Übung Schwer", desc: "Strecksprünge mit einer Sprungrolle", resc: "Strecksprünge mit einer Sprungrolle" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Bei unsicheren Kindern kann durch eine Hand das Getrauen gefördert werden." }
    ],
    image3: "/vids/WagnisVerantwortung/Schritt3bild.jpeg",
    items3: [
      { src: "/vids/WagnisVerantwortung/Schritt3einfach.mp4", alt: "Übung Einfach", desc: "Rutschen im Päckli mit einer Rolle", resc: "Rutschen im Päckli mit einer Rolle" },
      { src: "/vids/WagnisVerantwortung/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Rutschen auf dem Rücken mit einer Rolle", resc: "Rutschen auf dem Rücken mit einer Rolle" },
      { src: "/vids/WagnisVerantwortung/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Rutschen auf dem Bauch mit einer Rolle", resc: "Rutschen auf dem Bauch mit einer Rolle" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Durch das Verstellen der Höhe des Kastens kann das Bänkli steiler gemacht werden." }
    ],
    image4: "/vids/WagnisVerantwortung/Schritt4bild.jpeg",
    items4: [
      { src: "/vids/WagnisVerantwortung/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Springen im Barren", resc: "Springen im Barren" },
      { src: "/vids/WagnisVerantwortung/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Springen im Barren mit Niedersprung", resc: "Springen im Barren mit Niedersprung" },
      { src: "/vids/WagnisVerantwortung/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Durchsprung im Barren", resc: "Durchsprung im Barren" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wenn Kinder den Niedersprung das erste Mal machen, kann man für die Sicherheit eine dünne Yogamatte über den Holmen legen." }
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
          <a href="/vids/WagnisVerantwortung/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/WagnisVerantwortung/GanzeBahn.jpeg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Wagnis und Verantwortung» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass die Kletterstange gut befestigt ist. Zudem sollte beim Schwedenkasten einige Teile herausgenommen werden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Station 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>Kletterstange</li>
            <li style={{ marginLeft: '24px' }}>1x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 40er-Matte (Sprungmatte)</li>
            <b>Station 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schwedenkasten</li>
            <li style={{ marginLeft: '24px' }}>1x 40er-Matte (Sprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>1x - 2x Minitramp</li>
            <li style={{ marginLeft: '24px' }}>1x Booster</li>
            <b>Station 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schwedenkasten</li>
            <li style={{ marginLeft: '24px' }}>1x Bänkli</li>
            <li style={{ marginLeft: '24px' }}>5x dünne Matten (Leichtturnmatten)</li>
            <b>Station 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Barren</li>
            <li style={{ marginLeft: '24px' }}>1x Sprungbock</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
          </div>
        </div>
      </div>
      {/*Station 1*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Kletterstangen</h2>
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
            <h2>Sprungparcours</h2>
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
            <h2>Schräges Bänkli</h2>
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
            <h2>Sprungbarren</h2>
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
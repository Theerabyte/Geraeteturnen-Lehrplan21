'use client'

import React, { useState } from 'react';

const stepsData = [
  {
    image1: "/vids/SpringenSK/Schritt1bild.JPEG",
    items1: [
      { src: "/vids/SpringenSK/Schritt1einfach.MP4", alt: "Übung Einfach", desc: "einfach: Strecksprünge", resc: "einfach: Strecksprünge" },
      { src: "/vids/SpringenSK/Schritt1mittel.MP4", alt: "Übung Mittel", desc: "mittel: Strecksprünge mit halber Drehung", resc: "mittel: Strecksprünge mit halber Drehung" },
      { src: "/vids/SpringenSK/Schritt1schwer.MP4", alt: "Übung Schwer", desc: "schwer: Strecksprünge mit Päckli- und Grätschwinkelsprung", resc: "schwer: Strecksprünge mit Päckli- und Grätschwinkelsprung" },
      { src: "/vids/SpringenSK/Schritt1erkl.MP4", alt: "Erklärung Strecksprünge", desc: "Erklärung Strecksprünge", resc: "Durch den Klammergriff nahe am Körperschwerpunkt kann bei Sprüngen geholfen werden." }
    ],
    image2: "/vids/SpringenSK/Schritt2bild.JPEG",
    items2: [
      { src: "/vids/SpringenSK/Schritt2einfach.MP4", alt: "Übung Einfach", desc: "einfach: Durchstützen", resc: "einfach: Durchstützen" },
      { src: "/vids/SpringenSK/Schritt2mittel.MP4", alt: "Übung Mittel", desc: "mittel: Hoch- und Runterdrücken", resc: "mittel: Hoch- und Runterdrücken" },
      { src: "/vids/SpringenSK/Schritt2schwer1.MP4", alt: "Übung Schwer 1", desc: "schwer: Winkelstütz", resc: "schwer: Winkelstütz" },
      { src: "/vids/SpringenSK/Schritt2schwer2.MP4", alt: "Übung Schwer 2", desc: "schwer: Sturzhang", resc: "schwer: Sturzhang" },
      { src: "/vids/SpringenSK/Schritt2erkl.MP4", alt: "Erklärung Winkelstütz", desc: "Erklärung Winkelstütz", resc: "Bei dem Winkelstütz wird ein Stützgriff verwendet, so können die Beine gespannt bleiben." }
    ],
    image3: "/vids/SpringenSK/Schritt3bild.JPEG",
    items3: [
      { src: "/vids/SpringenSK/Schritt3einfach.MP4", alt: "Übung Einfach", desc: "einfach: Klettern und Bändeli mit der Hand berühren", resc: "einfach: Klettern und Bändeli mit der Hand berühren" },
      { src: "/vids/SpringenSK/Schritt3mittel.MP4", alt: "Übung Mittel", desc: "mittel: Klettern und Bändeli mit dem Fuss berühren mit Drehungen", resc: "mittel: Klettern und Bändeli mit dem Fuss berühren mit Drehungen" },
      { src: "/vids/SpringenSK/Schritt3schwer.MP4", alt: "Übung Schwer", desc: "schwer: Im Handstand laufen und Bändeli berühren", resc: "schwer: Im Handstand laufen und Bändeli berühren" },
      { src: null, alt: "Erklärungen", desc: "Tipp", resc: "Die Kinder können selber auch Parcours zusammenstellen, indem sie verschiedene Farben der Bändeli wählen." }
    ],
    image4: "/vids/SpringenSK/Schritt4bild.JPEG",
    items4: [
      { src: "/vids/SpringenSK/Schritt4einfach.MP4", alt: "Übung Einfach", desc: "einfach: Strecksprung", resc: "einfach: Strecksprung" },
      { src: "/vids/SpringenSK/Schritt4mittel.MP4", alt: "Übung Mittel", desc: "mittel: Sprungrolle", resc: "mittel: Sprungrolle" },
      { src: "/vids/SpringenSK/Schritt4schwer.MP4", alt: "Übung Schwer", desc: "schwer: Salto vorwärts", resc: "schwer: Salto vorwärts" },
      { src: "/vids/SpringenSK/Schritt4erkl1.MP4", alt: "Erklärung 1", desc: "Erklärung Strecksprung", resc: "Damit die Turnenden im Strecksprung höher springen, kann anhand einer Angel der Fokus auf die Höhe gesetzt werden." },
      { src: "/vids/SpringenSK/Schritt4erkl2.MP4", alt: "Erklärung 2", desc: "Erklärung Sprungrolle", resc: "Bei der Sprungrolle kann dasselbe gemacht werden, indem eine Hand als Höhe dient." },
      { src: "/vids/SpringenSK/Schritt4erkl3.MP4", alt: "Erklärung 3", desc: "Erklärung Salto", resc: "Beim Halten des Saltos wird ein Kreuzgriff verwendet, so kann eine Drehung sicher ablaufen." }
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
          <a href="/vids/SpringenSK/GanzeBahn.JPEG" target="_blank">
            <img src="/vids/SpringenSK/GanzeBahn.JPEG" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Springen, Stützen und Klettern» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass die Sprossenwand und der Barren kontrolliert werden, ob diese fest stehen. Beim Minitramp kann die Höhe variiert werden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Station 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Reuterbrett</li>
            <li style={{ marginLeft: '24px' }}>1x Kastenteil</li>
            <li style={{ marginLeft: '24px' }}>1x dünne Matte (Leichtturnmatten)</li>
            <b>Station 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Barren</li>
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
            <b>Station 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>8x - 12x Bändeli</li>
            <b>Station 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schwedenkasten</li>
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
            <h2>Reuterbrett</h2>
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
            <h2>Barren</h2>
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
            <h2>Sprung</h2>
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
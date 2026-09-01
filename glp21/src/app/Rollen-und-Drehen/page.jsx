'use client'

import React, { useState } from 'react';

const stepsData = [
  {
    image1: "/vids/RollenD/Schritt1bild.JPEG",
    items1: [
      { src: "/vids/RollenD/Schritt1einfach.MP4", alt: "Übung Einfach", desc: "Felgaufzug in den Stütz am unteren Holmen und Rolle vorwärts", resc: "Felgaufzug in den Stütz am unteren Holmen und Rolle vorwärts" },
      { src: "/vids/RollenD/Schritt1mittel.MP4", alt: "Übung Mittel", desc: "Feldaufschwung mit Stütz vorlings am hohen Holm, Hinuntergleiten gebückt über niederen Holm in Hockstand", resc: "Feldaufschwung mit Stütz vorlings am hohen Holm, Hinuntergleiten gebückt über niederen Holm in Hockstand" },
      { src: "/vids/RollenD/Schritt1schwer.MP4", alt: "Übung Schwer", desc: "Felgaufzug am hohen Holmen mit Felgabschwung vorwärts gespreizt am hohen Holm", resc: "Felgaufzug am hohen Holmen mit Felgabschwung vorwärts gespreizt am hohen Holm" },
      { src: "/vids/RollenD/Schritt1erkl1.MP4", alt: "Erklärung 1", desc: "Erklärung 1", resc: "Beim Felgaufzug wird ein Drehgriff verwendet. So kann mit einer Hand gestützt und mit der anderen dem Bein Schwung gegeben werden. Beim Abrollen verwendet man dann den Klammergriff." },
      { src: "/vids/RollenD/Schritt1erkl2.MP4", alt: "Erklärung 2", desc: "Erklärung 2", resc: "Beim Felgaufzug am hohen Holmen wird ebenfalls ein Drehgriff verwendet, zusätzlich kann durch den Stützgriff geholfen werden, damit die Stange erreicht wird." }
    ],
    image2: "/vids/RollenD/Schritt2bild.JPEG",
    items2: [
      { src: "/vids/RollenD/Schritt2einfach.MP4", alt: "Übung Einfach", desc: "Felge vorwärts", resc: "Felge vorwärts" },
      { src: "/vids/RollenD/Schritt2mittel.MP4", alt: "Übung Mittel", desc: "Felgaufzug", resc: "Felgaufzug" },
      { src: "/vids/RollenD/Schritt2schwer.MP4", alt: "Übung Schwer", desc: "Bauchwelle", resc: "Bauchwelle" },
      { src: "/vids/RollenD/Schritt2erkl1.MP4", alt: "Erklärung 1", desc: "Erklärung 1", resc: "Beim Felgaufzug am Reck wird der Drehgriff verwendet, damit mit dem Schwung geholfen werden kann." },
      { src: "/vids/RollenD/Schritt2erkl2.MP4", alt: "Erklärung 2", desc: "Erklärung 2", resc: "Bei der Bauchwelle wird ein Stützgriff verwendet, weil so die Turnenden an der Stange bleiben." },
      { src: "/vids/RollenD/Schritt2erkl3.MP4", alt: "Erklärung 3", desc: "Erklärung 3", resc: "Selbständig können Kindern den Felgaufzug machen, indem sie einen Gymnastikball zur Hilfe nehmen." }
    ],
    image3: "/vids/RollenD/Schritt3bild.JPEG",
    items3: [
      { src: "/vids/RollenD/Schritt3einfach.MP4", alt: "Übung Einfach 1", desc: "Rolle vor- und rückwärts", resc: "Rolle vor- und rückwärts" },
      { src: "/vids/RollenD/Schritt3einfach2.MP4", alt: "Übung Einfach 2", desc: "Rolle vor- und rückwärts", resc: "Rolle vor- und rückwärts" },
      { src: "/vids/RollenD/Schritt3mittel.MP4", alt: "Übung Mittel", desc: "Rad auf beide Seiten", resc: "Rad auf beide Seiten" },
      { src: "/vids/RollenD/Schritt3schwer.MP4", alt: "Übung Schwer", desc: "Handstandabrollen", resc: "Handstandabrollen" },
      { src: "/vids/RollenD/Schritt3erkl.MP4", alt: "Erklärungen", desc: "Erklärungen", resc: "Beim Handstandabrollen wird ein Klammergriff verwendet, damit die Turnenden gut im Handstand stehen können. Tipp: Beim Abrollen kann langsam mit nach unten gegangen werden. → Wichtig, immer den Kopf einziehen." }
    ],
    image4: "/vids/RollenD/Schritt4bild.JPEG",
    items4: [
      { src: "/vids/RollenD/Schritt4einfach.MP4", alt: "Übung Einfach", desc: "Rolle aus dem Stand", resc: "Rolle aus dem Stand" },
      { src: "/vids/RollenD/Schritt4mittel.MP4", alt: "Übung Mittel", desc: "Sprungrolle", resc: "Sprungrolle" },
      { src: "/vids/RollenD/Schritt4schwer.MP4", alt: "Übung Schwer", desc: "Rückwärtsrolle", resc: "Rückwärtsrolle" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wichtig zu beachten ist, dass das Kinn immer bei der Brust ist, so wird das Rollen einfacher." }
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
          <a href="/vids/RollenD/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/RollenD/GanzeBahn.jpeg" alt="Gesamte Bahn" style={{ flex: '0 0 auto', maxWidth: '100%'}} />
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
            Die Gerätebahn gehört zu der Kategorie «Rollen und Drehen» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig ist, dass die Geräte kontrolliert werden. Zudem sollte beachtet werden, dass das Minitramp an der 40er-Matte befestigt wird, um Verschiebungen zu vermeiden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Station 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>1x Schulstufenbarren</li>
            <b>Station 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Reck</li>
            <li style={{ marginLeft: '24px' }}>6x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x Gymnastikball</li>
            <b>Station 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>10x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>3x Bänkli</li>
            <li style={{ marginLeft: '24px' }}>4x Seile</li>
            <b>Station 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Minitrampolin</li>
            <li style={{ marginLeft: '24px' }}>1x 40er-Matte (Sprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>3x Kastenteile</li>
            <li style={{ marginLeft: '24px' }}>2x Seile</li>
          </div>
        </div>
      </div>
      {/*Station 1*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Schulstufenbarren</h2>
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
            <h2>Schiefe Ebene mit einer Bodenbahn</h2>
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
            <h2>Sprunganlage mit Minitramp</h2>
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

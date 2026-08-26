'use client'

import React, { useState } from 'react';

const stepsData = [
  {
    image1: "/vids/Koerperspannung/Schritt1bild.jpeg",
    items1: [
      { src: "/vids/Koerperspannung/Schritt1einfach.mp4", alt: "Übung Einfach", desc: "Spagetti", resc: "Spagetti" },
      { src: "/vids/Koerperspannung/Schritt1mittel.mp4", alt: "Übung Mittel", desc: "Drehen auf dem Rücken", resc: "Drehen auf dem Rücken" },
      { src: "/vids/Koerperspannung/Schritt1schwer.mp4", alt: "Übung Schwer", desc: "Schiffli", resc: "Schiffli" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Beim C+ sollten die Schultern immer in der Luft sein, so kann besser gedreht werden." }
    ],
    image2: "/vids/Koerperspannung/Schritt2bild.jpeg",
    items2: [
      { src: "/vids/Koerperspannung/Schritt2einfach.mp4", alt: "Übung Einfach", desc: "Strecksprünge", resc: "Strecksprünge" },
      { src: "/vids/Koerperspannung/Schritt2mittel.mp4", alt: "Übung Mittel", desc: "Strecksprünge mit einem Ball", resc: "Strecksprünge mit einem Ball" },
      { src: "/vids/Koerperspannung/Schritt2schwer.mp4", alt: "Übung Schwer", desc: "Handstand", resc: "Handstand" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Hier ist wichtig, dass die Turnenden nicht die Kontrolle verlieren. Bei unsicheren Kindern kann zu Beginn ein Reuterbrett verwendet werden." }
    ],
    image3: "/vids/Koerperspannung/Schritt3bild.jpeg",
    items3: [
      { src: "/vids/Koerperspannung/Schritt3einfach.mp4", alt: "Übung Einfach", desc: "Schaukeln im Stand", resc: "Schaukeln im Stand" },
      { src: "/vids/Koerperspannung/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Beidbeiniges Schaukeln auf dem Kasten", resc: "Beidbeiniges Schaukeln auf dem Kasten" },
      { src: "/vids/Koerperspannung/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Vor- und Rückschaukeln", resc: "Vor- und Rückschaukeln" },
      { src: "/vids/Koerperspannung/Schritt3erkl1.mp4", alt: "Erklärung 1", desc: "Erklärung 1", resc: "Beim Schaukeln im Stand sollte darauf geachtet werden, dass das Kurbet immer gleich abläuft. Durch Stützgriffe kann das kontrolliert werden." },
      { src: "/vids/Koerperspannung/Schritt3erkl2.mp4", alt: "Erklärung 2", desc: "Erklärung 2", resc: "Damit beim Schwingen auf dem Kasten auch ein schönes C1 ausgeführt wird, kann im Vorschwung die turnende Person gehalten werden. Dafür benutzt man ein Stützgriff." }
    ],
    image4: "/vids/Koerperspannung/Schritt4bild.jpeg",
    items4: [
      { src: "/vids/Koerperspannung/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Liegestützdrehen", resc: "Liegestützdrehen" },
      { src: "/vids/Koerperspannung/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Spagetti stehen", resc: "Spagetti stehen" },
      { src: "/vids/Koerperspannung/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Liegestützkampf", resc: "Liegestützkampf" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Wichtig ist, dass die Kinder nicht durchhängen in den Positionen, es soll also ein schönes I zu sehen sein." }
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
          <a href="/vids/Koerperspannung/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/Koerperspannung/GanzeBahn.jpeg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Körperspannung» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass das Minitramp immer wieder kontrolliert wird, da dies leicht verrutschen kann. Vorzeitig kann mit den Kindern noch trocken die Positionen C+, C- und I angeschaut werden, so können die Übungen besser ausgeführt werden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Station 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Ball</li>
            <li style={{ marginLeft: '24px' }}>1x Holzstab</li>
            <li style={{ marginLeft: '24px' }}>1x Kastenteil</li>
            <b>Station 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>Sprossenwand</li>
            <li style={{ marginLeft: '24px' }}>1x Kastenteil</li>
            <li style={{ marginLeft: '24px' }}>1x Minitramp</li>
            <li style={{ marginLeft: '24px' }}>2x dünne Matten (Leichtturnmatten)</li>
            <b>Station 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Schaukelringe</li>
            <li style={{ marginLeft: '24px' }}>2x 16er-Matte (Niedersprungmatte)</li>
            <li style={{ marginLeft: '24px' }}>6x dünne Matten (Leichtturnmatten)</li>
            <b>Station 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>4x dünne Matten (Leichtturnmatten)</li>
          </div>
        </div>
      </div>
      {/*Station 1*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Kasten</h2>
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
            <h2>Sprung an der Sprossenwand</h2>
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
            <h2>Schaukelringe</h2>
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
            <h2>Boden</h2>
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
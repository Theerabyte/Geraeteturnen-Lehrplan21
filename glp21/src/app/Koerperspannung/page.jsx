'use client'

import React, { useState } from 'react';

const stepsData = [
  {
    image1: "/vids/Koerperspannung/Schritt1bild.JPEG",
    items1: [
      { src: "/vids/Koerperspannung/Schritt1einfach.MP4", alt: "Übung Einfach", desc: "einfach: Spagetti", resc: "einfach: Spagetti" },
      { src: "/vids/Koerperspannung/Schritt1mittel.MP4", alt: "Übung Mittel", desc: "mittel: Drehen auf dem Rücken", resc: "mittel: Drehen auf dem Rücken" },
      { src: "/vids/Koerperspannung/Schritt1schwer.MP4", alt: "Übung Schwer", desc: "schwer: Schiffli", resc: "schwer: Schiffli" },
      { src: null, alt: "Erklärungen", desc: "Erklärung", resc: "Beim C+ sollten die Schultern immer in der Luft sein, so kann besser gedreht werden." }
    ],
    image2: "/vids/Koerperspannung/Schritt2bild.JPEG",
    items2: [
      { src: "/vids/Koerperspannung/Schritt2einfach.MP4", alt: "Übung Einfach", desc: "einfach: Strecksprünge", resc: "einfach: Strecksprünge" },
      { src: "/vids/Koerperspannung/Schritt2mittel.MP4", alt: "Übung Mittel", desc: "mittel: Strecksprünge mit einem Ball", resc: "mittel: Strecksprünge mit einem Ball" },
      { src: "/vids/Koerperspannung/Schritt2schwer.MP4", alt: "Übung Schwer", desc: "schwer: Handstand", resc: "schwer: Handstand" },
      { src: null, alt: "Erklärungen", desc: "Erklärung", resc: "Hier ist wichtig, dass die Turnenden nicht die Kontrolle verlieren. Bei unsicheren Kindern kann zu Beginn ein Reuterbrett verwendet werden." }
    ],
    image3: "/vids/Koerperspannung/Schritt3bild.JPEG",
    items3: [
      { src: "/vids/Koerperspannung/Schritt3einfach.MP4", alt: "Übung Einfach", desc: "einfach: Schaukeln im Stand", resc: "einfach: Schaukeln im Stand" },
      { src: "/vids/Koerperspannung/Schritt3mittel.MP4", alt: "Übung Mittel", desc: "mittel: Beidbeiniges Schaukeln auf dem Kasten", resc: "mittel: Beidbeiniges Schaukeln auf dem Kasten" },
      { src: "/vids/Koerperspannung/Schritt3schwer.MP4", alt: "Übung Schwer", desc: "schwer: Vor- und Rückschaukeln", resc: "schwer: Vor- und Rückschaukeln" },
      { src: "/vids/Koerperspannung/Schritt3erkl1.MP4", alt: "Erklärung 1", desc: "Erklärung Schaukeln im Stand", resc: "Beim Schaukeln im Stand sollte darauf geachtet werden, dass das Kurbet immer gleich abläuft. Durch Stützgriffe kann das kontrolliert werden." },
      { src: "/vids/Koerperspannung/Schritt3erkl2.MP4", alt: "Erklärung 2", desc: "Erklärung Schaukeln auf dem Kasten", resc: "Damit beim Schwingen auf dem Kasten auch ein schönes C1 ausgeführt wird, kann im Vorschwung die turnende Person gehalten werden. Dafür benutzt man ein Stützgriff." }
    ],
    image4: "/vids/Koerperspannung/Schritt4bild.JPEG",
    items4: [
      { src: "/vids/Koerperspannung/Schritt4einfach.MP4", alt: "Übung Einfach", desc: "einfach: Liegestützdrehen", resc: "einfach: Liegestützdrehen" },
      { src: "/vids/Koerperspannung/Schritt4mittel.MP4", alt: "Übung Mittel", desc: "mittel: Spagetti stehen", resc: "mittel: Spagetti stehen" },
      { src: "/vids/Koerperspannung/Schritt4schwer.MP4", alt: "Übung Schwer", desc: "schwer: Liegestützkampf", resc: "schwer: Liegestützkampf" },
      { src: null, alt: "Erklärungen", desc: "Erklärung", resc: "Wichtig ist, dass die Kinder nicht durchhängen in den Körperpositionen, es soll also ein schönes I zu sehen sein." }
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
          <a href="/vids/Koerperspannung/GanzeBahn.JPEG" target="_blank">
            <img src="/vids/Koerperspannung/GanzeBahn.JPEG" alt="Gesamte Bahn" />
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
          <h2>Materialliste</h2>
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
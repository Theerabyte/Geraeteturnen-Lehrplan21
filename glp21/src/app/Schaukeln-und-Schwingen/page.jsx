'use client'

import React, { useState } from 'react';

const stepsData = [
  {
    image1: "/vids/SchaukelnSchwingen/Schritt1bild.jpeg",
    items1: [
      { src: "/vids/SchaukelnSchwingen/Schritt1einfach.mp4", alt: "Übung Einfach", desc: "Rückschwung und Vorschwung", resc: "Rückschwung und Vorschwung" },
      { src: "/vids/SchaukelnSchwingen/Schritt1mittel.mp4", alt: "Übung Mittel", desc: "Rückschwung und Vorschwung mit Grätschsitz", resc: "Rückschwung und Vorschwung mit Grätschsitz" },
      { src: "/vids/SchaukelnSchwingen/Schritt1schwer.mp4", alt: "Übung Schwer", desc: "Rückschwung und Vorschwung mit Wende zum Niedersprung", resc: "Rückschwung und Vorschwung mit Wende zum Niedersprung" },
      { src: "/vids/SchaukelnSchwingen/Schritt1erkl1.mp4", alt: "Erklärung 1", desc: "Erklärung 1", resc: "Beim Schwingen am Barren kann der turnenden Person geholfen werden, indem eine Hand an der Schulter stabilisiert und die andere den Schwung kontrolliert." },
      { src: "/vids/SchaukelnSchwingen/Schritt1erkl2.mp4", alt: "Erklärung 2", desc: "Erklärung 2", resc: "Beim Niedersprung wird ein Stützgriff verwendet, um die Turnenden dabei richtig zu leiten. So erfolgt ein verlangsamter Niedersprung." },
      { src: null, alt: "Erklärung 3", desc: "Erklärung 3", resc: "Tipp: Wenn das Schwingen noch unsicher ist, kann der Niedersprung auch aus dem Stand langsam geübt werden. Auch hier wird ein Stützgriff empfohlen." }
    ],
    image2: "/vids/SchaukelnSchwingen/Schritt2bild.jpeg",
    items2: [
      { src: "/vids/SchaukelnSchwingen/Schritt2einfach.mp4", alt: "Übung Einfach", desc: "Vor- und Rückschweben", resc: "Vor- und Rückschweben" },
      { src: "/vids/SchaukelnSchwingen/Schritt2mittel.mp4", alt: "Übung Mittel", desc: "Grätschwinkel mit Vorschwung", resc: "Grätschwinkel mit Vorschwung" },
      { src: "/vids/SchaukelnSchwingen/Schritt2schwer.mp4", alt: "Übung Schwer", desc: "Rückschwung mit Grätschwinkel", resc: "Rückschwung mit Grätschwinkel" },
      { src: "/vids/SchaukelnSchwingen/Schritt2erkl.mp4", alt: "Erklärungen", desc: "Erklärungen", resc: "Das Halten kann hier auf dem Schwedenkasten gemacht werden. Hierbei sollte ein Stützgriff verwendet werden. Wichtig, nicht an den Gelenken stützen, sondern nahe am Körper halten." }
    ],
    image3: "/vids/SchaukelnSchwingen/Schritt3bild.jpeg",
    items3: [
      { src: "/vids/SchaukelnSchwingen/Schritt3einfach.mp4", alt: "Übung Einfach", desc: "Schwingen", resc: "Schwingen" },
      { src: "/vids/SchaukelnSchwingen/Schritt3mittel.mp4", alt: "Übung Mittel", desc: "Schwingen mit Bällen", resc: "Schwingen mit Bällen" },
      { src: "/vids/SchaukelnSchwingen/Schritt3schwer.mp4", alt: "Übung Schwer", desc: "Schwingen im Grätschwinkelsitz", resc: "Schwingen im Grätschwinkelsitz" },
      { src: null, alt: "Erklärungen", desc: "Erklärungen", resc: "Hier kann sich frei ausgelebt werden und mit anderen Übungen ergänzt werden." }
    ],
    image4: "/vids/SchaukelnSchwingen/Schritt4bild.jpeg",
    items4: [
      { src: "/vids/SchaukelnSchwingen/Schritt4einfach.mp4", alt: "Übung Einfach", desc: "Rück- und Vorschaukeln", resc: "Rück- und Vorschaukeln" },
      { src: "/vids/SchaukelnSchwingen/Schritt4mittel.mp4", alt: "Übung Mittel", desc: "Rück- und Vorschaukeln mit halber Drehung", resc: "Rück- und Vorschaukeln mit halber Drehung" },
      { src: "/vids/SchaukelnSchwingen/Schritt4schwer.mp4", alt: "Übung Schwer", desc: "Schaukeln mit Sturzhang", resc: "Schaukeln mit Sturzhang" },
      { src: "/vids/SchaukelnSchwingen/Schritt4erkl1.mp4", alt: "Erklärung 1", desc: "Erklärung 1", resc: "Beim Rück- und Vorschaukeln kann durch ein Anschieben das Schaukeln vereinfacht werden" },
      { src: "/vids/SchaukelnSchwingen/Schritt4erkl2.mp4", alt: "Erklärung 2", desc: "Erklärung 2", resc: "Bei der halben Drehung wird an den Füssen ein Klammergriff verwendet, um den Turnenden so ein Gefühl für die Drehung zu geben." },
      { src: "/vids/SchaukelnSchwingen/Schritt4erkl3.mp4", alt: "Erklärung 3", desc: "Erklärung 3", resc: "Beim Sturzhang wird der Drehgriff verwendet, um den Schwung zu verstärken." }
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
          <a href="/vids/SchaukelnSchwingen/GanzeBahn.jpeg" target="_blank">
            <img src="/vids/SchaukelnSchwingen/GanzeBahn.jpeg" alt="Gesamte Bahn" />
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
            Die Gerätebahn gehört zu der Kategorie «Schaukeln und Schwingen» im Lehrplan 21 und deckt diese Kompetenzbereiche ab.<br />
            <br /><b>Sicherheitshinweis:</b><br />
            Wichtig zu beachten ist, dass während dem Schwingen an den Ringen, nichts verstellt wird. Beim hohen Reck kann für die höhere Sicherheit Magnesium verwendet werden.
          </div>
        </div>
        <div className="abme">
          <h2>Materialliste:</h2>
          <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            <b>Station 1:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Barren</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
            <b>Station 2:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x hohes Reck</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>2x Schwedenkasten</li>
            <b>Station 3:</b> <br />
            <li style={{ marginLeft: '24px' }}>2x Bänkli</li>
            <li style={{ marginLeft: '24px' }}>8x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>3x Affenschwänze (Lianen)</li>
            <b>Station 4:</b> <br />
            <li style={{ marginLeft: '24px' }}>1x Schaukelringe</li>
            <li style={{ marginLeft: '24px' }}>3x dünne Matten (Leichtturnmatten)</li>
            <li style={{ marginLeft: '24px' }}>1x 16er-Matte (Niedersprungmatte)</li>
          </div>
        </div>
      </div>
      {/*Station 1*/}
      <details>
        <summary style={{ fontSize: 'x-Large' }}>Übungen Station 1</summary>
        <div className="flex-container">
          <div className="HnI" >
            <h2>Barren</h2>
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
            <h2>Hohes Reck</h2>
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
            <h2>Affenschwänze</h2>
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
            <h2>Ringe</h2>
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
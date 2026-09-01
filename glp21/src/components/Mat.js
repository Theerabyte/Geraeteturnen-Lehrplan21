'use client'

import React, { useEffect } from 'react'

function Mat() {

	const handleInfoClick = () => {
		document.getElementById("infoModal").style.display = "block";
	};

	const handleCloseModal = () => {
		document.getElementById("infoModal").style.display = "none";
	};

	const handleModalClick = (event) => {
		const modal = document.getElementById("infoModal");
		if (event.target === modal) {
			modal.style.display = "none";
		}
	};

	useEffect(() => {
		window.onclick = handleModalClick;
		return () => {
			window.onclick = null;
		};
	}, []);

	return (
		<>
			<div id="infoModal" className="modal">
				<div className="modal-content">
					<span className="close" onClick={handleCloseModal}>&times;</span>
					<div className="bgc" style={{ whiteSpace: "pre-line" }}>
						<h2>Infos</h2>
						<br />
						<h3>Wer bin ich? </h3>
						<p>Ich bin Sophie Hafner und diese Website ist mein Maturaarbeitsprojekt. Ich turne im Turn- und Sportverein Vechigen und leite dort wöchentlich Kindertrainings. Auf die Idee dieser Maturaarbeit bin ich gekommen, weil sehr viele Kinder in meinem Umfeld keine ausrecihende Körperspannung mehr besitzen. Mit meiner Lehrkraft sind wir dann auf die Idee dieser Website gekommen.</p>
						<br />
						<h3>Warum diese Website? </h3>
						<p>Die Website soll Lehrkräften helfen, ihren Unterricht sinnvoll zu planen, dabei soll die Sicherheit und Einfachheit der Übungen im Fokus stehen. Zusätzlich soll so das Geräteturnen wieder mehr im Schulsport unterrichtet werden. <br /> Im Zusammenhang mit dem Lehrplan 21 sind die Übungen anwendbar für Kinder von der 3. bis zur 6. Klasse, somit im Zyklus 2.</p>
						<br />
						<h3>Wie ist die Website entstanden? </h3>
						<p>Dank der Hilfe meiner Kollegin Naomi Bächler ist diese Website zustande gekommen. Sie hat mir bei der Umsetzung der Website geholfen und mit meinen Bilder- und Videoaufnahmen entstand diese Geräteturnwebsite. </p>
						<br />
						<h3>Infos zur Website: </h3>
						<p>Die Bild- und Videoaufnahmen dienen als Inspiration und können so im Unterricht verwendet werden. Dennoch sind es nur Angaben und Überlegungen von mir, es wurde weiter nicht auf seine Sicherheit geprüft. Weiter Infos im Impressum.</p>
						<br />
						<h3>Viel Spass beim Ausprobien! </h3>
						<p>Ich hoffe ich kann mit dieser Website das Geräteturnen für den Schulsport attraktiver machen und wünsche viel Spass beim Ausprobieren. Wenn Fragen oder Anmerkungen auftreten, kann man sich gerne persönlich bei mir melden (<a style={{ color: '#44080e' }} href="mailto:sophie.hafner08@outlook.com">Sophie.Hafner08@outlook.com</a>). </p>
					</div>
				</div>
			</div>

			<button id="infoButton" onClick={handleInfoClick}>Infos</button>
		</>
	)
}

export default Mat
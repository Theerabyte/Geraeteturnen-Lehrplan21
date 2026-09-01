'use client'

import React, { useEffect } from 'react'

function Bav() {

	const handleImpressumClick = () => {
		document.getElementById("impressumModal").style.display = "block";
	};

	const handleCloseModal = () => {
		document.getElementById("impressumModal").style.display = "none";
	};

	const handleModalClick = (event) => {
		const modal = document.getElementById("impressumModal");
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
			<div id="impressumModal" className="modal">
				<div className="modal-content">
					<span className="close" onClick={handleCloseModal}>&times;</span>
					<div className="bgc" style={{ whiteSpace: "pre-line" }}>
						<h2>Impressum</h2>
						<br />
						<h3>Herausgeberin</h3>
						<p>Hafner Sophie</p>
						<br />
						<h3>Softwearingenieurin</h3>
						<p>Bächler Naomi</p>
						<br />
						<h3>Kontakt</h3>
						<p>Sophie Hafner, sophie.hafner08@outlook.com (E-Mail)</p>
						<br />
						<h3>Copyright</h3>
						<p>Alle Rechte liegen bei Sophie Hafner. Die auf der Website veröffentlichten Bilder und Videos sind urheberrechtlich geschützt und dürfen nicht bearbeitet und so weiterverwendet werden.</p>
						<br />
						<h3>Haftung</h3>
						<p>Die Inhalte der Website wurden dem Lehrplan 21 angepasst. Dennoch kann für deren Richtigkeit keine Gewähr übernommen werden. <br/> Für Unfälle, welche sich aus der Nutzung der Videoaufnahmen ergeben, übernimmt Sophie Hafner keine Haftung. </p>
					</div>
				</div>
			</div>

			<button id="impressumButton" onClick={handleImpressumClick}>Impressum</button>
		</>
	)
}

export default Bav
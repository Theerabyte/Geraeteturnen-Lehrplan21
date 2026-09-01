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
						<h2>impressum</h2>
						<br />
						<h3>contact</h3>
						<p>email<br />phone</p>
						<br />
						<h3>contentResponsibility</h3>
						<p>contentDetails</p>
						<br />
						<h3>liability</h3>
						<p>liabilityText</p>
						<br />
						<h3>copyright</h3>
						<p>copyrightText</p>
					</div>
				</div>
			</div>

			<button id="infoButton" onClick={handleInfoClick}>Infos</button>
		</>
	)
}

export default Mat
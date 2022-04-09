import React from "react";
import DropdownDifficulty from "../components/dropdownDifficulty.tsx";

function OpeningPage(props) {
	const difficultyData = ["easy", "medium", "hard"];

	const startGame = () => {
		if (
			props.selectedDifficulty == null ||
			props.selectedDifficulty.toString() == ""
		) {
			alert("Please choose level for the game");
		} else {
			props.setShowGame(true);
		}
	};

	return (
		<div className="Opening">
			<h1> Quiz Time! </h1>
			<h3>Welcome to Ayelet's quiz!</h3>
			{difficultyData && (
				<div>
					<span>Choose your level:</span>
					<DropdownDifficulty
						difficultyData={difficultyData}
						setSelectedDifficulty={props.setSelectedDifficulty}
					></DropdownDifficulty>
				</div>
			)}
			<button
				onClick={() => {
					startGame();
				}}
			>
				Start game!
			</button>
		</div>
	);
}

export default OpeningPage;

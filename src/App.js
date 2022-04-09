import React, { Fragment, useEffect, useState } from "react";
import OpeningPage from "./components/openingPage";
import QuestionsPage from "./components/questionsPage";
import questions from "./data";
import useSound from "use-sound";
import music from "./sounds/music.mp3";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const App = () => {
	let list = new Map();
	const [newQuestionsArray, setNewQuestionsArray] = useState(null);
	const [selectedDifficulty, setSelectedDifficulty] = useState(null);
	const [showGame, setShowGame] = useState(Boolean | false);
	Array.from(questions, function (item) {
		if (list.get(item.difficulty) == undefined) {
			//insert
			list.set(item.difficulty, 1);
		} else {
			//update
			list.set(item.difficulty, list.get(item.difficulty) + 1);
		}
	});
	const [play, { stop }] = useSound(music);
	const [playMusic, setPlayMusic] = useState(false);

	useEffect(() => {
		const newArray = [];
		questions.forEach((item) => {
			if (item.difficulty == selectedDifficulty) {
				newArray.push(item);
			}
		});
		setNewQuestionsArray(newArray);
	}, [selectedDifficulty]);

	return (
		<div>
			{showGame ? (
				<QuestionsPage
					questions={newQuestionsArray}
					setShowGame={setShowGame}
				/>
			) : (
				<OpeningPage
					selectedDifficulty={selectedDifficulty}
					setSelectedDifficulty={setSelectedDifficulty}
					setShowGame={setShowGame}
				/>
			)}
			{playMusic ? (
				<button
					className="sound"
					onClick={() => {
						stop();
						setPlayMusic(false);
					}}
				>
					<FaVolumeMute />
				</button>
			) : (
				<button
					className="sound"
					onClick={() => {
						play();
						setPlayMusic(true);
					}}
				>
					<FaVolumeUp />
				</button>
			)}
		</div>
	);
};

export default App;

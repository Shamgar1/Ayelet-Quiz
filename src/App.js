import React, { Fragment, useEffect, useState } from "react";
import OpeningPage from "./components/openingPage";
import QuestionsPage from "./components/questionsPage";
import questions from "./data";

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
		</div>
	);
};

export default App;

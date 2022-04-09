import React, { useState } from "react";
import Question from "./Question.js";

const initialState = {
	currentQuestionIndex: 0,
	questions: [],
};

const QuestionsPage = (props) => {
	const [showResults, setshowResults] = useState(false);
	initialState.questions = props.questions;
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [numCorrect, setNumCorrect] = useState(0);
	const nextQuestion = () => {
		setCurrentQuestionIndex(currentQuestionIndex + 1);
		setshowResults(currentQuestionIndex + 1 === props.questions.length - 1);
	};
	return (
		<div className="Questions">
			{!showResults && (
				<div className="questions">
					<div className="score">
						Question {currentQuestionIndex + 1}/{initialState.questions.length}
						<br />
						Correct Answers:{numCorrect}
					</div>
					<Question
						data={initialState.questions[currentQuestionIndex]}
						numCorrect={numCorrect}
						setNumCorrect={setNumCorrect}
						nextQuestion={nextQuestion}
					/>
				</div>
			)}
			{showResults && (
				<div>
					Results
					<div>
						You Answered:{numCorrect} From {props.questions.length}
						<br />
						{(numCorrect / props.questions.length) * 100 >= 90
							? "Congratulations! You are a winner"
							: (numCorrect / props.questions.length) * 100 >= 70
							? "Good job! But we seek excellence, try again."
							: "Are you feeling OK? Try again."}
						<br />
						<button
							onClick={() => {
								setCurrentQuestionIndex(0);
								props.setShowGame(false);
							}}
						>
							Play Again
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default QuestionsPage;

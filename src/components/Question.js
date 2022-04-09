// import { useContext } from "react";
// import { QuizContext } from "../contexts/quiz";
import React, { useState, useRef, useEffect } from "react";
import { shuffleAnswers } from "../helpers";
import { useTimer } from "react-timer-hook";

const Question = (props) => {
	const question = props.data;
	const [answers, setAnswers] = useState(null);

	const [disabledCick, setDisabledCick] = useState(false);
	const correctRef = useRef();
	const wrongRef = useRef();
	const { seconds, isRunning, start, pause, resume, restart } = useTimer({
		onExpire: () => {
			setDisabledCick(true);

			const timer = setTimeout(() => {
				props.nextQuestion();
				setDisabledCick(false);
			}, 1500);
		},
	});

	const checkAnswer = (value, e) => {
		if (question.correct_answer === value) {
			e.currentTarget.classList.add("correct-answer");
			props.setNumCorrect(props.numCorrect + 1);
		} else {
			e.currentTarget.classList.add("wrong-answer");
			correctRef.current.classList.add("correct-answer");
		}
		const timer = setTimeout(() => {
			props.nextQuestion();
			setDisabledCick(false);
		}, 1500);
		return () => clearTimeout(timer);
	};

	useEffect(() => {
		setAnswers(shuffleAnswers(question));
		const time = new Date();
		time.setSeconds(time.getSeconds() + 30);
		restart(time);
	}, [question]);
	return (
		<div>
			<div style={{ fontSize: "20px", color: seconds < 10 ? "red" : "white" }}>
				<span>{seconds > 0 ? seconds : "TIME IS OVER"}</span>
			</div>
			<div
				className="question"
				dangerouslySetInnerHTML={{
					__html: props.data.question,
				}}
			></div>
			{answers != null && (
				<div className="answers">
					{answers.map((value) => (
						<div
							className="answer"
							ref={value === question.correct_answer ? correctRef : wrongRef}
							onClick={(e) => {
								if (!disabledCick) {
									setDisabledCick(true);
									checkAnswer(value, e);
								}
							}}
							key={value}
						>
							<div className="answer-text">{value}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Question;

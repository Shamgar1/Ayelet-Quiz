export const shuffleAnswers = (question) => {
	const unshuffledAnswer = [
		question.correct_answer,
		...question.incorrect_answers,
	];

	return unshuffledAnswer
		.map((unshuffledAnswer) => ({
			sort: Math.random(),
			value: unshuffledAnswer,
		}))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value);
};

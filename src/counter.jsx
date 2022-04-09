import React, { Component } from "react";

class Counter extends Component {
	state = {};
	render() {
		let classes = "badge m-2 badge-";
		return (
			<div>
				<h1>Difficulty level</h1>
				<button>Hard</button>
				<button>Easy</button>
				<button>Medium</button>

				<h1>Catagories</h1>
				<button>History</button>
				<button>Entertainment: Board games</button>
				<button>Geography</button>
				<button>Entertainment: Video games</button>
				<button>Science & Nature</button>
				<button>Entertainment: Cartoon & animations</button>
				<button>Entertainment: Japanese Anime & Manga</button>
				<button>Entertainment: Film</button>
				<button>Mythology</button>
				<button>Politics</button>
				<button>Entertainment: Music</button>
				<button>Entertainment: Television</button>
				<button>Animals</button>
				<button>General knowledge</button>
				<button>Mathematics</button>
				<button>Politics</button>
				<button>Science: Computers</button>
			</div>
		);
	}
}
export default Counter;

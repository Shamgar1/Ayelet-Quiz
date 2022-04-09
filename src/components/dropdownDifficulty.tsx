import React, { useState } from "react";
const DropdownDifficulty: React.FC<{
	difficultyData: string[];
	setSelectedDifficulty: (selectedDifficulty: string) => void;
}> = (props) => {
	const handleChange = (event) => {
		props.setSelectedDifficulty(event.target.value);
	};
	return (
		<>
			{props.difficultyData != null && (
				<select onChange={handleChange}>
					<option value={""}>select</option>
					{props.difficultyData.map((item: string) => {
						return (
							<option value={item} key={item}>
								{item}
							</option>
						);
					})}
				</select>
			)}
		</>
	);
};

export default DropdownDifficulty;

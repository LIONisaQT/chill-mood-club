import { useEffect, useState } from 'react';
import { Dropdown } from 'reactjs-dropdown-component';
import BackgroundPlayerParent from '../BackgroundPlayer/BackgroundPlayerParent';
const customDropdown = require('./CustomDropdownValues');
const backgroundData = require('../Data/BackgroundData');

function BackgroundSelect() {
	const defaultSelection = backgroundData.rain;
	const defaultLabel = defaultSelection.label;
	const defaultValue = defaultSelection.value;
	const defaultBackground = {label: defaultLabel, value: defaultValue};

	const [currentBackground, setBackground] = useState(defaultBackground);

	useEffect(
		() => {
			let url = backgroundData[currentBackground.value].url;
			let bgPlayer = document.getElementById('backgroundAudio');
			bgPlayer.volume = 0.5;
			bgPlayer.src = url;
			bgPlayer.play().catch((e) => {
				// console.error(e);
			});
		},
		[currentBackground]
	)

	const backgroundSelected = (background) => {
		setBackground(background);
	};

	const backgrounds = [];
	for (let background in backgroundData) {
		const label = backgroundData[background].label;
		const value = backgroundData[background].value;
		backgrounds.push({label, value});
	}

	return (
		<div className="BackgroundSelect">
			<audio id="backgroundAudio" src="" loop></audio>
			<p className="Centered">Adjust BG sound</p>
			<Dropdown
				name="background"
				title={currentBackground.label}
				list={backgrounds}
				select={{value: currentBackground.value}}
				onChange={backgroundSelected}
				styles={customDropdown.styles}
			/>
			<BackgroundPlayerParent emoji={backgroundData[currentBackground.value].emoji} />
		</div>
	)
}

export default BackgroundSelect;
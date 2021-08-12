import { useState } from 'react';
import { Dropdown } from 'reactjs-dropdown-component';
import BackgroundPlayerParent from '../BackgroundPlayer/BackgroundPlayerParent';
const customDropdown = require('./CustomDropdownValues');
const backgroundData = require('../Data/BackgroundData');

function BackgroundSelect() {
	const defaultLabel = backgroundData.rain.label;
	const defaultValue = backgroundData.rain.value;
	const defaultBackground = {label: defaultLabel, value: defaultValue};

	const [currentBackground, setBackground] = useState(defaultBackground);

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
			<Dropdown
				name="background"
				title="Rain"
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
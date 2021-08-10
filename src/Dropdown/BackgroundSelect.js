import { Dropdown } from 'reactjs-dropdown-component';
const customDropdown = require('./CustomDropdownValues');

function BackgroundSelect() {
	const backgrounds = [
		{
			label: 'Rain',
			value: 'rain',
			emoji: '🌧️',
		},
		{
			label: 'Forest',
			value: 'forest',
			emoji: '🌲',
		},
		{
			label: 'Waves',
			value: 'waves',
			emoji: '🌊',
		},
		{
			label: 'Cafe',
			value: 'cafe',
			emoji: '☕',
		},
		{
			label: 'City',
			value: 'city',
			emoji: '🏙️',
		},
		{
			label: 'River',
			value: 'river',
			emoji: '🏞️',
		},
		{
			label: 'In-flight',
			value: 'in-flight',
			emoji: '✈️',
		},
	];

	return (
		<div className="BackgroundSelect">
			<Dropdown
				name="background"
				title="Rain"
				list={backgrounds}
				select={{value: 'rain'}}
				onChange={customDropdown.onClick}
				styles={customDropdown.styles}
			/>
		</div>
	)
}

export default BackgroundSelect;
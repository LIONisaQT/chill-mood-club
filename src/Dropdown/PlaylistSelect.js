import { Dropdown } from 'reactjs-dropdown-component';
const customDropdown = require('./CustomDropdownValues');

function PlaylistSelect() {
	const playlists = [
		{
			label: 'Lo-fi',
			value: 'lofi',
		},
		{
			label: 'K-pop',
			value: 'kpop',
		},
		{
			label: 'J-pop',
			value: 'jpop',
		},
		{
			label: 'Anime',
			value: 'anime',
		},
		{
			label: 'Games',
			value: 'games',
		},
		{
			label: 'Use my own',
			value: 'own',
		},
	];

	return (
		<div className="PlaylistSelect">
			<Dropdown
				name="playlist"
				title="Lo-fi"
				list={playlists}
				select={{value: 'lofi'}}
				onChange={customDropdown.onClick}
				styles={customDropdown.styles}
			/>
		</div>
	)
}

export default PlaylistSelect;

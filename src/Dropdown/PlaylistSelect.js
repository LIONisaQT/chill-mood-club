import { useState } from 'react';
import { Dropdown } from 'reactjs-dropdown-component';
import PlaylistOptionParent from '../PlaylistOption/PlaylistOptionParent';
const customDropdown = require('./CustomDropdownValues');
const playlistData = require('../Data/PlaylistData');

function PlaylistSelect() {
	const defaultLabel = playlistData.lofi.label;
	const defaultValue = playlistData.lofi.value;
	const defaultPlaylist = {label: defaultLabel, value: defaultValue};

	const [currentPlaylist, setPlaylist] = useState(defaultPlaylist);

	const playlistSelected = (playlist) => {
		setPlaylist(playlist);
	};

	const playlists = [];
	for (let playlist in playlistData)
	{
		const label = playlistData[playlist].label;
		const value = playlistData[playlist].value;
		playlists.push({label, value});
	}

	return (
		<div className="PlaylistSelect">
			<Dropdown
				name="playlist"
				title="Lo-fi"
				list={playlists}
				select={{value: currentPlaylist.value}}
				onChange={playlistSelected}
				styles={customDropdown.styles}
			/>
			<PlaylistOptionParent data={playlistData[currentPlaylist.value].playlists}/>
		</div>
	)
}

export default PlaylistSelect;

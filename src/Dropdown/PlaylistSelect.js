import { useState } from 'react';
import { Dropdown } from 'reactjs-dropdown-component';
import PlaylistOptionParent from '../PlaylistOption/PlaylistOptionParent';
const customDropdown = require('./CustomDropdownValues');
const playlistData = require('../Data/PlaylistData');

function PlaylistSelect() {
	const defaultSelection = playlistData.lofi;
	const defaultLabel = defaultSelection.label;
	const defaultValue = defaultSelection.value;
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
			<p className="Centered ">Choose a playlist</p>
			<Dropdown
				name="playlist"
				title={currentPlaylist.label}
				list={playlists}
				select={{value: currentPlaylist.value}}
				onChange={playlistSelected}
				styles={customDropdown.styles}
			/>
			<PlaylistOptionParent playlistName={currentPlaylist.value} data={playlistData[currentPlaylist.value].playlists} />
		</div>
	)
}

export default PlaylistSelect;

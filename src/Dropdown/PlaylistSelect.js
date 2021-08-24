import { useState } from 'react';
import { Dropdown } from 'reactjs-dropdown-component';
import LoopContainer from '../PlaylistOption/LoopContainer';
import PlaylistOptionParent from '../PlaylistOption/PlaylistOptionParent';
import {ReactComponent as ArrowUpIcon} from './arrowUp.svg';
import {ReactComponent as ArrowDownIcon} from './arrowDown.svg';
const customDropdown = require('./CustomDropdownValues');
const playlistData = require('../Data/PlaylistData');

function PlaylistSelect() {
	const plStorage = localStorage.getItem('currentPlaylist');
	const defaultSelection = plStorage === null ? playlistData.lofi : playlistData[plStorage];
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
				checkIcon={"✨"}
				arrowUpIcon={<ArrowUpIcon />}
				arrowDownIcon={<ArrowDownIcon />}
			/>
			<PlaylistOptionParent playlistName={currentPlaylist.value} data={playlistData[currentPlaylist.value].playlists} />
			<LoopContainer />
		</div>
	)
}

export default PlaylistSelect;

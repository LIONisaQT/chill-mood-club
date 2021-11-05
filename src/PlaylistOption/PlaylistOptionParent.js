import { useState } from "react";
import PlaylistLinkOption from "./PlaylistLinkOption";
import PlaylistOption from "./PlaylistOption";

// TODO: Fix "Warning: Each child in a list should have a unique 'key' prop." coming from here.
function PlaylistOptionParent(props) {
	const indexStorage = localStorage.getItem('currentIndex');
	const defaultIndex = indexStorage === null ? 0 : indexStorage;

	const [currentPlaylist, setPlaylist] = useState(props.playlistName);
	const [currentIndex, setIndex] = useState(defaultIndex);

	const onClick = (playlistName, index) => {
		setPlaylist(playlistName);
		setIndex(index);
		localStorage.setItem('currentPlaylist', playlistName);
		localStorage.setItem('currentIndex', index);
	};

	const playlists = [];
	if (props.data != null) {
		for (let i = 0; i < props.data.length; i++) {
			playlists.push(
				<PlaylistOption
					key={i}
					// eslint-disable-next-line eqeqeq
					selected={currentPlaylist === props.playlistName && currentIndex == i} // TODO: Figure out why === won't work.
					playlistName={props.playlistName}
					index={i + 1}
					link={props.data[i]}
					callback={onClick} />
			);
		}
	} else {
		playlists.push(<PlaylistLinkOption key={'custom'} />)
	}

	return (
		<div className="PlaylistOptionParent">
			{playlists}
		</div>
	)
}

export default PlaylistOptionParent;

import { useState } from "react";
import PlaylistLinkOption from "./PlaylistLinkOption";
import PlaylistOption from "./PlaylistOption";

// TODO: Fix "Warning: Each child in a list should have a unique 'key' prop." coming from here.
function PlaylistOptionParent(props) {
	const [currentPlaylist, setPlaylist] = useState(props.playlistName);
	const [currentIndex, setIndex] = useState(0);

	const onClick = (playlistName, index) => {
		setPlaylist(playlistName);
		setIndex(index);
	};

	const playlists = [];
	if (props.data != null) {
		for (let i = 0; i < props.data.length; i++) {
			playlists.push(
				<PlaylistOption
					selected={currentPlaylist === props.playlistName && currentIndex === i}
					playlistName={props.playlistName}
					index={i + 1}
					link={props.data[i]}
					callback={onClick} />
			);
		}
	} else {
		playlists.push(<PlaylistLinkOption />)
	}

	return (
		<div className="PlaylistOptionParent">
			{playlists}
		</div>
	)
}

export default PlaylistOptionParent;
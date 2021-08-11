import PlaylistLinkOption from "./PlaylistLinkOption";
import PlaylistOption from "./PlaylistOption";

// TODO: Fix "Warning: Each child in a list should have a unique 'key' prop." coming from here.
function PlaylistOptionParent(props) {
	const playlists = [];
	if (props.data != null) {
		for (let i = 0; i < props.data.length; i++) {
			playlists.push(<PlaylistOption index={i + 1} link={props.data[i]} />);
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
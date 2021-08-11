import PlaylistOption from "./PlaylistOption";

function PlaylistOptionParent(props) {
	const playlists = [];
	if (props.data != null) {
		for (let i = 0; i < props.data.length; i++) {
			playlists.push(<PlaylistOption index={i + 1} link={props.data[i]} />);
		}
	} else {
		playlists.push(<p>Input field here</p>)
	}

	return (
		<div className="PlaylistOptionParent">
			{playlists}
		</div>
	)
}

export default PlaylistOptionParent;
const Utility = require('../Utility/Utility');

function PlaylistOption(props) {
	const index = Utility.padWithZeroes(props.index);

	const click = () => {
		const playlistData = Utility.getVideoId(props.link);
		const loadData = Utility.setLoadData(playlistData);
		Utility.playPlaylist(loadData);
	}

	return (
		<p className="PlaylistOption PlaylistOptionMargin" onClick={click}>{index}</p>
	)
}

export default PlaylistOption;
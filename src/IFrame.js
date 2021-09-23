// Sauce: https://www.freecodecamp.org/news/use-the-youtube-iframe-api-in-react/

import YouTube from 'react-youtube';
import Utility from './Utility/Utility';
const playlistData = require('./Data/PlaylistData');

function IFrame() {
	const opts = {
    playerVars: {
      autoplay: 0,														// Autoplay (on).
			enablejsapi: 1,													// Enable IFrame API controls (on).
			fs: 1,																	// Fullscreen button (on).
			iv_load_policy: 3,											// Annotations (off).
			loop: 1,																// This doesn't work wtf.
			modestbranding: 1,											// YouTube bottom-right toggle (off).
			origin: `${window.location.hostname}`,	// Security (idk what even).
			playsinline: 1,													// Force fullscreen on moobile (off).
			rel: 0,																	// Show related at the end (off).
    }
  };

	const onReady = (e) => {
		process.player = e.target;
		process.player.setLoop(true); // This doesn't work either.
		process.player.setVolume(50);

		updatePlayerIfHasStorage();
	};

	/*
		Cheap hack to fake looping because the loop controls don't work.
		Loops playlist when we finish one. If it's not a playlist, plays the video again.
	*/
	const onEnd = (e) => {
		if (document.getElementById('loop-checkbox').checked) {
			process.player.playVideo();
			process.player.loadPlaylist(e.target.getPlaylistId());
		}
	}

	return (
		<div className="IFrameContainer">
			<YouTube
				videoId="5qap5aO4i9A"
				opts={opts}
				onReady={(e) => onReady(e)}
				onPlay={() => Utility.playBackgroundSound()}
				onEnd={(e) => onEnd(e)} />
		</div>
	)
}

function updatePlayerIfHasStorage() {
	const plStorage = localStorage.getItem('currentPlaylist');
	if (plStorage === null) return;

	let plData;

	if (plStorage === 'own') {
		plData = Utility.getVideoId(localStorage.getItem('customUrl'));
	}	else {
		const indexStorage = localStorage.getItem('currentIndex');
		if (indexStorage === null) return;

		plData = Utility.getVideoId(playlistData[plStorage].playlists[indexStorage]);
	}

	let loadData = Utility.setLoadData(plData);
	Utility.cuePlaylist(loadData);
}

export default IFrame;
// Sauce: https://www.freecodecamp.org/news/use-the-youtube-iframe-api-in-react/

import YouTube from 'react-youtube';

function IFrame() {
	const opts = {
    playerVars: {
      autoplay: 1,														// Autoplay (on).
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
	};

	/*
		Cheap hack to fake looping because the loop controls don't work.
		Loops playlist when we finish one. If it's not a playlist, plays the video again.
	*/
	const onEnd = (e) => {
		process.player.playVideo();
		process.player.loadPlaylist(e.target.getPlaylistId());
	}

	return (
		<div className="IFrameContainer">
			<YouTube
				videoId="5qap5aO4i9A" // Default playlist (lofi), replace with saved value later.
				opts={opts}
				onReady={(e) => onReady(e)}
				onEnd={(e) => onEnd(e)} />
		</div>
	)
}

export default IFrame;
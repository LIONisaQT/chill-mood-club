// Sauce: https://www.freecodecamp.org/news/use-the-youtube-iframe-api-in-react/

import YouTube from 'react-youtube';

function IFrame() {
	const opts = {
    playerVars: {
      autoplay: 1,
			fs: 0,
			origin: `${window.location.hostname}`
    }
  };

	const sayHi = (e) => {
		process.player = e.target;
	};

	return (
		<div className="IFrameContainer">
			<YouTube videoId="5qap5aO4i9A" opts={opts} onReady={(e) => sayHi(e)} />
		</div>
	)
}

export default IFrame;
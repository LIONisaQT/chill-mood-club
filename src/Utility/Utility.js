const backgroundData = require('../Data/BackgroundData');
const assetPath = process.env.PUBLIC_URL + '/assets/';

let isPlaying = false;

module.exports = {
	padWithZeroes: function(index) {
		let value = '' + index;
		while (value.length < 2) {
			value = '0' + value;
		}
		return value;
	},
	getVideoId: function(link) {
		let isPlaylist = false;
		let youTubeId = '';

		if (link.includes('https://youtu.be/')) {
			isPlaylist = false;
			youTubeId = /[^/]*$/.exec(link)[0];
		} else if (link.includes('list=')) {
			isPlaylist = true;
			youTubeId = link.substr(link.indexOf('list=') + 5);
		} else if (link.includes('watch?v=')) {
			youTubeId = link.substr(link.indexOf('watch?v=') + 8);
		} else {
			link = link.replace(/\s/g, '');
			if (link !== '') {
				alert(`Count not extract video/playlist ID from ${link}, try another value.`);
			}
		}

		return [isPlaylist, youTubeId];
	},
	setLoadData: function(playlistData) {
		const loadData = {
			listType: playlistData[0] ? 'playlist' : 'user_uploads',
		};

		if (playlistData[0]) {
			loadData.list = playlistData[1];
		} else {
			loadData.playlist = playlistData[1];
		}

		return loadData;
	},
	playPlaylist: function(loadData) {
		switch (loadData.listType) {
			case 'user_uploads':
				process.player.loadVideoById(loadData.playlist);
				break;
			case 'playlist':
				process.player.loadVideoById('', 0); // Must clear video ID when switching playlists. See comment in #13.
				process.player.loadPlaylist(loadData);
				break;
			default:
				break;
		}

		process.player.setVolume(50);
	},
	cuePlaylist: function(loadData) {
		process.player.cuePlaylist(loadData);
		process.player.setVolume(50);
	},
	playBackgroundSound: function(background) {
		const bgPlayer = document.getElementById('backgroundAudio');

		bgPlayer.volume = 0.5;
		bgPlayer.src = this.getBackgroundUrl(background);
		if (process.player != null) {
			bgPlayer.play().catch((e) => {
				console.error(e);
			});

			isPlaying = true;

			const button = document.getElementById("BackgroundControl");
			button.src = `${assetPath}pause.png`;
		}
		bgPlayer.oncanplay = (event) => {
			// TODO: Should use this, before playing, but sometimes sounds don't load?
		}
	},
	toggleBackgroundSound() {
		const bgPlayer = document.getElementById('backgroundAudio');

		if (!isPlaying) {
			this.playBackgroundSound();
			return;
		}
		
		bgPlayer.pause();
		isPlaying = false;

		const button = document.getElementById("BackgroundControl");
		button.src = `${assetPath}play.png`;
	},
	getBackgroundUrl: function(background) {
		let bgValue = background;

		if (bgValue == null) {
			bgValue = localStorage.getItem('currentBackground');

			if (bgValue == null) {
				bgValue = "rain";
			}
		}

		return backgroundData[bgValue].url;
	},
}

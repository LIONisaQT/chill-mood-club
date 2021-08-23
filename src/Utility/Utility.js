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
		process.player.loadPlaylist(loadData);
		process.player.setVolume(50);
	}
}

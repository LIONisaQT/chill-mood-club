import { Component } from 'react';

const Utility = require('../Utility/Utility');

class PlaylistOption extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: Utility.padWithZeroes(this.props.index),
		}

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.callback.call(this, this.props.playlistName, this.props.index - 1);
		console.log(`getting video ID for ${this.props.playlistName}: ${this.props.index - 1}`);
		const playlistData = Utility.getVideoId(this.props.link);
		const loadData = Utility.setLoadData(playlistData);
		console.log(`PlaylistOption::onClick() `, playlistData, loadData);
		Utility.playPlaylist(loadData);
	}

	render() {
		return (
			<p className={`PlaylistOption PlaylistOptionMargin ${this.props.selected ? 'SelectedIndex' : ''}`} onClick={this.onClick}>{this.state.index}</p>
		)
	}
}

export default PlaylistOption;
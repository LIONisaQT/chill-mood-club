/* eslint-disable no-script-url */

import { Component } from "react";
const Utility = require('../Utility/Utility');

class PlaylistLinkOption extends Component {
	constructor() {
		super();
		this.state = {value: ''};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		const playlistData = Utility.getVideoId(this.state.value);
		if (playlistData === null) return; // URL was invalid.

		const loadData = Utility.setLoadData(playlistData);
		Utility.playPlaylist(loadData);
		localStorage.setItem('currentPlaylist', 'own');
		localStorage.setItem('customUrl', this.state.value);

		event.preventDefault();
	}

	render() {
		return (
			<div className="PlaylistOptionMargin">
				<form onSubmit={this.handleSubmit} autoComplete="off">
					<label>
						<p className="LinkInstruction">Paste YouTube URL (playlist or video must be public)</p>
						<input
							className="PlaylistInput"
							value={this.state.value}
							onChange={this.handleChange}
							type="text"
							placeholder="Enter URL"
						/>
					</label>
				</form>
			</div>
		)
	}
}

export default PlaylistLinkOption;
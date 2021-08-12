const { Component } = require("react");
const assetPath = process.env.PUBLIC_URL + '/assets/';

class ToggleButton extends Component {
	constructor() {
		super();
		this.state = {isPlaying: false};

		this.onClick = this.onClick.bind(this);
	}

	onClick(event) {
		this.setState({isPlaying: !this.state.isPlaying});
		event.target.src = `${assetPath}${this.state.isPlaying ? 'pause' : 'play'}.png`;
	}

	render() {
		return (
			<img
				className="ToggleButton"
				id="BackgroundControl"
				src={`${assetPath}pause.png`}
				alt="Play"
				onClick={this.onClick}
			/>
		)
	}
}

export default ToggleButton;
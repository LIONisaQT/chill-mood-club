import { Component } from "react";

class SliderContainer extends Component {
	constructor() {
		super();
		this.state = {value: 80};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
		document.getElementById('SliderActual').style.width = event.target.value + '%';
	}

	render() {
		return (
			<div className="SliderContainer">
				<div className="SliderActual" id="SliderActual"></div>
				<input
					className="Slider"
					type="range"
					min="0" max="100"
					value={this.state.value}
					onChange={this.handleChange}
					step="1"
				/>
			</div>
		)
	}
}

export default SliderContainer;
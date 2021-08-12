import { Component } from "react";
import SliderContainer from "./SliderContainer";

class BackgroundPlayerParent extends Component {
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
			<div className="BackgroundControls">
				<SliderContainer />
			</div>
		)
	}
}

export default BackgroundPlayerParent;
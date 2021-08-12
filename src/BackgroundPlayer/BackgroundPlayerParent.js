import { Component } from "react";
import SliderContainer from "./SliderContainer";
import ToggleButton from "./ToggleButton";

class BackgroundPlayerParent extends Component {
	render() {
		return (
			<div className="BackgroundControls">
				<p>{this.props.emoji}</p>
				<SliderContainer />
				<ToggleButton />
			</div>
		)
	}
}

export default BackgroundPlayerParent;
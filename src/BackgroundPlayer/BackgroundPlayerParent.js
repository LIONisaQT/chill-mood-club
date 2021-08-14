import SliderContainer from "./SliderContainer";
import ToggleButton from "./ToggleButton";

function BackgroundPlayerParent(props) {
	return (
		<div className="BackgroundControls">
			<p>{props.emoji}</p>
			<SliderContainer />
			<ToggleButton />
		</div>
	)
}

export default BackgroundPlayerParent;
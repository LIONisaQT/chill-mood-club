import Utility from "../Utility/Utility";

function ToggleButton() {
	const clicked = ((event) => {
		Utility.toggleBackgroundSound();
	});

	return (
		<img
			className="ToggleButton"
			id="BackgroundControl"
			src={`${process.env.PUBLIC_URL}/assets/play.png`}
			alt="Play"
			onClick={clicked}
		/>
	)
}

export default ToggleButton;
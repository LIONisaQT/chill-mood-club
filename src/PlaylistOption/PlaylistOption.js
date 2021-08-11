function PlaylistOption(props) {
	let index = '' + props.index;
	while (index.length < 2) {
		index = '0' + index;
	}

	const click = () => {
		console.log(process.player);
		console.log(`link is ${props.link}`);
	}

	return (
		<p className="PlaylistOption" onClick={click}>{index}</p>
	)
}

export default PlaylistOption;
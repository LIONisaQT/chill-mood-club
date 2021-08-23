import { useState } from "react";

function ShareModalBody() {
	const [isCopied, setCopyStatus] = useState(false);

	const onClick = () => {
		setCopyStatus(true);
		navigator.clipboard.writeText(window.location.href);
	}

	return (
		<div>
			<div className="ShareTitle">
				Share this with your friends! 🤗
			</div>
			<div className="ShareLine">
				<div className="LinkArea">{window.location.href}</div>
				<button className="CopyButton" onClick={onClick}>{isCopied ? "Copied!" : "Copy"}</button>
			</div>
		</div>
	)
}

export default ShareModalBody;
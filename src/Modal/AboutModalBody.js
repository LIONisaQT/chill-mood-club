function AboutModalBody() {
	return (
		<div>
			<img className="LogoAbout" src="logo.png" alt="logo"></img>
			<p>
				Life has been so tough lately.
				That's why we created Chill Mood Club, a music hub that combines music with soothing sounds for work, study, or rest time.
			</p>
			<p>
				Choose from our selection of YouTube playlists, or play your own favorite tunes.
				For a more immersive experience, pick a background sound and adjust the volume to your liking.
			</p>
			<p>We hope you feel a bit better with this!</p>
			<p>
				Designed by <a className="Link" href="https://www.anniehu.design" target="_blank" rel="noreferrer">Annie Hu</a> & <a className="Link" href="https://ryanshee.com/" target="_blank" rel="noreferrer">Ryan Shee</a>
				<br />
				Inspired by <a className="Link" href="https://imissmycafe.com/" target="_blank" rel="noreferrer">I Miss My Cafe</a> & <a className="Link" href="http://imissmybar.com/" target="_blank" rel="noreferrer">I Miss My Bar</a>
				<br />
				More info <a className="Link" href={`${window.location.href}about`} target="_blank" rel="noreferrer">here</a>
			</p>
		</div>
	)
}

export default AboutModalBody;
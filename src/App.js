import './App.css';
import IFrame from './IFrame';
import PlaylistSelect from './Dropdown/PlaylistSelect';
import BackgroundSelect from './Dropdown/BackgroundSelect';
import Modal from './Modal/Modal';

function App() {
  return (
    <div className="App">
			<div className="Grid">
				<LeftBar />
				<IFrame />
			</div>
    </div>
  )
}

function LeftBar() {
	return (
		<div className="LeftBar">
			<TopHeader />
			<hr className="Divider"></hr>
			<PlaylistSection />
			<BackgroundSection />
		</div>
	)
}

function TopHeader() {
	const about =
		`Life has been so tough lately. That's why we created Chill Mood Club, a music hub that combines music with soothing sounds for work, study, or rest time.
		
		Choose from our selection of YouTube playlists, or play your own favorite tunes. For a more immersive experience, pick a background sound and adjust the volume to your liking.
		
		We hope you feel a bit better with this!
		
		Designed by Annie Hu & Built by Ryan Shee
		Inspired by I Miss My Cafe & I Miss My Bar
	`;

	const share =
	`Share this with your friends!

		${window.location.href}
	`;

	return (
		<div className="TopHeader Centered">
			<h3>Chill Mood Club</h3>
			<div className="ShareAbout">
				<Modal css="ShareModal" label="Share" contents={share} />
				|
				<Modal css="AboutModal" label="About" contents={about} />
			</div>
		</div>
	)
}

function PlaylistSection() {
	return (
		<div className="PlaylistSection">
			<p className="Centered">Choose a playlist</p>
			<PlaylistSelect />
		</div>
	)
}

function BackgroundSection() {
	return (
		<div>
			<p className="Centered">Adjust BG sound</p>
			<BackgroundSelect />
		</div>
	)
}

export default App;

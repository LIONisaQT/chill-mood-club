import './App.css';
import IFrame from './IFrame';
import PlaylistSelect from './Dropdown/PlaylistSelect';
import BackgroundSelect from './Dropdown/BackgroundSelect';
import Modal from './Modal/Modal';
import ShareModalBody from './Modal/ShareModalBody';
import AboutModalBody from './Modal/AboutModalBody';

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
	return (
		<div className="TopHeader Centered">
			<img className="Logo" src="logo.png" alt="logo"></img>
			<div className="ShareAbout">
				<Modal css="ShareModal" label="Share" contents={<ShareModalBody />} />
				|
				<Modal css="AboutModal" label="About" contents={<AboutModalBody />} />
			</div>
		</div>
	)
}

function PlaylistSection() {
	return (
		<div className="PlaylistSection">
			<PlaylistSelect />
		</div>
	)
}

function BackgroundSection() {
	return (
		<div className="BackgroundSection">
			<BackgroundSelect />
		</div>
	)
}

export default App;

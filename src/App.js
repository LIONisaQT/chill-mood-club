import './App.css';
import IFrame from './IFrame';
import PlaylistSelect from './Dropdown/PlaylistSelect';
import BackgroundSelect from './Dropdown/BackgroundSelect';

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
			<h3>Chill Mood Club</h3>
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
		<div className="BackgroundSection">
			<p className="Centered">Adjust BG sound</p>
			<BackgroundSelect />
		</div>
	)
}

export default App;

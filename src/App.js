import './App.css';
import YouTubeEmbed from './YouTubeEmbed';

function App() {
  return (
    <div className="App">
			<div className="Grid">
				<LeftBar />
				<IFrame />
			</div>
    </div>
  );
}

function LeftBar() {
	return (
		<div className="LeftBar">
			<TopHeader />
			<PlaylistSelect />
			<BackgroundSelect />
		</div>
	);
}

function TopHeader() {
	return (
		<div className="TopHeader">
			<h3>Chill Mood Club</h3>
		</div>
	);
}

function PlaylistSelect() {
	return (
		<div className="PlaylistSelect">
			<p>Playlist select</p>
		</div>
	);
}

function BackgroundSelect() {
	return (
		<div className="BackgroundSelect">
			<p>Background select</p>
		</div>
	);
}

function IFrame() {
	return (
		<div className="IFrameContainer">
			<YouTubeEmbed embedId="5qap5aO4i9A" />
		</div>
	);
}

export default App;

import Navbar from './navbar';
import './App.css';

function Game() {

  let height = window.innerHeight;
  let width = window.innerWidth;
  
  return (
    <div className="Game">
      <iframe frameborder="0" src="https://itch.io/embed-upload/7379196?color=333333" allowfullscreen="" width={width * 0.8} height={height*0.8}><a href="https://yatsz.itch.io/interact%22%3E">Play Interact on itch.io</a></iframe>
    </div>
  );
}

export default Game;

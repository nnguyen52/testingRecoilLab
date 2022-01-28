import ShoppingCart from './components/ShoppingCart';
import GameList from './recoilComponents/GameList';
function App() {
  return (
    <div>
      <ShoppingCart />
      <div
        style={{
          width: '90%',
          height: '20px',
          borderTop: '1px solid grey',
          margin: '1.5rem auto',
        }}
      ></div>
      <GameList />
    </div>
  );
}

export default App;

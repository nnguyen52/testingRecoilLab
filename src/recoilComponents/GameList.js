import { useRecoilState, useRecoilValue } from "recoil";
import EachGame from "../components/EachGame";
import {
  gameListStateHandler,
  shoppingCartHandler,
} from "../recoilStates/index";
const GameList = () => {
  const [gameList, setGameList] = useRecoilState(gameListStateHandler());
  const [shoppingCart, setShoppingcart] = useRecoilState(shoppingCartHandler());
  const handleChooseGame = (game) => {
    if (!shoppingCart) return alert("Server error...");
    if (shoppingCart.some((prev) => prev.id === game.id))
      return alert("You chose this game!");
    setShoppingcart((prev) => [...prev, { ...game, canRemove: true }]);
    setGameList(
      gameList.map((each) => {
        if (each.id !== game.id) return each;
        else return { ...game, bought: true };
      })
    );
  };
  const makeDisable = () => {
    return;
  };
  return (
    <div>
      <h4 onClick={() => console.log(gameList)}>Games</h4>
      {gameList.length == 0 && <>Loading...</>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          padding: "5vmin",
        }}
      >
        {gameList.length > 0 &&
          gameList.map((each) => {
            if (each.bought)
              return (
                <EachGame
                  key={each.id}
                  data={each}
                  handleChooseGame={handleChooseGame}
                  makeDisable={makeDisable}
                  forGameList={true}
                />
              );
            return (
              <EachGame
                key={each.id}
                data={each}
                handleChooseGame={handleChooseGame}
                forGameList={true}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GameList;

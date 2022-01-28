import { useRecoilState, useRecoilValue } from "recoil";
import { gameListStateHandler, shoppingCartHandler } from "../recoilStates";
import EachGame from "./EachGame";
const ShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartHandler());
  const [gameList, setGameList] = useRecoilState(gameListStateHandler());
  const removeFromCart = (game) => {
    setShoppingCart((currentCart) =>
      currentCart.filter((each) => each.id !== game.id)
    );
    setGameList((currentGameList) =>
      currentGameList.map((each) => {
        if (each.bought) {
          return { ...each, bought: false };
        } else {
          return each;
        }
      })
    );
  };
  return (
    <div>
      <h4 onClick={() => console.log(shoppingCart)}>
        Cart (Click each item to remove from cart!)
      </h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          padding: "5vmin",
        }}
      >
        {shoppingCart.length > 0 &&
          shoppingCart.map((each, index) => {
            return (
              <EachGame
                key={each.id}
                data={each}
                forShopCart={true}
                removeFromCart={removeFromCart}
              />
            );
          })}
      </div>

      <div
        style={{
          width: "100%",
          height: "20px",
          borderTop: "10px solid white",
        }}
      ></div>
    </div>
  );
};

export default ShoppingCart;

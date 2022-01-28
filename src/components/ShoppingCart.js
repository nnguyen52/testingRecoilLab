import { useRecoilState, useSetRecoilState } from 'recoil';
import { gameListStateHandler, shoppingCartHandler } from '../recoilStates';
import EachGame from './EachGame';
import { motion } from 'framer-motion';
const ShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartHandler());
  const setGameList = useSetRecoilState(gameListStateHandler());
  const removeFromCart = (game) => {
    setShoppingCart((currentCart) => currentCart.filter((each) => each.id !== game.id));
    setGameList((currentGameList) =>
      currentGameList.map((each) => {
        if (each.bought && each.id === game.id) {
          return { ...each, bought: false, makeDisable: false };
        } else {
          return each;
        }
      })
    );
  };
  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
        paddingLeft: '3vmin',
        paddingRight: '3vmin',
      }}
    >
      <h4 style={{ textAlign: 'center' }} onClick={() => console.log(shoppingCart)}>
        Cart
      </h4>
      <motion.div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {shoppingCart.length > 0 &&
          shoppingCart.map((each, index) => {
            return (
              <EachGame
                key={index}
                data={each}
                forShopCart={true}
                removeFromCart={removeFromCart}
              />
            );
          })}
      </motion.div>
    </div>
  );
};

export default ShoppingCart;

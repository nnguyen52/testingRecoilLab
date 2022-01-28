import { LayoutGroup, motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import EachGame from '../components/EachGame';
import { gameListStateHandler, shoppingCartHandler } from '../recoilStates/index';
const GameList = () => {
  const [gameList, setGameList] = useRecoilState(gameListStateHandler());
  const [shoppingCart, setShoppingcart] = useRecoilState(shoppingCartHandler());
  const handleChooseGame = (game) => {
    if (shoppingCart.some((prev) => prev.id === game.id)) return;
    setShoppingcart((prev) => [...prev, { ...game, canRemove: true }]);
    setGameList(
      gameList.map((each) => {
        if (each.id !== game.id) return each;
        else return { ...game, bought: true, makeDisable: true };
      })
    );
  };
  const makeDisable = () => {
    return;
  };
  const gameListContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
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
      <h4 style={{ textAlign: 'center' }} onClick={() => console.log(gameList)}>
        Games
      </h4>
      {gameList && gameList.length == 0 && <>Loading...</>}
      <motion.div
        variants={gameListContainer}
        initial='hidden'
        animate='show'
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {gameList &&
          gameList.length > 0 &&
          gameList.map((each, index) => {
            if (each.bought)
              return (
                <EachGame
                  key={index}
                  data={each}
                  handleChooseGame={handleChooseGame}
                  makeDisable={makeDisable}
                  forGameList={true}
                />
              );
            return (
              <EachGame
                key={index}
                data={each}
                handleChooseGame={handleChooseGame}
                forGameList={true}
              />
            );
          })}
      </motion.div>
    </div>
  );
};

export default GameList;

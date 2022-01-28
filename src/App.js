import { LayoutGroup, motion } from 'framer-motion';
import ShoppingCart from './components/ShoppingCart';
import GameList from './recoilComponents/GameList';
import { useState } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
// const Item = ({ data, removeItemFromCart, removeItemFromShop, addToCart, addToShop }) => {
//   return (
//     <motion.div
//       style={{
//         color: 'white',
//         padding: '1em',
//         borderRadius: '50%',
//         background: `${data.bg}`,
//         width: '50px',
//         height: '50px',
//         margin: '10px',
//       }}
//       onClick={() => {
//         if (removeItemFromCart) {
//           removeItemFromCart((currentCart) =>
//             currentCart.filter((each) => each.name !== data.name)
//           );
//         }
//         if (removeItemFromShop) {
//           removeItemFromShop((currentShop) =>
//             currentShop.filter((each) => each.name !== data.name)
//           );
//         }
//         if (addToCart) {
//           addToCart((currentCart) => [...currentCart, data]);
//         }
//         if (addToShop) {
//           addToShop((currentShop) => [...currentShop, data]);
//         }
//       }}
//     >
//       {data.name}
//     </motion.div>
//   );
// };
// const itemsAtom = atom({
//   key: 'itemsAtom',
//   default: [
//     { name: 'A', bg: `red` },
//     { name: 'B', bg: `green` },
//     { name: 'C', bg: 'blue' },
//   ],
// });
// const cartAtom = atom({
//   key: 'cartAtom',
//   default: [],
// });
function App() {
  // const [items, setItems] = useRecoilState(itemsAtom);
  // const [cart, setCart] = useRecoilState(cartAtom);
  // const [items, setItems] = useState([
  //   { name: 'A', bg: `red` },
  //   { name: 'B', bg: `green` },
  //   { name: 'C', bg: 'blue' },
  // ]);
  // const buyItem = (item) => {
  //   setItems((prev) =>
  //     prev.map((each) => {
  //       if (each.name == item.name) return { ...each, bought: true };
  //       else return each;
  //     })
  //   );
  // };
  // const removeItem = (item) => {
  //   setItems((prev) =>
  //     prev.map((each) => {
  //       if (each.name == item.name) return { ...each, bought: false };
  //       else return each;
  //     })
  //   );
  // };
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
      {/* ///////////// */}
      {/* <LayoutGroup>
        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            border: '1px solid white',
            marginBottom: '1em',
          }}
        >
          <span
            style={{ display: 'block', width: '100%', textAlign: 'center', fontSize: '2rem' }}
            onClick={() => console.log(cart)}
          >
            My Cart
          </span>
          {cart.map((each, index) => {
            return (
              <Item key={index} data={each} removeItemFromCart={setCart} addToShop={setItems} />
            );
          })}
        </motion.div>
        <motion.div style={{ display: 'flex', flexWrap: 'wrap', border: '1px solid white' }}>
          <span
            style={{ display: 'block', width: '100%', textAlign: 'center', fontSize: '2rem' }}
            onClick={() => console.log(items)}
          >
            Shop
          </span>
          {items.map((each, index) => {
            return (
              <Item key={index} data={each} removeItemFromShop={setItems} addToCart={setCart} />
            );
          })}
        </motion.div>
      </LayoutGroup> */}
    </div>
  );
}

export default App;

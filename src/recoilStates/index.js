import axios from "axios";
import { atomFamily, atom, selector, selectorFamily } from "recoil";
export const gameListState = atom({
  key: "gameListState",
  default: [],
});

export const gameListStateHandler = selectorFamily({
  key: "gameListStateHandler",
  get:
    () =>
    ({ get }) => {
      return get(gameListState);
    },
  set:
    () =>
    ({ set }, data) => {
      set(gameListState, data);
    },
});
export const fetchGames = async () => {
  const res = await axios.post(process.env.REACT_APP_DB);
  return res.data.filtered;
};

export const shoppingCart = atom({
  key: "shoppingCart",
  default: [],
});
export const shoppingCartHandler = selectorFamily({
  key: "shoppingCartHandler",
  get:
    () =>
    ({ get }) => {
      return get(shoppingCart);
    },
  set:
    () =>
    ({ set }, newCart) => {
      set(shoppingCart, newCart);
    },
});

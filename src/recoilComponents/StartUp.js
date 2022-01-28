import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { fetchGames, gameListStateHandler } from "../recoilStates";
const StartUp = () => {
  const [gameListState, setGameListState] = useRecoilState(
    gameListStateHandler()
  );
  useEffect(() => {
    (async () => {
      const data = await fetchGames();
      setGameListState(data);
    })();
  }, []);
  return <></>;
};

export default StartUp;

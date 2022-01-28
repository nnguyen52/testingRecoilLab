const EachGame = ({
  data,
  handleChooseGame,
  makeDisable,
  forGameList,
  forShopCart,
  removeFromCart,
}) => {
  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        border: `1px solid ${forGameList && makeDisable ? "red" : "white"}`,
        margin: "5px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        cursor: " pointer",
        position: "relative ",
        backgroundImage:
          forGameList && makeDisable
            ? ""
            : `url(${`https://images.igdb.com/igdb/image/upload/t_logo_med/${
                data.cover
                  ? data.cover.image_id
                  : data.screenshots
                  ? data.screenshots[0].image_id
                  : null
              }.jpg`})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() =>
        forGameList && makeDisable
          ? makeDisable()
          : forShopCart
          ? removeFromCart(data)
          : handleChooseGame(data)
      }
    >
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          background: "rgba(0,0,0, 0.5)",
        }}
      >
        {forGameList && makeDisable ? (
          <span style={{ fontSize: "2em", color: "red" }}>X</span>
        ) : (
          data.name
        )}
      </span>
    </div>
  );
};

export default EachGame;

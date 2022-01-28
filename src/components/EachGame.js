import { motion, MotionConfig } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { windowSizeHandler } from '../recoilStates/windowResize';
const EachGame = ({
  data,
  handleChooseGame,
  makeDisable,
  forGameList,
  forShopCart,
  removeFromCart,
}) => {
  const windowSize = useRecoilValue(windowSizeHandler());
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div
        // layoutId={data.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: {
            duration: 1,
          },
        }}
        whileHover={{
          transition: { duration: 1 },
          border: `${forGameList && !data.bought ? '1px solid yellowgreen' : ''}`,
        }}
        className={forShopCart ? 'eachGameWrapper' : ''}
        style={{
          width: `${windowSize.width <= 600 ? '45%' : windowSize.width <= 900 ? '31%' : '15%'}`,
          height: '200px',
          margin: '5px',
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          cursor: `${forGameList ? 'pointer' : ''}`,
          position: 'relative ',
          backgroundImage:
            forGameList && makeDisable
              ? ''
              : `url(${`https://images.igdb.com/igdb/image/upload/t_logo_med/${
                  data.cover
                    ? data.cover.image_id
                    : data.screenshots
                    ? data.screenshots[0].image_id
                    : null
                }.jpg`})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={() =>
          forGameList && makeDisable ? makeDisable() : forShopCart ? null : handleChooseGame(data)
        }
      >
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            gap: '2vmin',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            background: 'rgba(0,0,0, 0.5)',
            zIndex: 1,
          }}
        >
          {forGameList && data.bought ? (
            <span
              style={{
                fontSize: '2em',
                color: 'red',
                display: 'block',
                border: '1px solid red',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              X
              {/* <img
                src={`https://images.igdb.com/igdb/image/upload/t_logo_med/${
                  data.cover
                    ? data.cover.image_id
                    : data.screenshots
                    ? data.screenshots[0].image_id
                    : null
                }.jpg`}
                alt=''
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              /> */}
            </span>
          ) : (
            <span style={{ background: 'rgba(255,255,255,0)', fontSize: '2.5vmin' }}>
              {data.name}
            </span>
          )}
          {forShopCart && (
            <div
              style={{
                padding: '1em',
                borderRadius: '50%',
                fontSize: 'small',
                width: '10vmin',
                height: '10vmin',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
              }}
              className='removeBtn'
              onClick={() => removeFromCart(data)}
            >
              <span
                style={{
                  transform: 'translate(-50%,-50%)',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  background: 'rgba(255,255,255,0)',
                }}
              >
                Remove
              </span>
            </div>
          )}
        </span>
      </motion.div>
    </MotionConfig>
  );
};

export default EachGame;

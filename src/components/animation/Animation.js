/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Animation = () => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      `}
    >
      <div
        css={css`
          width: 120px;
          height: 50px;
          border-radius: 50%;
          background-color: #ffb962;
          position: absolute;

          border: 5px solid white;
          top: 50px;
          animation: 3s dotFlashing infinite ease;
          @keyframes dotFlashing {
            0% {
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            75% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      ></div>
      <div
        css={css`
          width: 120px;
          height: 50px;
          border-radius: 50%;
          background-color: #ff5969;
          position: absolute;
          top: 100px;
          border: 5px solid white;
          animation: 3s dotFlashing infinite ease;
          animation-delay: 1s;
          @keyframes dotFlashing {
            0% {
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            75% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      ></div>
      <div
        css={css`
          width: 120px;
          height: 50px;
          border-radius: 50%;
          background-color: #ffb962;
          position: absolute;
          top: 150px;
          border: 5px solid white;
          animation: 3s dotFlashing infinite ease;
          animation-delay: 2s;
          @keyframes dotFlashing {
            0% {
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            75% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      ></div>
    </div>
  );
};

export default Animation;

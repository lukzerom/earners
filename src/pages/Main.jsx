/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import earner from "../assets/earner.svg";
import Animation from "../components/animation/Animation";

const Main = () => {
  return (
    <div>
      <div
        css={css`
          width: 30%;
          margin: 48px auto;
          @media only screen and (max-width: 600px) {
            width: 80%;
          }
        `}
      >
        <img
          src={earner}
          css={css`
            width: 100%;
          `}
          alt=""
        />
      </div>
      <Animation />
      <h2
        css={css`
          font-family: "Poppins", sans-serif;
          text-align: center;
          color: #1b1b1b;
          margin-top: 250px;
        `}
      >
        Aplikacja w budowie
      </h2>
    </div>
  );
};

export default Main;

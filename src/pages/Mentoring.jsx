/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import earner from "../assets/earner.svg";
import konewka from "../assets/konewka.svg";
import subscribe from "../assets/subscribe.svg";

const Mentoring = () => {
  return (
    <div>
      <section
        css={css`
          display: flex;
          min-height: 100vh;
          @media only screen and (max-width: 800px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            width: 60%;
            padding-left: 10%;
            @media only screen and (max-width: 800px) {
              width: 100%;
              padding-left: 0;
              padding: 24px;
            }
          `}
        >
          <div>
            <img
              src={earner}
              alt=""
              css={css`
                width: 150px;
                margin: 40px 0;
              `}
            />
          </div>
          <h1
            css={css`
              font-size: 2rem;
              font-weight: 700;
            `}
          >
            Cieszymy się, że chcesz Się z nami rozwijać
          </h1>
          <h3>
            Poznaj nasze kroki przygotowujące do rozmowy rozwojowej. Odpowiedz
            na kilka pytań żeby pomóc nam odnaleźć najlepszą drogę rozwoju dla
            Ciebie.
          </h3>

          <div
            css={css`
              background-color: #f99746;
              padding: 6px;
              display: inline-block;
              color: white;
              margin-right: 12px;
              font-weight: 500;
            `}
          >
            Zaczynajmy!
          </div>
        </div>
        <div
          css={css`
            width: 60%;
            @media only screen and (max-width: 800px) {
              width: 100%;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <img
              src={konewka}
              alt=""
              css={css`
                margin-top: 100px;
                padding: 24px;
              `}
            />
          </div>
        </div>
      </section>
      <section
        css={css`
          background-color: #fff3e6;
          padding: 24px 11%;
        `}
      >
        <h1
          css={css`
            font-size: 2rem;
            font-weight: 700;
          `}
        >
          Cieszymy się, że chcesz Się z nami rozwijać
        </h1>
        <section
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              background-color: #ffbd71;
              margin: 6px;
              width: 33%;
              height: 300px;
            `}
          >
            <div>
              <div
                css={css`
                  color: white;
                  text-align: center;
                  border-bottom: 4px solid white;
                  margin: 0 12px;
                  height: 48px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <img
                  src={subscribe}
                  alt=""
                  css={css`
                    height: 24px;
                    margin: 12px;
                  `}
                />
                <h2>Basic</h2>
              </div>
            </div>
          </div>
          <div
            css={css`
              background-color: #ffbd71;
              margin: 6px;
              width: 33%;
              height: 300px;
            `}
          >
            <div>
              <div
                css={css`
                  color: white;
                  text-align: center;
                  border-bottom: 4px solid white;
                  margin: 0 12px;
                  height: 48px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <img
                  src={subscribe}
                  alt=""
                  css={css`
                    height: 24px;
                    margin: 12px;
                  `}
                />
                <h2>Optimal</h2>
              </div>
            </div>
          </div>
          <div
            css={css`
              background-color: #ffbd71;
              margin: 6px;
              width: 33%;
              height: 300px;
            `}
          >
            <div>
              <div
                css={css`
                  color: white;
                  text-align: center;
                  border-bottom: 4px solid white;
                  margin: 0 12px;
                  height: 48px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <img
                  src={subscribe}
                  alt=""
                  css={css`
                    height: 24px;
                    margin: 12px;
                  `}
                />
                <h2>Maximum</h2>
              </div>
            </div>
          </div>
        </section>
      </section>{" "}
    </div>
  );
};

export default Mentoring;

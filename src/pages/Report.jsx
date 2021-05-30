/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import artificialIntelligence from "../assets/artificial-intelligence.svg";
import ball from "../assets/ball.png";
import earner from "../assets/earner.svg";
import group149 from "../assets/group149.svg";
import group150 from "../assets/group150.svg";
import konewka from "../assets/konewka.svg";
import network from "../assets/network.svg";

const Report = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 30
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
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
        {progress < 100 && (
          <div
            css={css`
              width: 100vw;
              height: 100vh;
              background-color: white;
              position: fixed;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 10;
            `}
          >
            <div
              css={css`
                width: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
              `}
            >
              <h1>AI is processing your data</h1>
              <i class="fas fa-robot"></i>
              <CircularProgress
                variant="determinate"
                value={progress}
                size={200}
              />
            </div>
          </div>
        )}

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
            Aneta, mamy dla Ciebie propozycje jak możesz więcej zarabiać
          </h1>
          <h2>Zobacz jakich argumentów użyć podczas rozmowy o podwyżkę</h2>
          <div
            css={css`
              display: flex;
            `}
          >
            <div
              css={css`
                background-color: #f99746;
                padding: 6px;
                color: white;
                margin-right: 12px;
                font-weight: 500;
              `}
            >
              Twoje mocne strony
            </div>
            <div
              css={css`
                padding: 6px;
                background-color: #f99746;
                color: white;
                font-weight: 500;
              `}
            >
              Ty w porównaniu z innymi
            </div>
          </div>
          <span
            css={css`
              padding: 6px;
              display: inline-block;
              margin-top: 24px;
              background-color: #fe676e;
              color: white;
              font-weight: 500;
            `}
          >
            Dalsze możliwości rozwoju
          </span>
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
                @media only screen and (max-width: 800px) {
                  width: 100%;
                }
              `}
            />
          </div>
        </div>
      </section>
      <section
        css={css`
          background-color: #fe676e;
          display: flex;
          @media only screen and (max-width: 800px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            margin-left: 10%;
            padding: 24px;
            width: 40%;
            @media only screen and (max-width: 800px) {
              width: 100%;
            }
          `}
        >
          <img
            src={group150}
            alt=""
            css={css`
              width: 100%;
            `}
          />
        </div>
        <div
          css={css`
            width: 60%;
            margin-right: 10%;
            padding: 24px;
            @media only screen and (max-width: 800px) {
              width: 100%;
              margin-right: 0;
              padding: 24px;
            }
          `}
        >
          <h1
            css={css`
              font-size: 2rem;
              font-weight: 700;
              color: white;
            `}
          >
            Aneta, jesteś super
          </h1>
          <h2>
            Poniżej Twoje wyniki, jeżeli potrzebujesz dalszego wsparcia zobacz
            naszą ścieżkę 12 kroków do podwyżki która pomoże Ci w bezstresowej
            rozmowie
          </h2>
          <Link
            to="/mentoring"
            css={css`
              text-decoration: none;
            `}
          >
            <Button variant="contained" color="primary">
              Dalej
            </Button>
          </Link>
        </div>
      </section>
      <section
        css={css`
          min-height: 100vh;
          background-color: #fff3e6;
          padding: 24px 15%;
          @media only screen and (max-width: 800px) {
            padding: 24px;
          }
        `}
      >
        <h1
          css={css`
            font-size: 2rem;
            font-weight: 700;
          `}
        >
          Twoje mocne strony
        </h1>
        <div
          css={css`
            display: flex;
            @media only screen and (max-width: 800px) {
              flex-direction: column;
              padding: 24px;
            }
          `}
        >
          <div
            css={css`
              background-color: #ffbd71;
              margin: 6px;
              min-height: 320px;
              width: 33%;
              @media only screen and (max-width: 800px) {
                width: 100%;
              }
            `}
          >
            <div>
              <h2
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
                <EmojiObjectsIcon
                  css={css`
                    color: white;
                    margin-right: 8px;
                  `}
                />
                Wiedza
              </h2>
            </div>
            <div
              css={css`
                background-color: #f99746;
                padding: 12px;
                margin: 12px;
                color: white;
              `}
            >
              Stale się doszkalasz, dzięki czemu pracodawca nie musi wydawać
              dodatkowych środków na szkolenie pracowników
            </div>
            <div
              css={css`
                background-color: #f99746;
                padding: 12px;
                margin: 12px;
                color: white;
              `}
            >
              Świetnie znasz język angielski dzięki czemu możesz prowadzić
              prezentacje W tym języku
            </div>
          </div>
          <div
            css={css`
              background-color: #ffbd71;
              margin: 6px;
              width: 33%;
              @media only screen and (max-width: 800px) {
                width: 100%;
              }
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
                  src={artificialIntelligence}
                  alt=""
                  css={css`
                    height: 24px;
                    margin: 12px;
                  `}
                />
                <h2>Umiejętności</h2>
              </div>
            </div>
            <div
              css={css`
                background-color: #f99746;
                padding: 12px;
                margin: 12px;
                color: white;
              `}
            >
              Świetnie znasz 5 Programów graficznych, w tym nie wymagane, A
              będące atutem na Twoim stanowisku, dzięki czemu pracodawca nie
              musi szukać dodatkowych pracowników
            </div>
            <div
              css={css`
                background-color: #f99746;
                padding: 12px;
                margin: 12px;
                color: white;
              `}
            >
              Dzielisz się swoimi umiejętnościami dzięki czemu Podnosisz
              kwalifikacje Współpracowników
            </div>
          </div>
          <div
            css={css`
              background-color: #ffbd71;
              margin: 6px;
              width: 33%;
              @media only screen and (max-width: 800px) {
                width: 100%;
              }
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
                  src={network}
                  alt=""
                  css={css`
                    height: 24px;
                    margin: 12px;
                  `}
                />
                <h2>Sukcesy</h2>
              </div>
              <div
                css={css`
                  background-color: #f99746;
                  padding: 12px;
                  margin: 12px;
                  color: white;
                `}
              >
                W ostatnim roku udało Ci Się pracować przy wygranych Przetargach
                dzięki czemu Zwiększyłaś zyski firmy
              </div>
              <div
                css={css`
                  background-color: #f99746;
                  padding: 12px;
                  margin: 12px;
                  color: white;
                `}
              >
                W ostatnim roku dostałaś pochwałę od klienta, co oznacza, że
                jest on zadowolony z Twojej pracy
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        css={css`
          background-color: #f99746;
          min-height: 100vh;
          padding: 24px 11%;
          @media only screen and (max-width: 800px) {
            padding: 24px;
          }
        `}
      >
        <h1
          css={css`
            font-size: 2rem;
            font-weight: 700;
            color: white;
          `}
        >
          Ty w porównaniu z innymi
        </h1>
        <h1
          css={css`
            font-size: 2rem;
            font-weight: 700;
          `}
        >
          Możesz ubiegać się nawet o wyższą podwyżkę niż oczekujesz
        </h1>
        <section
          css={css`
            position: relative;
            height: 6rem;
            @media only screen and (max-width: 800px) {
              display: none;
            }
          `}
        >
          <div
            css={css`
              border-bottom: 4px solid #fe676e;
              display: inline-block;
              position: absolute;
              left: 30%;
              top: 0;
            `}
          >
            Zarabiasz 7000 zł netto
          </div>
          <div
            css={css`
              display: flex;
              width: 100%;
              position: absolute;
              top: 2rem;
            `}
          >
            <div
              css={css`
                background-color: #fff3e6;
                width: 40%;
                padding: 6px 12px;
                display: flex;
                justify-content: flex-start;
              `}
            >
              Min 5000 zł netto
            </div>
            <div
              css={css`
                background-color: #fff3e6;
                width: 20%;
                padding: 6px 12px;
                border-right: 4px solid #fe676e;
                border-left: 4px solid #fe676e;
              `}
            ></div>
            <div
              css={css`
                background-color: #fff3e6;
                width: 40%;
                padding: 6px 12px;
                display: flex;
                justify-content: flex-end;
              `}
            >
              Max 12 000 zł netto
            </div>
          </div>
          <div
            css={css`
              border-top: 4px solid #fe676e;
              display: inline-block;
              position: absolute;
              left: 50%;
              top: 4.5rem;
            `}
          >
            Chcesz zarabiać 8000 zł netto
          </div>
        </section>
        <h1
          css={css`
            font-size: 2rem;
            font-weight: 700;
            padding: 6px;
          `}
        >
          Masz bardzo dużo umiejętności dodatkowych przydatnych na Twoim
          Stanowisku
        </h1>
        <div
          css={css`
            display: flex;
            @media only screen and (max-width: 800px) {
              flex-direction: column;
            }
          `}
        >
          <div
            css={css`
              width: 25%;
              padding: 16px;
              @media only screen and (max-width: 800px) {
                width: 100%;
              }
            `}
          >
            <img
              src={ball}
              alt=""
              css={css`
                width: 100%;
              `}
            />
          </div>
          <div
            css={css`
              width: 25%;
              padding: 16px;
              @media only screen and (max-width: 800px) {
                width: 100%;
              }
            `}
          >
            <h1>90% osób na Twoim stanowisku nie zna Adobe After Effects</h1>
          </div>
          <div
            css={css`
              width: 25%;
              padding: 16px;
              @media only screen and (max-width: 800px) {
                width: 100%;
              }
            `}
          >
            <img
              src={ball}
              alt=""
              css={css`
                width: 100%;
              `}
            />
          </div>
          <div
            css={css`
              width: 25%;
              padding: 16px;
              @media only screen and (max-width: 800px) {
                width: 100%;
              }
            `}
          >
            <h1>90% osób na Twoim stanowisku nie zna programów do 3D</h1>
          </div>
        </div>
      </section>
      <section
        css={css`
          background-color: #fe676e;
          display: flex;
          @media only screen and (max-width: 800px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            width: 50%;
            padding: 24px;
            @media only screen and (max-width: 800px) {
              width: 100%;
            }
          `}
        >
          <img
            src={group149}
            alt=""
            css={css`
              width: 100%;
              @media only screen and (max-width: 800px) {
                width: 100%;
              }
            `}
          />
        </div>
        <div
          css={css`
            width: 50%;
            padding: 24px;
            @media only screen and (max-width: 800px) {
              width: 100%;
            }
          `}
        >
          <h1
            css={css`
              font-size: 2rem;
              font-weight: 700;
              color: white;
            `}
          >
            Trzymamy za Ciebie kciuki
          </h1>
          <h2>
            Przygotuj się z nami do rozmowy, żeby z większym prawdopodobieństwem
            zakończyć ją sukcesem
          </h2>
          <Button variant="contained" color="primary">
            Sprawdź
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Report;

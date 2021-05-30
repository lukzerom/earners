/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button, createStyles, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import earner from "../assets/earner.svg";
import group73 from "../assets/group73.svg";
import working from "../assets/working.svg";

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      minWidth: "100%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const Main = () => {
  const [option, setOption] = useState("");
  const classes = useStyles();

  const history = useHistory();

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleNext = () => {
    switch (option) {
      case "rise":
        history.push("/rise");
        break;

      default:
        break;
    }
  };

  return (
    <section>
      <div>
        <img
          src={earner}
          alt=""
          css={css`
            width: 150px;
            padding: 24px 11%;
          `}
        />
      </div>
      <section
        css={css`
          background-color: #fff3e6;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <h1
          css={css`
            font-size: 2rem;
            font-weight: 700;
          `}
        >
          Czego potrzebujesz, żeby rozwijać się w pracy?
        </h1>
      </section>
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            width: 50%;
            background-color: #fe676e;
            padding: 48px 11%;
          `}
        >
          <h1>Potrzebuję argumentów do rozmowy z managerem</h1>
          <Link
            to="/arguments"
            css={css`
              text-decoration: none;
            `}
          >
            <Button variant="contained" color="primary" onClick={handleNext}>
              Dalej
            </Button>
          </Link>
          <img
            src={group73}
            alt=""
            css={css`
              width: 100%;
            `}
          />
        </div>
        <div
          css={css`
            width: 50%;
            background-color: #ffbd71;
            padding: 48px 11%;
          `}
        >
          <h1>Potrzebuję coachingu I wsparcia mentalnego</h1>
          <Link
            to="/mentoring"
            css={css`
              text-decoration: none;
            `}
          >
            <Button variant="contained" color="primary" onClick={handleNext}>
              Dalej
            </Button>
          </Link>
          <img
            src={working}
            alt="person working at table"
            css={css`
              width: 100%;
            `}
          />
        </div>
      </div>
    </section>
  );
};

export default Main;

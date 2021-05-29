/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {
  Button,
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useState } from "react";
import earner from "../assets/earner.svg";
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

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <div
      css={css`
        display: flex;
        @media only screen and (max-width: 800px) {
          flex-direction: column;
        }
      `}
    >
      <section
        css={css`
          width: 50%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          padding: 24px;
          @media only screen and (max-width: 800px) {
            width: 100%;
          }
        `}
      >
        <div>
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
          <div>
            <h1
              css={css`
                margin-top: 15%;
              `}
            >
              Cześć Aneta!
            </h1>
            <h2
              css={css`
                margin: 3rem 0;
              `}
            >
              Jaki jest Twój cel w rozwoju zawodowym ?
            </h2>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel id="demo-simple-select-helper-label">
                Wybierz
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={option}
                onChange={handleChange}
                label="Wybierz"
              >
                <MenuItem value={"awans"}>Chciałabym awansować</MenuItem>
                <MenuItem value={"podwyzka"}>Staram się o podwyżkę</MenuItem>
                <MenuItem value={"branza"}>Chciałabym zmienić branżę</MenuItem>
              </Select>
            </FormControl>
            <div
              css={css`
                margin: 24px 0;
                display: flex;
                justify-content: flex-end;
              `}
            >
              <Button variant="contained" color="primary">
                Dalej
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        css={css`
          background-color: #fff3e6;
          width: 50%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          @media only screen and (max-width: 800px) {
            width: 100%;
          }
        `}
      >
        <div
          css={css`
            padding: 24px;
          `}
        >
          <img
            src={working}
            alt="person working at table"
            css={css`
              width: 100%;
            `}
          />
        </div>
      </section>
    </div>
  );
};

export default Main;

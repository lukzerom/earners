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
import { useHistory } from "react-router-dom";
import earner from "../assets/earner.svg";
import working from "../assets/working.svg";
import {
  ColumnsWrapper,
  FirstColumn,
  SecondColumn,
} from "../components/animation/helpers";

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
    <ColumnsWrapper>
      <FirstColumn>
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
                <MenuItem value={"promotion"}>Chciałabym awansować</MenuItem>
                <MenuItem value={"rise"}>Staram się o podwyżkę</MenuItem>
                <MenuItem value={"change"}>Chciałabym zmienić branżę</MenuItem>
              </Select>
            </FormControl>
            <div
              css={css`
                margin: 24px 0;
                display: flex;
                justify-content: flex-end;
              `}
            >
              <Button variant="contained" color="primary" onClick={handleNext}>
                Dalej
              </Button>
            </div>
          </div>
        </div>
      </FirstColumn>
      <SecondColumn>
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
      </SecondColumn>
    </ColumnsWrapper>
  );
};

export default Main;

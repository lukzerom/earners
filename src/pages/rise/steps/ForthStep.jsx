/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button, createStyles, makeStyles, TextField } from "@material-ui/core";
import LandscapeIcon from "@material-ui/icons/Landscape";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import { useState } from "react";
import { StepWrapper } from "../../../components/animation/helpers";
import { StepWelcome } from "./StepWelcome";

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

const ForthStep = () => {
  const classes = useStyles();

  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");
  const [prices, setPrices] = useState([]);
  const [price, setPrice] = useState("");

  const handleCourse = () => {
    setCourses([...courses, course]);
    setCourse("");
  };

  const handlePrice = () => {
    setPrices([...prices, price]);
    setPrice("");
  };

  return (
    <StepWrapper>
      <StepWelcome />

      <h3>Czy uczestniczyłaś w wolontariatach?</h3>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <TextField
          id="standard-basic"
          label="Dodaj nazwę wolontariatu"
          className={classes.formControl}
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCourse}
        css={css`
          margin: 12px 0;
        `}
      >
        Dodaj Wolontariat
      </Button>
      <div>
        {courses.map((e) => {
          return (
            <h3
              css={css`
                background-color: #f5f5f5;
                border-radius: 4px;
                padding: 12px;
                margin: 6px 0;
                line-height: 1.5rem;
                display: flex;
              `}
            >
              <LoyaltyIcon
                css={css`
                  color: #ffb962;
                  margin-right: 8px;
                `}
              />
              {e}
            </h3>
          );
        })}
      </div>

      <h3>Czy dostałaś za swoją pracę Jakieś nagrody?</h3>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <TextField
          id="standard-basic"
          label="Dodaj nazwę nagrody"
          className={classes.formControl}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handlePrice}
        css={css`
          margin: 12px 0;
        `}
      >
        Dodaj Nagrodę
      </Button>
      <div>
        {prices.map((e) => {
          return (
            <h3
              css={css`
                background-color: #f5f5f5;
                border-radius: 4px;
                padding: 12px;
                margin: 6px 0;
                line-height: 1.5rem;
                display: flex;
              `}
            >
              <LandscapeIcon
                css={css`
                  color: #ffb962;
                  margin-right: 8px;
                `}
              />
              {e}
            </h3>
          );
        })}
      </div>
    </StepWrapper>
  );
};

export default ForthStep;

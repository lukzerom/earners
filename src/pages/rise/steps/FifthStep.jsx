/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button, createStyles, makeStyles, TextField } from "@material-ui/core";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
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

const FifthStep = () => {
  const classes = useStyles();

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [successes, setSuccesses] = useState([]);
  const [success, setSuccess] = useState("");

  const handleTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const handlePrice = () => {
    setSuccesses([...successes, success]);
    setSuccess("");
  };
  return (
    <StepWrapper>
      <StepWelcome />

      <h3>Podaj jakie zadania realizujesz w pracy</h3>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <TextField
          id="standard-basic"
          label="Wpisz zadanie"
          className={classes.formControl}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleTask}
        css={css`
          margin: 12px 0;
        `}
      >
        Dodaj Zadanie
      </Button>
      <div>
        {tasks.map((e) => {
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
              <AssignmentTurnedInIcon
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

      <h3>Jakie osiągnęłaś ostatnio sukcesy?</h3>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <TextField
          id="standard-basic"
          label="Wpisz sukces"
          className={classes.formControl}
          value={success}
          onChange={(e) => setSuccess(e.target.value)}
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
        Dodaj Sukces
      </Button>
      <div>
        {successes.map((e) => {
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
              <FavoriteBorderIcon
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

export default FifthStep;

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {
  Button,
  Checkbox,
  createStyles,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { useState } from "react";
import { useHistory } from "react-router-dom";
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

const SixStep = () => {
  const classes = useStyles();

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const [earning, setEarning] = useState("");
  const [checked, setChecked] = useState(false);
  const [wantedEarning, setWantedEarning] = useState("");
  const [hireType, setHireType] = useState("");

  const history = useHistory();

  const handleTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleReport = () => {
    history.push("/report");
  };

  const handleChackbox = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <StepWrapper>
      <StepWelcome />

      <h3>Czy realizujesz zadania wykraczające poza swoje stanowisko?</h3>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <TextField
          id="standard-basic"
          label="Wpisz obowiązek"
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
        Dodaj Obowiązki
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

      <h3>Ile wynosi Twoje miesięczne wynagrodzenie netto?</h3>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <TextField
          id="standard-basic"
          label="Wpisz (PLN)"
          className={classes.formControl}
          value={earning}
          onChange={(e) => setEarning(e.target.value)}
        />
      </div>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChackbox}
              name="checkedB"
              color="primary"
            />
          }
          label="Nie chcę podawać"
        />
      </div>

      <h3>Ile chciałabyś zarabiać (Kwota netto)?</h3>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <TextField
          id="standard-basic"
          label="Wpisz (PLN)"
          className={classes.formControl}
          value={wantedEarning}
          onChange={(e) => setWantedEarning(e.target.value)}
        />
      </div>
      <h3>Jaka jest Twoja forma zatrudnienia?</h3>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel id="experienceCompanies-label">
            Forma zatrudnienia
          </InputLabel>
          <Select
            labelId="experienceCompanies-label"
            id="experienceCompanies"
            name="hireType"
            value={hireType}
            onChange={(e) => setHireType(e.target.value)}
            label="Forma zatrudnienia"
          >
            <MenuItem value={"praca"}>Umowa o pracę </MenuItem>
            <MenuItem value={"zlecenie"}>Umowa Zlecenie</MenuItem>
            <MenuItem value={"dzialo"}>Umowa o dzieło</MenuItem>
            <MenuItem value={"free"}>Freelance</MenuItem>
            <MenuItem value={"b2b"}>B2B</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleReport}
        css={css`
          margin: 12px 0;
        `}
      >
        Wygeneruj raport
      </Button>
    </StepWrapper>
  );
};

export default SixStep;

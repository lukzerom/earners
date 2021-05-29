/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {
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

const SecondStep = () => {
  const [state, setState] = useState({
    experienceYears: "",
    experienceCompanies: "",
    experienceDateFrom: 0,
    checkedB: false,
  });
  const classes = useStyles();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleChackbox = (event) => {
    setState({ ...state, checkedB: event.target.checked });
  };

  return (
    <StepWrapper>
      <StepWelcome />
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel id="experienceYears-label">
            Ile masz lat doświadczenia?
          </InputLabel>
          <Select
            labelId="experienceYears-label"
            id="experienceYears"
            name="experienceYears"
            value={state.experienceYears}
            onChange={handleChange}
            label="Ile masz lat doświadczenia zawodowego? "
          >
            <MenuItem value={"less1"}>Mniej niż 1 rok</MenuItem>
            <MenuItem value={"more1"}>Powyżej roku</MenuItem>
            <MenuItem value={"3-5"}>3 - 5 lat </MenuItem>
            <MenuItem value={"5+"}>Powyżej 5 lat</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel id="experienceCompanies-label">
            W ilu firmach pracowałaś?
          </InputLabel>
          <Select
            labelId="experienceCompanies-label"
            id="experienceCompanies"
            name="experienceCompanies"
            value={state.experienceCompanies}
            onChange={handleChange}
            label="  W ilu firmach pracowałaś?? "
          >
            <MenuItem value={"0"}>0</MenuItem>
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
            <MenuItem value={"3"}>3</MenuItem>
            <MenuItem value={"4+"}>4+</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <TextField
          id="standard-basic"
          label="Wpisz nazwę firmy"
          className={classes.formControl}
        />
      </div>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <TextField
          id="standard-basic"
          label="Od kiedy pracowałaś w 1 firmie?"
          placeholder="DD/MM/YYYY"
          className={classes.formControl}
        />
      </div>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <TextField
          id="standard-basic"
          label="Do kiedy pracowałaś w 1 firmie?"
          placeholder="DD/MM/YYYY"
          className={classes.formControl}
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
              checked={state.checkedB}
              onChange={handleChackbox}
              name="checkedB"
              color="primary"
            />
          }
          label="Nadal tam pracuję"
        />
      </div>
    </StepWrapper>
  );
};

export default SecondStep;

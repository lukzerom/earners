/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Fragment, useState } from "react";
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

const universities = [
  "Uniwersytet Warszawski",
  "Uniwersytet w Białymstoku",
  "Uniwersytet Gdański",
  "Uniwersytet im. Adama Mickiewicza w Poznaniu",
  "Uniwersytet Jagielloński w Krakowie",
  "Uniwersytet Łódzki",
  "Uniwersytet Marii Curie-Skłodowskiej w Lublinie",
  "Uniwersytet Mikołaja Kopernika w Toruniu",
  "Uniwersytet Opolski",
  "Uniwersytet Szczeciński",
  "Uniwersytet Śląski w Katowicach",
  "Uniwersytet Rzeszowski",
  "Uniwersytet Warmińsko-Mazurski w Olsztynie",
  "Uniwersytet Wrocławski",
  "Uniwersytet Kardynała Stefana Wyszyńskiego w Warszawie",
  "Uniwersytet Zielonogórski",
  "Uniwersytet Kazimierza Wielkiego w Bydgoszczy",
  "Uniwersytet Jana Kochanowskiego w Kielcach",
];

const FirstStep = () => {
  const [state, setState] = useState({ education: "", university: "" });
  const classes = useStyles();

  const handleChange = (e) => {
    console.log(state);
    setState({ ...state, [e.target.name]: e.target.value });
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
          <InputLabel id="education-label">
            Podaj swoje wykształcenie
          </InputLabel>
          <Select
            labelId="educationlabel"
            id="education"
            name="education"
            value={state.education}
            onChange={handleChange}
            label="Podaj swoje wykształcenie"
          >
            <MenuItem value={"zawodowe"}>Zawodowe</MenuItem>
            <MenuItem value={"podstawowe"}>Podstawowe</MenuItem>
            <MenuItem value={"licencjat"}>Wyższe licencjat</MenuItem>
            <MenuItem value={"inz"}>Wyższe inżynierskie</MenuItem>
            <MenuItem value={"mgr"}>Wyższe magisterskie</MenuItem>
            <MenuItem value={"mgr inz"}>Magister inżynier</MenuItem>
          </Select>
        </FormControl>
      </div>
      {state.education && (
        <Fragment>
          <div
            css={css`
              margin: 24px 0;
            `}
          >
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel id="university-label">Podaj nazwę uczelni</InputLabel>
              <Select
                labelId="university-label"
                id="university"
                name="university"
                value={state.university}
                onChange={handleChange}
                label="Podaj nazwę uczelni"
              >
                {universities.map((uni) => {
                  return (
                    <MenuItem value={uni.replace(" ", "-")}>{uni}</MenuItem>
                  );
                })}
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
              label="Wpisz kierunek"
              className={classes.formControl}
            />
          </div>
        </Fragment>
      )}
    </StepWrapper>
  );
};

export default FirstStep;

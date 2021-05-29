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
  Select as MuiSelect,
  TextField,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TranslateIcon from "@material-ui/icons/Translate";
import { useState } from "react";
import Select from "react-select";
import { StepWrapper } from "../../../components/animation/helpers";
import { StepWelcome } from "./StepWelcome";

const options = [
  { value: "Adobe-Acrobat", label: "Adobe Acrobat" },
  { value: "Adobe-Creative-Suite", label: "Adobe Creative Suite" },
  { value: "Adobe-Flash", label: "Adobe Flash" },
  { value: "Adobe-Illustrator", label: "Adobe Illustrator" },
  { value: "Adobe-InDesign", label: "Adobe InDesign" },
  { value: "Adobe-Photoshop", label: "Adobe Photoshop" },
  { value: "Dreamweaver", label: "Dreamweaver" },
  { value: "CSS", label: "CSS" },
  { value: "HTML", label: "HTML" },
  { value: "Quark", label: "Quark" },
  { value: "QuarkXpress", label: "QuarkXpress" },
];

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

const colourStyles = {
  control: (styles) => ({ ...styles }),

  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  input: (styles, { data }) => ({
    ...styles,
    "&:focus-visible": {
      borderColor: "#FFB962",
    },
  }),
  menuList: (styles, { data }) => ({
    ...styles,
    backgroundColor: "white",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
};

const ThirdStep = () => {
  const classes = useStyles();

  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");
  const [language, setLanguage] = useState({ language: "", level: "" });
  const [languages, setLanguages] = useState([]);

  const handleCourse = () => {
    setCourses([...courses, course]);
    setCourse("");
  };

  const handleLanguage = (e) => {
    setLanguage({ ...language, [e.target.name]: e.target.value });
  };

  const handleAddLanguage = (e) => {
    setLanguages([...languages, language]);
    setLanguage({ language: "", level: "" });
  };

  return (
    <StepWrapper>
      <StepWelcome />

      <h3>Kursy</h3>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <TextField
          id="standard-basic"
          label="Dodaj nazwę kursu"
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
        Dodaj kurs
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
              <FavoriteIcon
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

      <h3>Języki:</h3>
      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel id="experienceCompanies-label">Podaj Język</InputLabel>
          <MuiSelect
            labelId="experienceCompanies-label"
            id="experienceCompanies"
            name="language"
            value={language.language}
            onChange={handleLanguage}
            label="Podaj Język"
          >
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"Polish"}>Polish</MenuItem>
            <MenuItem value={"German"}>German</MenuItem>
            <MenuItem value={"Spanish"}>Spanish</MenuItem>
            <MenuItem value={"Czech"}>Czech</MenuItem>
          </MuiSelect>
        </FormControl>
      </div>

      <div
        css={css`
          margin: 24px 0;
        `}
      >
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel id="experienceCompanies-label">Podaj Język</InputLabel>
          <MuiSelect
            labelId="experienceCompanies-label"
            id="experienceCompanies"
            name="level"
            value={language.level}
            onChange={handleLanguage}
            label="Podaj poziom"
          >
            <MenuItem value={"basic"}>Podstawowy</MenuItem>
            <MenuItem value={"medium"}>Średniozaawansowany</MenuItem>
            <MenuItem value={"expert"}>Expert</MenuItem>
          </MuiSelect>
        </FormControl>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddLanguage}
        css={css`
          margin: 12px 0;
        `}
      >
        Dodaj język
      </Button>
      {languages.map((lang) => {
        return (
          <div
            css={css`
              display: flex;
              justify-content: flex-start;
              padding: 12px;
              align-items: center;
              background-color: #f5f5f5;
              border-radius: 4px;
              margin: 6px 0;
            `}
          >
            <TranslateIcon
              css={css`
                color: #ffb962;
                margin-right: 8px;
              `}
            />

            {lang.language}
            <div
              css={css`
                width: 3px;
                height: 3px;
                margin: 0 8px;
                border-radius: 50%;
                background-color: #4b4b4b;
              `}
            ></div>
            {lang.level}
          </div>
        );
      })}
      <h3>Narzędzia: </h3>
      <div
        css={css`
          margin: 24px 0;
          min-height: 320px;
        `}
      >
        <Select
          defaultValue={[options[0]]}
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          styles={colourStyles}
        />
      </div>
    </StepWrapper>
  );
};

export default ThirdStep;

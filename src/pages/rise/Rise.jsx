/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button, makeStyles, MobileStepper, useTheme } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { useState } from "react";
import earner from "../../assets/earner.svg";
import working from "../../assets/working.svg";
import {
  ColumnsWrapper,
  FirstColumn,
  SecondColumn,
} from "../../components/animation/helpers";
import FifthStep from "./steps/FifthStep";
import FirstStep from "./steps/FirstStep";
import ForthStep from "./steps/ForthStep";
import SecondStep from "./steps/SecondStep";
import SixStep from "./steps/SixStep";
import ThirdStep from "./steps/ThirdStep";

const useStyles = makeStyles({
  root: {},
});

const Rise = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStep = (key) => {
    switch (key) {
      case 0:
        return <FirstStep />;

      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
      case 3:
        return <ForthStep />;
      case 4:
        return <FifthStep />;
      case 5:
        return <SixStep />;

      default:
        break;
    }
  };

  return (
    <ColumnsWrapper>
      <FirstColumn>
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
        {getStep(activeStep)}
        <MobileStepper
          variant="dots"
          steps={5}
          position="static"
          activeStep={activeStep}
          className={classes.root}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
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

export default Rise;

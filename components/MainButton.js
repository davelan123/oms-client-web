import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {axioPostArticles} from "../store/action";
import { handleNext, handleBack, handleReset } from "../store/steps/action";
import {resetForm } from "../store/contacts/action";


const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  containerButtons: {
    textAlign: "center",
  },
}));
function MainButton() {
  const { step, steps } = useSelector((state) => state.stepVault);
  const request = useSelector((state) => state.contactsVault);
  const dispatch = useDispatch();
  const classes = useStyles();
  const goNextPage = () => {
    if (
      request &&
      request.formData &&
      request.formData.firstName &&
      request.formData.lastName &&
      request.formData.country &&
      request.formData.city &&
      request.formData.phone
    ) {
      return true;
    }
  };
 const clickNextStep = () => {
     dispatch(handleNext());
     if(step === 3){
         dispatch(axioPostArticles());
     }
 };
 const clickPrevStep= () => {
     dispatch(handleBack());
 };

 const clickResetStep = () => {
   dispatch(handleReset());
   dispatch(resetForm());
 };

  return (<div className={classes.containerButtons}>
      {
        step === steps.length ? (<div>
          <Button
            variant="contained"
            color="secondary"
            onClick={clickResetStep}
          >
            Reset All the things
          </Button>
        </div>):(
          <div>
            <Button
              disabled={step === 0}
              onClick={clickPrevStep}
              className={classes.backButton}
            >
              Previous Step
            </Button>
            <Button
              disabled={!goNextPage()}
              variant="contained"
              color={step!==steps.length - 1 ? "primary":"secondary"}
              onClick={clickNextStep}
            >
              {step === steps.length - 1 ? "Confirmed":"Next Step"}
            </Button>
          </div>
        )
      }
    </div>);
}

export default MainButton;

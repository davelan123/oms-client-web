import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import axioPostArticles from "../store/action";

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
  const request = useSelector((state) => state.constactsVault);
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
     if(step ===3){
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

  return <div>

  </div>;
}

export default MainButton;

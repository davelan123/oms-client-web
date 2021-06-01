export const STEP_INCREMENT = "STEP_INCREMENT";
export const STEP_DECREMENT = "STEP_DECREMENT";
export const STEP_RESET = "STEP_RESET";
export const FINAL_POST = "FINAL_POST";

export const handleNext = () => ({
    type: STEP_INCREMENT,
});

export const handleBack = () => ({
  type: STEP_DECREMENT,
});

export const handleReset = () => ({
  type: STEP_RESET,
});
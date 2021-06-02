import { STEP_INCREMENT, STEP_DECREMENT, STEP_RESET } from "./action"

const initialState = {
  step: 0,
  steps: [
    {
      id: 0,
      name: "Basic Information",
      content: "Please fill in the basic information.",
    },
    {
      id: 1,
      name: "Deliery Method",
      content: "Please choose the delivery method.",
    },
    {
      id: 2,
      name: "Payment Method",
      content: "Please choose the payment method.",
    },
    {
      id: 3,
      name: "Summary",
      content: "Please review the information.",
    },
  ],
};

export const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP_INCREMENT:
      return {
        ...state,
        step: state.step + 1,
      };
    case STEP_DECREMENT:
      return {
        ...state,
        step: state.step - 1,
      };
    case STEP_RESET:
      return {
        ...state,
        step: 0,
      };
    default:
      return state;
  }
};

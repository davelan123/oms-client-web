import {CHOICE_PAYMENT} from "./action";

const initialState = {
    paymentMethod: "Visa",
}

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOICE_PAYMENT:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
        return state;
  }

};
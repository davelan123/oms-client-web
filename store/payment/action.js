export const CHOICE_PAYMENT = "CHOICE_PAYMENT";

export const setPaymentMethod = (data) => ({
    type: CHOICE_PAYMENT,
    payload: data
});
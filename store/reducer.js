import { combineReducers } from 'redux';
import { paymentReducer } from './payment/reducer';
import { stepReducer } from "./steps/reducer";
import {contactsReducer} from "./contacts/reducer";
import {deliveryReducer} from "./delivery/reducer";

export default combineReducers({
    stepVault: stepReducer,
    contactsVault: contactsReducer,
    deliveryVault: deliveryReducer,
    paymentVault: paymentReducer,
})
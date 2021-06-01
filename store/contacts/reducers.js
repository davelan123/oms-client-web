import {SET_FIRSTNAME, SET_LASTNAME, SET_COUNTRY, SET_CITY, SET_PHONE, RESET_FORM} from "./action";

const initialState={
    inputs:[
        {
            id: 0,
            label:"First Name",
            value:"",
        },
        {
            id: 1,
            label:"Last Name",
            value:"",
        },
        {
            id: 2,
            label:"Country",
            value:"",
        },
        {
            id: 3,
            label:"City",
            value:"",
        },
        {
            id: 4,
            label:"Phone",
            value:"",
        }
    ]
}

export const contactsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FIRSTNAME:
            return  ({
                ...state,
                formData:{
                    ...state.formData, firstName: action.payload
                }
            })
        case SET_LASTNAME:
            return {
              ...state,
              formData: {
                ...state.formData,
                lastName: action.payload,
              },
            };
        case SET_COUNTRY:
            return {
              ...state,
              formData: {
                ...state.formData,
                country: action.payload,
              },
            };
        case SET_CITY:
            return {
              ...state,
              formData: {
                ...state.formData,
                city: action.payload,
              },
            };
        case SET_PHONE:
            return {
              ...state,
              formData: {
                ...state.formData,
                phone: action.payload,
              },
            };
        case RESET_FORM:
            return {
              ...state,
              formData: {
              },
            };
        default:
            return state;
    }
}
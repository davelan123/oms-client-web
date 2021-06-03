import { ADD_ITEM, REMOVE_ITEM } from "./action";

const initialState = {
  items: [
    {
      id: 0,
      name: "SIM Starter Pack (3 SIMs)",
      price: 10,
      qty: 0,
    },
    {
      id: 1,
      name: "Wireless SIM Card - Single Bulk SIM",
      price: 3,
      qty: 0,
    },
    {
      id: 2,
      name: "Broadband IoT Developer Kit",
      price: 99,
      qty: 0,
    },
  ],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, qty: item.qty > 0 ? item.qty - 1 : 0 }
            : item
        ),
      };
    default:
      return state;
  }
};

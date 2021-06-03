export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const handleAddItem = (data) => ({
  type: ADD_ITEM,
  payload: data,
});

export const handleRemoveItem = (data) => ({
  type: REMOVE_ITEM,
  payload: data,
});
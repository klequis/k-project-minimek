import { fetchData } from "data/mockAPI";
import { DATA_LOGGED } from "./toolConstants";

export function loadUnitData() {
  return (dispatch, getState) => {
    fetchData()
      .then(data => {
        dispatch({
          type: DATA_LOADED,
          payload: data,
        })
      });
  }
}

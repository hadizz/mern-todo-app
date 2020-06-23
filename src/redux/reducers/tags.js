import * as actionTypes from "../actionTypes";
import { initTags } from "../initState";

//                                if using [] replace with 0
let lastTagId = 0;

//                                or []
export default function tags(state = [], action) {
  switch (action.type) {
    case actionTypes.TAG_ADD:
      console.log("TAG_ADD called");

      return [
        ...state,
        {
          id: ++lastTagId,
          name: action.payload.name,
          color: action.payload.color,
        },
      ];

    default:
      return state;
  }
}

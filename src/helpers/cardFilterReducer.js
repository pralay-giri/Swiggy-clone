import { randomizeData } from "./randomizeCard";
export const reducerFun = (state, action) => {
    switch (action.type) {
        case "SORT_BY_RATTING": {
            return [
                ...state.sort((a, b) => b.info.avgRating - a.info.avgRating),
            ];
        }
        case "RANDOMIZE": {
            return [...randomizeData(state)];
        }
        case "DELIVARY_TIME": {
            return [
                ...state.sort(
                    (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
                ),
            ];
        }
        case "DEFAULT": {
            return [...action.data];
        }
        case "RATTING_4++": {
            return [
                ...state.filter(
                    (item) => item.info.avgRating >= action.ratting
                ),
            ];
        }
        case "LOAD_DATA": {
            return [...action.data];
        }
    }
    throw Error("unknown action" + action.type);
};

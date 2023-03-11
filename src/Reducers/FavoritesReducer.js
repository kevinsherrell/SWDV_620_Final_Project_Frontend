export const ACTIONS = {
    CREATE_FAVORITE: "create_favorite",
    UPDATE_FAVORITE: "update_favorite",
    DELETE_FAVORITE: "delete_favorite",
    GET_FAVORITES: "get_favorites"
}

export const favoritesReducer = (state, action) => {
    let favCopy = [...state.favorites];
    switch (action.type) {
        case 'create_favorite':
            return {
                favorites: [...state.favorites, action.payload]
            }
            break;
        case 'update_favorite':
            // const favCopy = [...state.favorites];
            const replaceIndex = favCopy.findIndex((element) => element._id === action.payload._id);
            favCopy.splice(replaceIndex, 1, action.payload);

            return {
                favorites: favCopy
            }
        case 'delete_favorite':
            const removeIndex = favCopy.findIndex((element) => element._id === action.payload._id);
            favCopy.splice(removeIndex, 1);
            return {
                favorites: favCopy
            }


        case 'get_favorites':
            return {
                favorites: action.payload
            }
        default:
            return state;
    }
}
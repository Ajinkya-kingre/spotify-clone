export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after finish developing...
   //token:
    //"BQDILgYEcuiTRRwSWN0jO_WtnNIMrk6bkktiR6xBPbsJfvXZIpgir-aoVTcq8Njhz30o8kwKNBDe4uUPdu1_ziPiUDRkUTNvkALc1m2BkPK9qS1pYxeGStD29W63XYWMLpTMZ5DU71fBXiWFSKUIzRpkqGto4G9i-Il8Tl3kgbdFfN5odVpwA886IUgueBys8x04TgIwpRPYa00hdvw5",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;

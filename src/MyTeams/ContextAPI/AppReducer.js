const AppReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_TEAM":
      return {
        ...state,
        teams: state.teams.filter((team) => team.id !== action.payload),
      };

    case "ADD_TEAM":
      return {
        ...state,
        teams: [action.payload, ...state.teams],
      };

    case "EDIT_TEAM":
      const updateEditedTeam = action.payload;
      const EditedTeamID = state.teams.map((team) => {
        if (team.id === EditedTeamID) {
          return EditedTeamID;
        }
        return team;
      });
      return {
        teams: updateEditedTeam,
      };

    default:
      return state;
  }
};

export default AppReducer;

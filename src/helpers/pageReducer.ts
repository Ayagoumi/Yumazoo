type StateType = {
  page: string;
};

type ActionType = {
  type: string;
  page?: string;
};

export const initialState: StateType = {
  page: 'HOME',
};

const pageReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return { ...state, page: action.page ? action.page : state.page };
    default:
      return state;
  }
};

export default pageReducer;

let defaultState = {
  posts: []
}

const mainReducer = (state = defaultState, action) => {
  if (action.type === "MAKE_UGLY") {
    return {
      ...state,
      posts: [...state.posts, action.info]
    }
  } else if (action.type === "REMOVE") {
    let postCopy = [...state.posts];
    postCopy.splice(action.index, 1);
    return {
      ...state,
      posts: postCopy
    }
  } else if (action.type === "EDIT") {
    let editCopy = [...state.posts];
    editCopy[action.index] = action.post;
    return {
      ...state,
      posts: editCopy
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;

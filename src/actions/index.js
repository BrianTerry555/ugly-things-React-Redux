export function makeUgly(info) {
  return {
    type: "MAKE_UGLY",
    info
  }
}

export function remove(index) {
  return {
    type: "REMOVE",
    index
  }
}

export function edit(post, index) {
  return {
    type: "EDIT",
    post,
    index
  }
}

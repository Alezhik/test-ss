const customUseState = (initState) => {
  let val = initState;

  const state = () => val;

  const customSetState = (newState) => {
    val = newState;
    console.log('val', val);
  }

  return ([state, customSetState])
}

export default customUseState

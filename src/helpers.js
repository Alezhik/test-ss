import React from 'react';
import ReactDOM from 'react-dom';

const addUseSatet = (InputComponent) => {
  let currentProps = null;
  const ref = React.createRef('temp');

  const renderElem = () => {
    const elem = <InputComponent customUseState={customUseState} {...currentProps} />
    ReactDOM.render(elem, ref.current);
  }
  
  const customUseState = (initState) => {
    let val = initState;
  
    const customSetState = (newState) => {
      val = newState;
      renderElem();
    }
  
    return ([val, customSetState])
  }

  return props => {
    currentProps = props
    return <div ref={ref}><InputComponent customUseState={customUseState} {...props} /></div>
  }
}

export default addUseSatet;


import React, { useState, useEffect } from 'react';
import './App.css';
import _ from 'lodash';
import classNames from 'classnames';

const JsonUi = ({ data }) => {
  const [state, setState] = useState("+");

  const clickAll = () => {
    const elements = document.querySelectorAll('input[class="showButton"]');

    elements.forEach(element => {
      const elenentValue = element.getAttribute("value");

      if (elenentValue === state) {
        element.dispatchEvent(
          new MouseEvent("click", {
              view: window,
              bubbles: true,
              cancelable: true,
              buttons: 1
          })
        );
      };
    });

    setState(state === "+" ? "-" : "+");
  }

  const defualtExpandetAll = () => {
    const elements = document.querySelectorAll('input[class="showButton"]');

    let allMinus = true;

    elements.forEach(element => {
      const elenentValue = element.getAttribute("value");
      
      if (elenentValue === '+') {
        allMinus = false;
      }
    });

    setState(allMinus ? "-" : '+');
  }

  return(
    <div className={classNames("baseLevel")}>
      <input
        className={classNames("showAllButton")}
        type="button"
        onClick={() => clickAll()} value={state === "+" ? "Expand all" : "Collapse all"}
      />
      <ReturnObject values={data} title="json" defualtExpandetAll={defualtExpandetAll}/>
    </div>
  );
}

const ReturnText = ({ title, text }) => {
  return (
   <p><b>{title.toString()}</b>{`: ${text && text.toString()}`}</p>
  )
};

const ReturnObjectText = ({ title, values, defualtExpandetAll }) => {
  return(
    <div>
      <ReturnObject title={title} values={values} defualtExpandetAll={defualtExpandetAll} />
    </div>
  )
};

const ReturnObject = ({ title, values, defualtExpandetAll }) => {
  const [state, setState] = useState(false);
  const inputRef = React.useRef(null)
  const data = _.keys(values);

  useEffect(()=> {
    defualtExpandetAll();
  }, [state])

  const handleClick = () => {
    setState(!state);
  }

  const renderData = data.map(item => {
    const defualtProps = {
      key: item,
      title: item,
      defualtExpandetAll
    }
    if (_.isPlainObject(values[item])) {
      return <ReturnObjectText values={values[item]} handleClick={handleClick} {...defualtProps} />;
    }
    return <ReturnText text={values[item]} {...defualtProps} />;
  })

  return(
    <div key={title.toString()} className={classNames("levelContent")}>
      <input
        ref={inputRef}
        className={classNames("showButton")}
        type="button"
        onClick={() => handleClick()} value={state ? "-" : "+"}
      />
      {title.toString()}
      <div className={classNames("level", { "active": state })}>
        {renderData}
      </div>
    </div>
  ) 
}

export default JsonUi;

import React from 'react';
import addUseSatet from './helpers';

const CustomState = (props) => {
    const { customUseState } = props;

    const [state, customSetState] = customUseState({ test: "2 test" });

    return (
        <div>
            TEST CUSTOM STATE - {state.test}
            <input
                type="button"
                onClick={() => customSetState({ test: 10 })}
                value="set 10"
            />
            <input
                type="button"
                onClick={() => customSetState({ test: 'null' })}
                value="set text null"
            />
        </div>
    );
};

export default addUseSatet(CustomState);

import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: 'calc(100vh - 200px)', flex: 1 }}>
            {props.children}
        </div>
    );
}

export default Scroll;
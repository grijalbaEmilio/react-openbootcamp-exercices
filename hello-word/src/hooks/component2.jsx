import React, { useContext, useRef } from "react";
import { context } from "./provider"

export const Component2 = () => {
  const stateContext = useContext(context);
  const { name } = stateContext;

  const myRef = useRef(null);

  const alertInput = () => {
    alert(myRef.current.value);
    myRef.current.value = "chau";
  };
  return (
    <div className="-view">
      parent name = {name}
      <input ref={myRef} type="text" />
      <button type="button" onClick={alertInput}>
        {" "}
        change heigth with hover
      </button>
    </div>
  );
};

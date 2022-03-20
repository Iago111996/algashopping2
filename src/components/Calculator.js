import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { sum, substract } from "../store/calculator/calculator.actions";

function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator);

  return (
    <>
      <input type="text" placeholder="a" value={a} onChange={(e) => setA(+e.target.value)} />
      <input type="text" placeholder="b" value={b} onChange={(e) => setB(+e.target.value)} />

      <div>
        <button
          onClick={() => {
            dispatch(sum(a, b));
            setA(0);
            setB(0);
          }}
        >
          Somar
        </button>
        <button
          onClick={() => {
            dispatch(substract(a, b));
            setA(0);
            setB(0);
          }}
        >
          Subtrair
        </button>
      </div>

      <div>{result}</div>
    </>
  );
}

// function mapStateToProps(state) {
//   return {
//     result: state.calculator,
//   };
// }

// export default connect(mapStateToProps)(Calculator);
export default Calculator;

import React, { useState } from "react";

export default function DemoComponent() {
  const [count, setCount] = useState(100);

  console.log(count);

  const up = () => {
    console.log("hello");
    setCount(count + 1);
  };

  const down = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const [name, setName] = useState("try");

  const function1 = () => {
    setName("rajan");
  };

  const function2 = () => {
    setName("lokendra");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>
        {" "}
        Number is : {count} {}
      </p>

      <div>
        <button type="button" onClick={down}>
          Decrease
        </button>
        <button type="button" onClick={up}>
          Increase
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
      <p>sjkdnd</p>
      <p>7857657</p>
      <hr />

      <h1>my nme is : {name}</h1>

      <button type="button" onClick={function1}>
        rajan
      </button>
      <button type="button" onClick={function2}>
        lokendra
      </button>
    </div>
  );
}

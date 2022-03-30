import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Superhero } from "./Superhero";
import { decrement, increment } from "../src/redux/counter";
import "./styles.css";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Superhero />
    </div>
  );
}

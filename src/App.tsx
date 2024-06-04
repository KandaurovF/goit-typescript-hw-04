import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RequestComponent from "./homework/2";
import { FormComponent } from "./homework/3";
import { ComponentApp } from "./homework/4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <section>
          <p>Homework 2</p>
          <RequestComponent />
        </section>

        <section>
          <p>Homework 3</p>
          <FormComponent />
        </section>

        <section>
          <p>Homework 4</p>
          <ComponentApp />
        </section>
      </main>
    </div>
  );
}

export default App;

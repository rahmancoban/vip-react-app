import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import data from './components/data';
import List from "./components/List";

const App = () => {
    const [people, setPeople] = useState(data)
    return (
        <main>
            <section className="container">
                <h3>{people.length} very important people</h3>
                <List people={people} />
                <button className="btn btn-block" type="button" onClick={() => setPeople([])}>clear all</button>
            </section>
        </main>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)


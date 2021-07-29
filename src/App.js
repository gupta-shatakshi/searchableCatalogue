import { useState } from "react";
import Data from "./Data";
import Display from "./Display";
import "./styles.css";

export default function App(props) {
  const [search, setSearch] = useState("");
  document.title = "Wall Paint Catalogue"
  return (
    <div className="App">
      <h1 className="main-heading">Searchable Catalogue</h1>
      <div className="div-input">
        <input
          className="input-field"
          type="text"
          placeholder="Search by categories of colors..."
          onChange={(event) =>
            setSearch(event.target.value.toLocaleLowerCase())
          }
        />
        <img
          src="http://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png"
          alt="Search"
          className="search"
        />
      </div>
      {Data.filter((val) => {
        if (val.commonName.toLocaleLowerCase().includes(search)) {
          return val;
        }
      }).map((val) => {
        return (
          <>
            <div className="container" key={val.id}>
              <Display
                id={val.id}
                name={val.name}
                codename={val.codeName}
                commonname={val.commonName}
                image={val.image}
              />
            </div>
          </>
        );
      })}
    </div>
  );
}

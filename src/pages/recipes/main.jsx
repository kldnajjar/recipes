import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom";
import { FormControl, Button } from "react-bootstrap";

import { getRecipes } from "../../services/recipes";
import CardWrapper from "../../components/card";

import "./recipes.scss";

const Main = () => {
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    async function loadRecipes() {
      const { results, totalResults } = await getRecipes(limit, offset);

      setResults(results);
      setTotal(totalResults);
    }

    loadRecipes();
  }, []);

  const history = useHistory();

  const recipeHandler = (id) => {
    history.push({
      pathname: "/details",
      search: `?id=${id}`,
    });
  };

  const getMoreRecipes = async () => {
    const offset = results.length;
    const data = await getRecipes(limit, offset);
    const obj = [...results, ...data.results];

    setResults(obj);
  };

  const searchHandler = async () => {
    setOffset(0);
    const { results, totalResults } = await getRecipes(limit, 0, search);

    setResults(results);
    setTotal(totalResults);
  };

  return (
    <>
      <div className="d-flex mb-2">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button variant="outline-success" onClick={searchHandler}>
          Search
        </Button>
      </div>
      <InfiniteScroll
        dataLength={results.length}
        next={getMoreRecipes}
        hasMore={total === results.length ? false : true}
        loader={<h4>Feed me more</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>
              {search
                ? "Nothing to eat ... try another search"
                : "Yay! You have seen it all"}
            </b>
          </p>
        }
      >
        <div className="recipes-container">
          {results.map((recipes) => CardWrapper(recipes, recipeHandler))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Main;

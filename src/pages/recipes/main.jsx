import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom";

import { getRecipes } from "../../services/recipes";
import CardWrapper from "../../components/card";

import "./recipes.scss";

const Main = () => {
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(async () => {
    const { results, totalResults } = await getRecipes(limit, offset);

    setResults(results);
    setTotal(totalResults);
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

  return (
    <InfiniteScroll
      dataLength={results.length} //This is important field to render the next data
      next={getMoreRecipes}
      hasMore={total === results.length ? false : true}
      loader={<h4>Feed me more</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="recipes-container">
        {results.map((recipes) => CardWrapper(recipes, recipeHandler))}
      </div>
    </InfiniteScroll>
  );
};

export default Main;

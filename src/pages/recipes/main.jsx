import React, { useState, useEffect } from "react";
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

  return (
    <div className="recipes-container">
      {results.map((recipes) => CardWrapper(recipes, recipeHandler))}
    </div>
  );
};

export default Main;

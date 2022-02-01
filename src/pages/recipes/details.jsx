import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import queryString from "query-string";
import { getRecipeById } from "../../services/recipes";

const Details = () => {
  const param = queryString.parse(window.location.search);

  const [data, setData] = useState({});

  useEffect(async () => {
    const id = param.id;
    if (!id) return;

    const data = await getRecipeById(id);
    setData(data);
  }, []);

  if (!Object.keys(data).length) return null;

  return (
    <Card>
      <Card.Img variant="top" src={data.image} className="details-image" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>

        <div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
      </Card.Body>
    </Card>
  );
};

export default Details;

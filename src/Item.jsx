import { memo, useEffect } from "react";

const Item = memo(({ name, id, handleDelete }) => {
  useEffect(() => {
    console.log("item");
  });

  return (
    <li>
      {" "}
      {name} <button onClick={() => handleDelete(id)}> X </button>{" "}
    </li>
  );
});

export default Item;

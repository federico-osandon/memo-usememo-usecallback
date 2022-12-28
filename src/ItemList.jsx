import { memo, useEffect } from "react";

import Item from "./Item";

const ItemList = memo(({ productos, handleDelete }) => {
  useEffect(() => {
    console.log("itemList");
  });

  return (
    <div>
      {productos.map(({ id, name }) => (
        <Item key={id} id={id} name={name} handleDelete={handleDelete} />
      ))}
    </div>
  );
});

export default ItemList;

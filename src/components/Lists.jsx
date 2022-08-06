import React, { useState } from "react";
import Form from "./Form";
import MapLists from "./MapLists";

function Lists() {
  const [lists, setLists] = useState([]);

  const addLists = (list) => {
    if (!list.text || /^\s*$/.test(list.text)) {
      return;
    }
    const newList = [list, ...lists];
    setLists(newList);
  };

  const deleteLists = (id) => {
    const deleteArr = [...lists].filter((list) => list.id !== id);
    setLists(deleteArr);
  };

  const updateLists = (listId, newValue) => {
    setLists((prev) =>
      prev.map((item) => (item.id === listId ? newValue : item))
    );
  };

  return (
    <div>
      <Form onSubmit={addLists} />
      <MapLists
        lists={lists}
        deleteLists={deleteLists}
        updateLists={updateLists}
      />
    </div>
  );
}

export default Lists;

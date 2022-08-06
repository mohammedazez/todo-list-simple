import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "./Form";

function MapLists({ lists, deleteLists, updateLists }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateLists(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <div>
      <p className="kasihspacejudul">List todo</p>
      {lists.map((item, index) => (
        <div key={index}>
          <Card className="tengahinkartu" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>ID: {item.id}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  setEdit({
                    id: item.id,
                    value: item.text,
                  })
                }
              >
                Update
              </Button>
              <Button variant="danger" onClick={() => deleteLists(item.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default MapLists;

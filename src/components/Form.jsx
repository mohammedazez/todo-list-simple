import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleForm = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        {props.edit ? (
          <>
            <label>Update your todo</label> <br />
            <input type="text" placeholder="update your todo list"  value={input}
              onChange={handleChange}/>
            <button>update</button>
            <br />
            <br />
          </>
        ) : (
          <>
            <label>Input your todo</label> <br />
            <input
              type="text"
              placeholder="input your todo list"
              value={input}
              onChange={handleChange}
            />
            <button>add</button>
          </>
        )}
      </form>
    </div>
  );
}

export default Form;

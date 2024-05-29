import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/app.actions";
import TodoStyles from "./TodoStyles";
import { CATEGORIES } from "../redux/data";

const TodoItem = ({ item }) => {
  const [checked, setChecked] = useState(item.checked);
  const [updating, setUpdating] = useState(false);
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const dispatch = useDispatch();
  return (
    <div className="row mx-2 align-items-center" style={TodoStyles.item}>
      <div className="col-8" style={{ width: "72.6%" }}>
        {updating ? (
          <div style={{ display: "flex" }}>
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
              className="form-control"
              value={name}
              style={TodoStyles.input.update}
            />
            <select
              type="text"
              onChange={(event) => setCategory(event.target.value)}
              className="form-control"
              value={category}
              style={TodoStyles.input.update}
            >
              {Object.entries(CATEGORIES).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div style={{ alignItems: "center", display: "flex" }}>
            <p
              style={
                checked ? TodoStyles.name.checked : TodoStyles.name.unchecked
              }
              onClick={() => setChecked(!checked)}
            >
              {item.name}
            </p>
            <div style={TodoStyles.category}>
              #{item.category}
            </div>
          </div>
        )}
      </div>
      <div>
        <Button
          type="primary"
          onClick={() => {
            if (updating) {
              setName(item.name);
              setCategory(item.category);
              dispatch(updateTodo({ ...item, name: name, category: category }));
            }
            setUpdating(!updating);
          }}
          className="mr-2"
          style={TodoStyles.button}
        >
          {updating ? "Save" : "Update"}
        </Button>
        <Button
          type="primary"
          onClick={() => dispatch(deleteTodo({ id: item.id }))}
          style={TodoStyles.button}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;

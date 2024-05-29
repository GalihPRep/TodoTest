import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo, filterTodo } from "../redux/app.actions";
import TodoStyles from "./TodoStyles";
import { CATEGORIES } from "../redux/data";

const { Option } = Select;

const TodoInput = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleCreateTodo = () => {
    dispatch(
      createTodo({
        id: parseInt(Math.random() * 2147483648),
        name: name,
        category: category,
        checked: false,
      })
    );
    setName("");
    setCategory("");
  };

  return (
    <>
      <div className="row m-2" style={TodoStyles.menu}>
        <Input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
          className="col-8"
          placeholder="Tambah tugas baru!"
          style={TodoStyles.input.create}
        />
        <Select
          onChange={(value) => setCategory(value)}
          value={category}
          className="col-8"
          style={TodoStyles.input.create}
          placeholder="Select Category"
        >
          {Object.entries(CATEGORIES).map(([key, label]) => (
            <Option key={key} value={key}>
              {label}
            </Option>
          ))}
        </Select>
        <Button
          className="ml-3"
          type="primary"
          onClick={handleCreateTodo}
          size="medium"
        >
          Create
        </Button>
      </div>
    </>
  );
};

export default TodoInput;

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
  const [filterByChecked, setFilterByChecked] = useState(null);
  const [filterCategory, setFilterCategory] = useState("");
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

  const handleFilterTodo = () => {
    dispatch(
      filterTodo({
        checked: filterByChecked,
        category: filterCategory,
      })
    );
  };

  const handleStatusFilterChange = () => {
    const newFilterByChecked = filterByChecked === null ? false : filterByChecked === false ? true : null;
    setFilterByChecked(newFilterByChecked);
    dispatch(
      filterTodo({
        checked: newFilterByChecked,
        category: filterCategory,
      })
    );
  };

  const handleCategoryFilterChange = (value) => {
    setFilterCategory(value);
    dispatch(
      filterTodo({
        checked: filterByChecked,
        category: value,
      })
    );
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
      <div className="row m-2">
        <div className="col-6">
          <div>Status:&nbsp;
            <Button
              type="primary"
              onClick={handleStatusFilterChange}
              size="medium"
            >
              {filterByChecked === null ? 'All' : filterByChecked ? 'Checked' : 'Unchecked'}
            </Button>
          </div>
        </div>
        <div className="col-6">
          <div>Kategori:&nbsp;
            <Select
              onChange={handleCategoryFilterChange}
              value={filterCategory}
              className="col-8"
              style={TodoStyles.input.create}
              placeholder="Select Category"
            >
              <Option value="">Semua</Option>
              {Object.entries(CATEGORIES).map(([key, label]) => (
                <Option key={key} value={key}>
                  {label}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoInput;

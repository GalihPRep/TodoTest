import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Select } from "antd";
import TodoStyles from "./TodoStyles";
import { CATEGORIES } from "../redux/data";
const { Option } = Select;

const TodoList = () => {
  let todos = useSelector((state) => state.app);
  const [filterByChecked, setFilterByChecked] = useState("");
  const [filterByCategory, setFilterByCategory] = useState("");

  const handleCheckedFilterChange = (value) => {
    setFilterByChecked(value);
  };

  const handleCategoryFilterChange = (value) => {
    setFilterByCategory(value);
  };

  console.log(filterByChecked);

  return (
    <div>
      <div className="row m-2">
        <div className="col-6">
          <div>
            Status:&nbsp;
            <Select
              onChange={handleCheckedFilterChange}
              value={filterByChecked}
              className="col-8"
              style={TodoStyles.input.create}
              placeholder="Select Status"
            >
              <Option value="">Semua</Option>
              <Option value={false}>Pending</Option>
              <Option value={true}>Selesai</Option>
            </Select>
          </div>
        </div>
        <div className="col-6">
          <div>
            Kategori:&nbsp;
            <Select
              onChange={handleCategoryFilterChange}
              value={filterByCategory}
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
      <div classname="my-3">
        {todos
          .filter((n) => {
            const matchesChecked =
              filterByChecked === "" ? true : n.checked === filterByChecked;
            const matchesCategory =
              filterByCategory === ""
                ? true
                : n.category.toLowerCase() === filterByCategory;
            return matchesChecked && matchesCategory;
          })
          .map((n) => (
            <TodoItem key={n.id} item={n} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;

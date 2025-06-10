/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-04 16:11:46
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-05 17:39:34
 * @FilePath: /my-app/src/view/practice/crud.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useReducer, useState, useContext } from "react";
// 使用上下文
import { LevelContext } from './levelContext.js';

function tasksRuducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.id) {
          return {
            ...t,
            done: action.done,
          };
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export default function Crud() {
  const [tasks, dispatch] = useReducer(tasksRuducer, initialTasks);
  const [value, setValue] = useState("");

  const level = useContext(LevelContext);
  console.log(level, "level");

  const changeIptVal = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    console.log(value, "value")
    if (!value) {
        alert("请输入内容");
      return;
    }
    dispatch({
      type: "added",
      id: tasks.length,
      text: value,
    });
    setValue("");
  };
  return (
    <div>
      <h3>布拉德的日常</h3>
      <div>
        <input type="text" value={value} onChange={changeIptVal} />
        <button onClick={handleAdd}>添加行程</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li style={{ textAlign: "left" }} key={task.id}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

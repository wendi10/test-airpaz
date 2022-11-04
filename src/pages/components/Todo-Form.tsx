import { FC, useState } from "react";

import { ITask } from "../Todo.model";

import "./Todo-Form.css";

interface Props {
  addTask(task: ITask): void;
}

export const ToDoForm: FC<Props> = ({ addTask }: Props) => {
  const [task, setTask] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>, task: ITask): void => {
    e.preventDefault();

    if (!task.task) {
      return;
    }

    setTask("");
    addTask(task);
  };

  return (
    <form onSubmit={(e) => onSubmit(e, { task, isComplete: false })}>
      <div className="formCard">
        <input
          value={task}
          type="text"
          id="txtTodo"
          placeholder="Task Name"
          onChange={(e) => {
            e.preventDefault();
            setTask(e.target.value);
          }}
        ></input>
        <input type="submit"></input>
      </div>
    </form>
  );
};

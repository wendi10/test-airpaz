import { FC, useState } from "react";

import { ITask } from "../Todo.model";

import "./Todo-List.css";

interface Props {
  data: ITask;
  deleteTask(taskNameToDelete: string): void;
  completeTask(task: ITask): void;
  upTask(taskName: string): void;
  downTask(taskName: string): void;
}

export const ToDoList: FC<Props> = ({
  data,
  deleteTask,
  completeTask,
  upTask,
  downTask,
}: Props) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={data.isComplete}
        onChange={(e) => {
          completeTask(data);
        }}
      ></input>
      <span
        className="description"
        style={{ textDecoration: data.isComplete ? "line-through" : "none" }}
      >
        {data.task}
      </span>
      <button onClick={() => upTask(data.task)} className="changePosition">
        Up
      </button>
      <button onClick={() => downTask(data.task)} className="changePosition">
        Down
      </button>
      <button onClick={() => deleteTask(data.task)} className="btn-delete">
        x
      </button>
    </div>
  );
};

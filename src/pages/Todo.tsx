import { FC, useState } from "react";

//component
import { ToDoForm } from "./components/Todo-Form";

//interface
import { ITask } from "./Todo.model";

//css
import "./Todo.css";
import { ToDoList } from "./components/Todo-List";

export const ToDo: FC = () => {
  const [todoCount, setTodoCount] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const addTask = (data: ITask): void => {
    setTodoList([...todoList, data]);
    setTodoCount(todoCount + 1);
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoCount(todoCount - 1);
    setTodoList(
      todoList.filter((data) => {
        return data.task !== taskNameToDelete;
      })
    );
  };

  const completeTask = (task: ITask): void => {
    const updatedTodoList = todoList.map((element: ITask) => {
      return element.task === task.task
        ? { ...element, isComplete: !element.isComplete }
        : element;
    });

    setTodoList(updatedTodoList);
  };

  const upTask = (taskName: string): void => {
    const fromIndex = todoList.findIndex((obj: ITask) => {
      return obj.task === taskName;
    });
    const toIndex = fromIndex - 1;
    const toDo = todoList;

    toDo.splice(toIndex, 0, toDo.splice(fromIndex, 1)[0]);
    setTodoList([...toDo]);
  };

  const downTask = (taskName: string): void => {
    const fromIndex = todoList.findIndex((obj: ITask) => {
      return obj.task === taskName;
    });
    const toIndex = fromIndex + 1;
    const toDo = todoList;

    toDo.splice(toIndex, 0, toDo.splice(fromIndex, 1)[0]);
    setTodoList([...toDo]);
  };

  return (
    <>
      <h1 className="title">To-Do List</h1>
      <p>To Do Count : {todoCount}</p>

      <ToDoForm addTask={addTask}></ToDoForm>

      <div>
        {todoList.map((task: ITask, key: number) => {
          return (
            <ToDoList
              completeTask={completeTask}
              deleteTask={deleteTask}
              upTask={upTask}
              downTask={downTask}
              data={task}
              key={key}
            ></ToDoList>
          );
        })}
      </div>
    </>
  );
};

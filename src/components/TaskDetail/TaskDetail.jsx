import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { basePath } from "../BasePath/BasePath";
import { Link } from "react-router-dom";

export const TaskDetail = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const foundTask = tasks.find((task) => task.id === taskId);
  const [task, setTask] = useState(foundTask);
  if (!foundTask) {
    navigate({ basePath });
    return null;
  }

  if (!task) return <Link to={basePath}> Нечего возвращать, назад</Link>;

  return (
    <div>
      <h2>Подробности задачи</h2>
      <p>
        <strong>Задача:</strong> {task.title}
      </p>
      <p>
        <strong>Статус:</strong>{" "}
        {task.isCompleted ? "Завершена" : "Не завершена"}
      </p>
      <Link to={basePath}>назад</Link>
    </div>
  );
};

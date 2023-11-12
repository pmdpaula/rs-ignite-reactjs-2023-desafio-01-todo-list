import { Trash } from '@phosphor-icons/react';
import { Select } from '../Select';

import { TodoType } from './Todos';

import styles from './TodoCard.module.css';

interface TodoCardProps {
  todo: TodoType;
  changeTodoStatus: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoCard = ({ todo, changeTodoStatus, removeTodo }: TodoCardProps) => {
  return (
    <div className={styles.wrapper}>
      <Select
        selected={todo.done}
        onClick={() => changeTodoStatus(todo.id)}
      />
      <p className={todo.done === true ? styles.textDone : ''}>{todo.title}</p>

      <Trash
        size={24}
        onClick={() => removeTodo(todo.id)}
      />
    </div>
  );
};

import { TodoCard } from './TodoCard';
import { TodoHeader } from './TodosHeader';

import { ChangeEvent, FormEvent, useState } from 'react';

import clipboardImg from '../../assets/clipboard.svg';

import styles from './Todos.module.css';
import { PlusCircle } from '@phosphor-icons/react';

export type TodoType = {
  id: number;
  title: string;
  done: boolean;
};

export const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');

  function handleAddTodo(event: FormEvent) {
    event.preventDefault();

    const newTodo: TodoType = {
      id: Number((Math.random() * 1000000).toFixed(0)),
      title: newTodoTitle,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
  }

  function handleTodoTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodoTitle(event.target.value);
  }

  function handleRemoveTodo(id: number) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }

  function handleChangeTodoStatus(id: number) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div>
      <form
        onSubmit={handleAddTodo}
        className={styles.form}
      >
        <input
          type="text"
          name="title"
          placeholder="Adicione uma nova tarefa"
          value={newTodoTitle}
          onChange={handleTodoTitleChange}
        />
        <button
          type="submit"
          disabled={newTodoTitle.length === 0}
        >
          Criar <PlusCircle />{' '}
        </button>
      </form>

      <TodoHeader todos={todos} />
      <section className={todos.length > 0 ? styles.todoList : styles.todoEmpty}>
        {todos.length === 0 ? (
          <>
            <img
              className={styles.clipboardImage}
              src={clipboardImg}
              alt="Ícone de um clipboard"
            />

            <div className={styles.messageBox}>
              <strong>Você ainda não tem tarefas cadastradas.</strong>

              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </>
        ) : (
          todos.map((todo) => (
            <TodoCard
              todo={todo}
              key={todo.id}
              changeTodoStatus={handleChangeTodoStatus}
              removeTodo={handleRemoveTodo}
            />
          ))
        )}
      </section>
    </div>
  );
};

import { Chip } from './Chip';
import { TodoType } from './Todos';
import styles from './TodosHeader.module.css';

interface TodoHeaderProps {
  todos: TodoType[];
}

export const TodoHeader = ({ todos }: TodoHeaderProps) => {
  const totalTodos = todos.length;
  const totalDoneTodos = todos.filter((todo) => todo.done).length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.display}>
        <p className={styles.created}>Tarefas Criadas</p>
        <Chip>{totalTodos}</Chip>
      </div>

      <div className={styles.display}>
        <p className={styles.concluded}>Concluídas</p>
        <Chip>{totalDoneTodos}</Chip>
      </div>
    </div>
  );
};

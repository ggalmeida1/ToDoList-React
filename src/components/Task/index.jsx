import styles from './task.module.css';
import { Trash, CheckCircle } from 'phosphor-react';

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <CheckCircle /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  )
}
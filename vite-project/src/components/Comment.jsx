import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/BorgesAbraao10.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="25 de Janeiro às 12:03" dateTime="2024-01-25 12:03">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon 💻, parabens!! 👏👏👏👏</p>
        </div>
        <footer>
          <button>
            Aplaudir
            <ThumbsUp />
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

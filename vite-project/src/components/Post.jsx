import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/BorgesAbraao10.png" />
          <div className={styles.authorInfo}>
            <strong>Abraão Borges</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23 de Janeiro as 11:35h" dateTime="2024-01-23 11:35:10">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/BorgesAbraao10.png"
          />
          <div className={styles.authorInfo}>
            <strong>Abraão Borges</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23 de Janeiro as 11:35h" dateTime="2024-01-23 11:35:10">
          Publicado há 1h
        </time>

        <div className={styles.content}>
          <p>Fala galera! 👋👋👋👋👋👋 </p>
          <p>
            Acabei de subir mais um projeto no meu portfolio. Embarque nessa
            jornada 🚀.
          </p>
          <p>
            👉 <a href="">BorgesAbraao10/ReadMe.md</a>
          </p>
          <p>
            {" "}
            <a href="">#novoprojeto #redesocial #rocketseat</a>
          </p>
        </div>
      </header>
    </article>
  );
}

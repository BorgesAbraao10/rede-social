import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className={styles.profile}>
        <strong>Abraão Borges</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">Editar perfil</a>
      </footer>
    </aside>
  );
}

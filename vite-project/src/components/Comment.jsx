import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.Comment}>
      <img src="https://github.com/BorgesAbraao10.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='25 de Janeiro às 12:03' dateTime= '2024-01-25 12:03'></time>
            </div>
            <button title='Deletar comentário'>
              icone lixeira
            </button>
          </header>
          <p>Muito bom Devon 💻, parabens!! 👏👏👏👏</p>
        </div>
        <footer>
          <button>
            icone aplaudir
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
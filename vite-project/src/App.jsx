import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Abraão Borges",
      role: "Web Developer",
    },

    content: [
      { type: "paragraph", content: "Fala galera! 👋👋👋👋👋👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfolio. Embarque nessa jornada 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-01-30 10:00:23"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "CTO @Rocketseat",
    },

    content: [
      { type: "paragraph", content: "Fala galera! 👋👋👋👋👋👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfolio. Embarque nessa jornada 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-02-01 20:00:00"),
  },
];

// iteração

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

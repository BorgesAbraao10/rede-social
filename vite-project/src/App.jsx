import { Post } from "./Post";
import { Header } from "./components/Header";

import "./styles.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Abraão Borges"
        content="Olá! Sou um entusiasta da tecnologia em transição de carreira, apaixonado por programação e pela arte de transformar problemas complexos em soluções criativas. Cada linha de código que escrevo é um passo em direção a um futuro onde a inovação e a resolução de desafios andam de mãos dadas. Estou ansioso para aplicar meu conhecimento e criar um impacto positivo por meio da tecnologia.👨‍💻"
      />

      <Post
        author="Ana Borges"
        content="Code como se o mundo estivesse observando, mas crie como se ninguém estivesse julgando."
      />

      <Post
        author="Abraão Borges"
        content="Olá! Sou um entusiasta da tecnologia em transição de carreira, apaixonado por programação e pela arte de transformar problemas complexos em soluções criativas. Cada linha de código que escrevo é um passo em direção a um futuro onde a inovação e a resolução de desafios andam de mãos dadas. Estou ansioso para aplicar meu conhecimento e criar um impacto positivo por meio da tecnologia.👨‍💻"
      />
    </div>
  );
}

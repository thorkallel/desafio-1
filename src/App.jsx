import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  const personalInfo = {
    name: "JULIÁN ANDRÉS GIRALDO IZQUIERDO",
    age: "44 años",
    profession: "Diseñador Gráfico",
    nationality: "Colombiano",
    email: "jgiraldoizquierdo@yahoo.com",
    instagram: "https://www.instagram.com/julianandresgiraldoizquierdo/?hl=es",
    interests: [
      "Desarrollo Web",
      "Diseño Gráfico",
      "Diseño Web",
      "Diseño de Interfaces",
      "Diseño de Productos",
      "Futbol",
      "Programación",
      "Música",
      "Cine",
      "Televisión",
      "Lectura",
      "Viajes",
    ],
  };
  return (
    <>
      <Header />
      <Main personalInfo={personalInfo} />
      <Footer />
    </>
  );
}

export default App;

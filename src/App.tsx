import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="bg-light min-vh-100">
      <Header titulo="Portal ADS - PUC Goiás" professor="Alexandre Almeida" />
      <Main />
    </div>
  );
}

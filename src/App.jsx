import { Header, Hero, Showcase, Sells, Blog, Footer } from "./sections";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Sells />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;

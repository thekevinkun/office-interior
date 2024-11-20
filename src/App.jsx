import { Header, Hero, Ideas, Sells, Blog, Footer } from "./sections";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Ideas />
        {/* <Sells />
        <Blog /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

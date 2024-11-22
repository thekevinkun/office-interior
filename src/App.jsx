import { Header, Hero, Ideas, Crafts, Blog, Footer } from "./sections";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Ideas />
        <Crafts />
        <Blog />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

import Header from "./components/structureApp/Header";
import Nav from "./components/structureApp/Nav";
import Section from "./components/structureApp/Section";
function App() {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col text-white">
      <Header />
      <main className="flex grow relative">
          <Nav />
          <Section />
      </main>
    </div>
  )
}

export default App

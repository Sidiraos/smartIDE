import Header from "./components/structureApp/Header";
import Nav from "./components/structureApp/Nav";
import Section from "./components/structureApp/Section";
import { useState } from "react";
import {useSelector} from "react-redux"
function App() {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col text-white">
      <Header />
      <main className="flex grow">
          <Nav />
          <Section />
      </main>
    </div>
  )
}

export default App

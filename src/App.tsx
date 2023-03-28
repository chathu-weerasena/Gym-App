import Navbar from "@/scenes/navbar";
import { useState } from "react";

import viteLogo from "/vite.svg";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="app bg-gray-20 ">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;

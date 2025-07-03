import { useState } from "react";

function App() {
  const [color, setColor] = useState("brown")
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap px-2 justify-center bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center px-3 py-2 rounded-xl bg-white shadow-lg gap-3">
            <button onClick={() => setColor("red")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>

            <button onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>

            <button onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>

            <button onClick={() => setColor("chocolate")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "chocolate"}}
            >Chocolate</button>

            <button onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "yellow"}}
            >Yellow</button>

            <button onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "gray"}}
            >Gray</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

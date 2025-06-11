import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-200 sm:m-8 md:m-10 lg:m-20 p-2 xs:p-4 sm:p-4 md:p-4 lg:p-8 xl:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <div>
            <Profile />
          </div>
          <div className="col-span-2">
            <About />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

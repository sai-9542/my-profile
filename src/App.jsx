import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import About from "./components/About";
import { BrowserRouter } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="bg-gray-200 sm:m-8 md:m-10 lg:m-20 p-2 xs:p-4 sm:p-4 md:p-4 lg:p-8 xl:p-8">
          <div className="grid md:grid-cols-3 gap-4">
  <div className="md:sticky md:top-10 h-fit">
    <Profile />
  </div>
  <div className="md:col-span-2">
    <About />
  </div>
</div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

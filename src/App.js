import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className=" d-flex justify-content-between">
      <Sidebar />
      <div className=" w-100">
        <Navbar />
      </div>
    </div>
  );
}

export default App;

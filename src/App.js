import { Body } from "./components/body";
import { Navbar } from "./components/navbar";
import { NavigationAddress } from "./components/navigationAddress";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className=" d-flex justify-content-between">
      <Sidebar />
      <div className=" w-100">
        <Navbar />

        <Body/>
      </div>
    </div>
  );
}

export default App;

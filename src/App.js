import "./App.css";
import { Table } from "./components/Table";


function App() {
  return (
    <div className="flex flex-col w-[880px] mx-auto mt-10 gap-10">
      <h1 className="mx-auto font-mono text-2xl">India's Covid-19 Data Statewise</h1>
      <Table/>
    </div>
  );
}

export default App;

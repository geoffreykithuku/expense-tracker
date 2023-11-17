import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Overview from "./components/Overview";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionsList";

function App() {
  return (
    <div className="max-w-[650px] mx-auto px-2">
      <Header />
      <Overview />
      <Routes>
        <Route path="/" element={<TransactionsList />} />
       
        <Route path="/transactions/new" element={<TransactionForm />} />

        </Routes>
    </div>
  );
}

export default App;

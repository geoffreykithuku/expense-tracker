import Header from "./components/Header";
import Overview from "./components/Overview";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionsList";

function App() {
  return (
    <div className="max-w-[650px] mx-auto px-2">
      <Header />
      <Overview />
      <TransactionForm />
    </div>
  );
}

export default App;

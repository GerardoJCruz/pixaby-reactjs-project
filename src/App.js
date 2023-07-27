import MyForm from "./components/MyForm";
import Title from "./components/Title";

function App() {
  return (
    <div className="App mt-5">
      <Title 
        text="Pixabay Image search."
      />
      <MyForm/>
    </div>
  );
}

export default App;

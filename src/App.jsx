import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import { AppRoutes } from "./routes";


function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
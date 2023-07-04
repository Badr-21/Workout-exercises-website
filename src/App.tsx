import AnimatedRoutes from "./AnimatedRoutes/AnimatedRoutes";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <Header />
         <AnimatedRoutes />
      </BrowserRouter>
   );
}

export default App;

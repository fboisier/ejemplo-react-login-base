
import { UsuarioProvider } from "./context/UsuarioContext";
import { AppRouter } from "./routes/AppRouter";

const App = () => {
  return (

    <UsuarioProvider>
      
        <AppRouter />

    </UsuarioProvider>
  );
}

export default App;

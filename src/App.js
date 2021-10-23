import { Container } from "react-bootstrap";
import { UsuarioProvider } from "./context/UsuarioContext";
import { AppRouter } from "./routes/AppRouter";

const App = () => {
  return (

    <UsuarioProvider>
      <Container>
        <AppRouter />
      </Container>
    </UsuarioProvider>
  );
}

export default App;

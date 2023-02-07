import Router from "./Routes/Router";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
      <Router />
      </AuthProvider>
      <Toaster
        toastOptions={{
          duration: 3000,
          position: 'bottom-center'
        }}
      />
    </BrowserRouter>
  )
}

export default App;

import { CssBaseline } from "@mui/material";
import ThemeProvider from "./theme/ThemeProvider";
import AuthLoading from "./views/AuthLoading/AuthLoading";

function App() {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ThemeProvider>
      <CssBaseline />
      <AuthLoading />
    </ThemeProvider>
  );
}

export default App;

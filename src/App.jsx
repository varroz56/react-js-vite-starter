import { Route, Routes, useLocation } from "react-router";
import NavBar from "./components/navbar/NavBar";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";

// https://reactrouter.com/en/main
// used the following instead of the react router docs to test outlet
// https://testing-library.com/docs/example-react-router/

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <LocationDisplay />
    </>
  );
};

export default App;

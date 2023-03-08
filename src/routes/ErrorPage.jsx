import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h2>Sorry, an unexpected error has occurred.</h2>

      <Link to={"/"}>Back to Homepage</Link>
    </div>
  );
}

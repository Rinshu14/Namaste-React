import { useRouteError } from "react-router-dom";

export default ErrorPage = () => {
  const err = useRouteError();

  return (
    <div className="errPage">
      <h1>Opps! Something went wrong </h1>
      <h2>{err?.statusText}</h2>
      <p>{err?.data}</p>
    </div>
  );
};

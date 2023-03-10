import "../styles/ErrorPage.scss";

import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="error-text" title="404">
        404
      </div>
    </div>
  );
};

export default ErrorPage;

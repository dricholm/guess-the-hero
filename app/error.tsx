'use client';

interface Props {
  error: Error;
  reset: VoidFunction;
}

const ErrorPage: React.FC<Props> = ({ error, reset }) => (
  <div className="container">
    <h1>Error</h1>
    <p>{error.message}</p>
    <button className="btn" onClick={reset}>
      Try again
    </button>
  </div>
);

export default ErrorPage;

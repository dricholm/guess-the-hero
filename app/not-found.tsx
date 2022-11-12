import Link from 'next/link';

const NotFound: React.FC = () => (
  <div className="container">
    <h1>Not found</h1>
    <Link href="/">To home page</Link>
  </div>
);

export default NotFound;

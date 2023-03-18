import clsx from 'clsx';
import Loader from 'src/components/atoms/Loader/Loader';
import styles from './Loading.module.scss';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message }) => (
  <div className={clsx('container', styles.container)}>
    <Loader />
    {message}
  </div>
);

export default Loading;

import clsx from 'clsx';
import Loader from 'src/components/atoms/Loader';
import styles from './Loading.module.scss';

interface Props {
  message?: string;
}

const Loading: React.FC<Props> = ({ message }) => (
  <div className={clsx('container', styles.container)}>
    <Loader />
    {message}
  </div>
);

export default Loading;

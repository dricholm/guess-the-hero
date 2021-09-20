import { FC } from 'react';
import Link from 'next/link';
import Card from 'src/components/atoms/Card';
import styles from './About.module.scss';
import classNames from 'classnames';

const About: FC = () => (
  <div className={classNames('container', styles.container)}>
    <Card title="About">
      <h3>What is this site?</h3>
      <p>
        This website was created for entertainment purposes. It uses the{' '}
        <Link href="https://docs.opendota.com/">
          <a rel="noreferrer" target="_blank">
            OpenDota API
          </a>
        </Link>{' '}
        for querying match data.
      </p>

      <h3>Does the site collect any information from me?</h3>
      <p>No.</p>

      <h3>Can I contribute to the project?</h3>
      <p>
        Yes. The project is open source, so if you have any improvement idea or
        found a bug, you can create an issue on{' '}
        <Link href="https://github.com/dricholm/guess-the-hero">
          <a rel="noreferrer" target="_blank">
            GitHub
          </a>
        </Link>
        .
      </p>
    </Card>
  </div>
);

export default About;

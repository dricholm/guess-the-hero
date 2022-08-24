import { FC } from 'react';
import Card from 'src/components/atoms/Card';
import styles from './About.module.scss';
import clsx from 'clsx';

const About: FC = () => (
  <div className={clsx('container', styles.container)}>
    <Card title="About">
      <h3>What is this site?</h3>
      <p>
        This website was created for entertainment purposes. It uses the{' '}
        <a
          href="https://docs.opendota.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          OpenDota API
        </a>{' '}
        for querying match data.
      </p>

      <h3>Does the site collect any information from me?</h3>
      <p>No.</p>

      <h3>Can I contribute to the project?</h3>
      <p>
        Yes. The project is open source, so if you have any improvement idea or
        found a bug, you can create an issue on{' '}
        <a
          href="https://github.com/dricholm/guess-the-hero"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
    </Card>
  </div>
);

export default About;

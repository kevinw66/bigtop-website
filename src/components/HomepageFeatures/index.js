import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Packaging',
    Svg: require('@site/static/img/package.svg').default,
    description: (
      <>
        Bigtop packages Hadoop RPMs and DEBs, so that you can manage and maintain your Hadoop cluster.
      </>
    ),
  },
  {
    title: 'Smoke testing',
    Svg: require('@site/static/img/testing.svg').default,
    description: (
      <>
        Bigtop provides an integrated smoke testing framework, alongside a suite of over 50 test files.
      </>
    ),
  },
  {
    title: 'Virtualization',
    Svg: require('@site/static/img/truck.svg').default,
    description: (
      <>
        Bigtop provides vagrant recipes, raw images, and docker recipes for deploying Hadoop from zero.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

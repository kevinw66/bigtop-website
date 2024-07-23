import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '@site/src/pages/index.module.css';
import Confetti from '@site/src/components/Confetti';
import Overview from './Overview';
import SupportedProjects from './SupportedProjects';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Confetti />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">打包和测试 Apache Hadoop 生态系统。</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/quickstart-guide">
            开始教程
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Overview />
        <SupportedProjects />
      </main>
    </Layout>
  );
}

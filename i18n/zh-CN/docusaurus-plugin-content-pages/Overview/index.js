import React from 'react';
import clsx from 'clsx';
import styles from '@site/src/components/Overview/styles.module.css';

const FeatureList = [
  {
    title: '打包',
    Svg: require('@site/static/img/box-seam.svg').default,
    description: (
      <>
        Bigtop 支持打包为 Hadoop RPM 和 DEB，以方便您管理和维护 Hadoop 集群。
      </>
    ),
  },
  {
    title: '冒烟测试',
    Svg: require('@site/static/img/gear.svg').default,
    description: (
      <>
        Bigtop 提供了一个集成的冒烟测试框架，以及一套超过50个测试文件的测试方案。
      </>
    ),
  },
  {
    title: '虚拟化',
    Svg: require('@site/static/img/truck.svg').default,
    description: (
      <>
        Bigtop 提供 vagrant recipes、原始图像和 docker recipes 方式进行从零开始部署 Hadoop。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.title}>概述</h2>
        <p className={styles.description}>
          Apache Bigtop是一个由Apache软件基金会支持的项目，旨在为基础设施工程师和数据科学家提供一个全面的开源大数据解决方案。
          它关注于打包、测试和配置领先的开源大数据组件，以确保可靠性和一致性。
          Bigtop的目标是成为一个可扩展的平台，支持广泛的组件和项目，包括但不限于Hadoop、HBase和Spark。
        </p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

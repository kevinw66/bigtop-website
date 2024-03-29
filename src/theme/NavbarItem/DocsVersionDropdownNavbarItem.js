/**
 * this customized componet is used to make DocsVersionDropdownNavbarItem compoent 
 * visible only when it's docsPluginId matches current doc-instance.
 * the discuss about this behavior is here:
 * https://github.com/facebook/docusaurus/issues/4389
 */

import React from 'react';
import useRouteContext from '@docusaurus/useRouteContext';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const {plugin} = useRouteContext();
  if (plugin.id !== props.docsPluginId) {
    return null;
  }

  return <DocsVersionDropdownNavbarItem {...props} />;
}
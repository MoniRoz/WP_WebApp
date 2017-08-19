import React from 'react';
import ArticleListContainer from './ArticleListContainer';
import SideBar from '../components/SideBar';

export default function PageContainer() {
  return (
    <div>
      <SideBar/>
      <ArticleListContainer/>
    </div>
  );
}

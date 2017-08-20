import React from 'react';
import ArticleListContainer from './ArticleListContainer';
import NewsContainer from './NewsContainer';
import TechContainer from './TechContainer';
import StarsContainer from './StarsContainer';

export default function PageContainer() {
  return (
    <div>
      <NewsContainer/>
      <TechContainer/>
      <StarsContainer/>
    </div>
  );
}

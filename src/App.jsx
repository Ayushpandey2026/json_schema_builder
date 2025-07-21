import React from 'react';
import { Layout, Typography } from 'antd';

import SchemaBuilder from './components/SchemaBuilder';

const { Header, Content } = Layout;


// Root application layout with a header and content area.

 // Embeds the SchemaBuilder tool.
 
const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', display: 'flex', alignItems: 'center' }}>
        <Typography.Title level={3} style={{ color: '#ffffff', margin: 0 }}>
          JSON Schema Builder
        </Typography.Title>
      </Header>

      <Content style={{ padding: '2rem' }}>
        {/* Main form builder component */}
        <SchemaBuilder />
       </Content>
    </Layout>
  );
};

export default App;

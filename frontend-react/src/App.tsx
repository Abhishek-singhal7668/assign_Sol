import React from 'react';
import { Layout } from 'antd';
import InterviewList from './component/InterviewList';

const { Content } = Layout;

const App: React.FC = () => {
    return (
        <Layout>
            <Content style={{ padding: '50px' }}>
                <InterviewList title="Today" endpoint="today" />
                <InterviewList title="Tomorrow" endpoint="tomorrow" />
                <InterviewList title="Other Days" endpoint="other" />
            </Content>
        </Layout>
    );
};

export default App;

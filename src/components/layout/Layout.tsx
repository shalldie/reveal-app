import {Layout} from 'antd';
import React from 'react';
import {SideMenu} from './SideMenu';
import {TopMenu} from './TopMenu';

const {Header, Sider} = Layout;

export const AppLayout = (props: React.PropsWithChildren<{}>) => (
    <Layout className="layout">
        <Header>
            <div className="logo"></div>
            <TopMenu />
        </Header>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <SideMenu />
            </Sider>
            <Layout className="content-layout">{props.children}</Layout>
        </Layout>
    </Layout>
);

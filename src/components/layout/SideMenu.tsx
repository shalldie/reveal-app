import {Menu} from 'antd';
import {LaptopOutlined, DashboardOutlined} from '@ant-design/icons';
import {Link, withRouter} from 'react-router-dom';

const {SubMenu} = Menu;

export const SideMenu = withRouter(props => (
    <Menu
        mode="inline"
        defaultSelectedKeys={[props.location.pathname]}
        defaultOpenKeys={['sub2']}
        style={{height: '100%', borderRight: 0}}
    >
        <Menu.Item icon={<DashboardOutlined />} key="/dashboard">
            <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="/option5">
                <Link to="/option5">option5</Link>
            </Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
    </Menu>
));

import {Menu} from 'antd';
import {LaptopOutlined, DashboardOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {Link, useLocation} from 'react-router-dom';
import {ETodoType} from '~/common/enums';

const {SubMenu} = Menu;

export const SideMenu = () => {
    const location = useLocation();

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={['sub2']}
            style={{height: '100%', borderRight: 0}}
        >
            <Menu.Item icon={<DashboardOutlined />} key="/dashboard">
                <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item icon={<UnorderedListOutlined />} key="/todo">
                <Link to={`/todo/${ETodoType.ALL}`}>Todo</Link>
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
    );
};

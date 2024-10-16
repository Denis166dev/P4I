import {
  HomeOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Outlet, NavLink } from "react-router-dom";
import './css/home.css';

const { Sider } = Layout;

const App = () => {

  return (
    <Layout>
      <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1000,
      }} collapsible >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ background: '#085C16', height: '100%' }}
        >

          <Menu.Item key="1" icon={<HomeOutlined />} className="custom-menu-item">
            <NavLink to="/projeto">Seu Projeto</NavLink>
          </Menu.Item>


          <Menu.Item key="2" icon={<FolderOpenOutlined />} className="custom-menu-item">
            <NavLink to="/projetosarquivados">Projetos Arquivados</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Outlet />
    </Layout>
  );
};

export default App;
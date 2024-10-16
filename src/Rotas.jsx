import { Link } from 'react-router-dom';

import { UserOutlined, DesktopOutlined } from '@ant-design/icons';


export default [
  {
    label: (<Link to='/'>long</Link>),
    key: "acessar",
    icon: <DesktopOutlined />
  },
  {
    label: (<Link to='/projeto'>projeto</Link>),
    key: "projeto",
    icon: <UserOutlined />
  },
  // {
  //   label:(<Link to='/projeto'>Projeto</Link>), 
  //   key:"projeto"
  // }
];
import './App.css';

import { Layout, Avatar, Menu } from 'antd'
import { QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Cadastro from './Cadastro'
import Pedido from './Pedido'

const { Header, Content, Footer, Sider } = Layout

function App() {
  return (
    <div className="App">
      <Router>

        <Layout style={{height: "100vh"}}>
          <Header>
            <Avatar icon={ <QuestionCircleOutlined/> } style={{float: "right", marginTop: "15px"}}/>
            <h1 style={{color: "white", float: "left"}}>Cabeçalho</h1>
            
          </Header>
          
          <Layout>
            <Sider>
              <Menu theme="dark" defaultSelectedKeys={["2"]}>
                <Menu.Item key="1">
                  <Link to="/cadastro">Cadastro</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/pedido">Pedidos</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" icon={ <LogoutOutlined /> }>Sair</Menu.Item>
              </Menu>
            </Sider>
            <Content style={{padding: "10px", textAlign:"left"}}>
              <Switch>
                <Route path="/cadastro"><Cadastro /></Route>
                <Route path="/pedido"><Pedido /></Route>
              </Switch>
            </Content>
          </Layout>

          <Footer>Rodapé</Footer>
        </Layout>

      </Router>
    </div>
  );
}

export default App;

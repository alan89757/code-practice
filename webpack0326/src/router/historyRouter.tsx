import React, { Component } from "react";
import { HashRouter, Route, BrowserRouter, Switch } from "react-router-dom";

const Index = ()=> {
  return <div>首页</div>
}
const List = ()=> {
  return <div>列表页</div>
}

class HashRouters extends Component {
  render() {
    // history路由，需要配置nginx返回静态资源，用代理可以模拟实现
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/index">
            <Index />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default HashRouters;
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
    // hash路由
    return (
      <HashRouter>
          <div className="container">
              <Route path='/index' component={Index} />
              <Route path='/list' component={List} />
          </div>
      </HashRouter>
    )
  }
}

export default HashRouters;
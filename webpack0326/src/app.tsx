import React, { Component, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import HashRouters from "./router/hashRouter";

const Index = ()=> {
  return <div>首页</div>
}
const List = ()=> {
  return <div>列表页</div>
}
class App extends Component {
  render() {
    return (
      <HashRouters />
      // <BrowserRouter basename={"/app"}>
      //   <Switch>
      //     <Route
      //         exact
      //         path='/list'
      //         component={()=><List/>}
      //     />
      //     <Route
      //         exact
      //         path='/'
      //         component={()=><Index/>}
      //     />
      //   </Switch>
      // </BrowserRouter>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
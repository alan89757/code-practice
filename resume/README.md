来源：https://github.com/haizlin/fe-interview/blob/master/lib/React.md


1.什么时候使用状态管理器？
相邻组件需要共享状态信息

2.render函数中return如果没有使用()会有什么问题？
如果换行就会报错，babel编译JSX会自动添加分号;,
解释:在return后面添加括号这样代码可以折行书写，否则就在return 后面紧跟着语句

3.componentWillUpdate可以直接修改state的值吗？
react组件在每次需要重新渲染时候都会调用componentWillUpdate()，在里面修改state会无限循环

4.说说你对React的渲染原理的理解
老的虚拟dom和新的虚拟dom通过diff算法比较，最新代价更新虚拟dom,把最终的虚拟dom更新到浏览器中， props，state也会触发这流程
单向数据流

5.什么渲染劫持？
props, state,高阶组件可以实现渲染劫持（条件判断）

6.React Intl是什么原理
国际化，多语言库。原理就是配置多套语言

7.你有使用过React Intl吗？
react国际化的解决方案

8.怎么实现React组件的国际化呢？
React-intl

9.说说Context有哪些属性？
react.createContext();
Context.Provider();
Context.Consumer();
Context.displayName();

10.怎么使用Context开发组件？
const ThemeContext = React.createContext('light')
ThemeContext.Provider和ThemeContext.Consumer

11.为什么React并不推荐我们优先考虑使用Context？
Context属于实验阶段，可靠性不确定
setState更新state时，如果中间组件shouldComponentUpdate执行返回false, 不能保证context更新到子组件

12.react生命周期
挂载卸载过程
constructor()
componentWillMount()
componentDidMount()
componentWillUnmount ()
更新过程
componentWillReceiveProps (nextProps)
shouldComponentUpdate(nextProps,nextState)
componentWillUpdate (nextProps,nextState)
componentDidUpdate(prevProps,prevState)
render()
React新增的生命周期(个人补充)
getDerivedStateFromProps(nextProps, prevState)
getSnapshotBeforeUpdate(prevProps, prevState)

13. 除了实例的属性可以获取Context外哪些地方还能直接获取Context呢
构造函数 constructor(props,context)
生命周期 componentWillReceiveProps(nextProps,nextContext)
shouldComponentUpdate(nextProps,nextState,nextContext)
componentWillUpdate(nextProps,nextState,nextContext)

14.childContextTypes是什么？它有什么用？
childContextTypes用来定义context数据类型，该api从16.3开始已被废弃

15.contextType是什么？它有什么用？
定义当前组件要使用哪一个context

16.Consumer向上找不到Provider的时候怎么办？
找不到会取用默认值

17.有使用过Consumer吗？
Consumer主要用来在使用context的过程中，来获取上层provider的值，通过定义组件contextType的值来指定要获取的是哪个context，找到当前context对应的最近的一个provider，取到value属性的值，如果没有定义，那么就会取到创建当前context时的传入值

18.在React怎么使用Context
Context提供了一种方式，能够让数据在组件树中传递，而不必一级一级手动传递

19.React15和16别支持IE几以上
React15 版本不直接支持IE8 浏览器的，官方文档中说React16 中依赖于集合类型Map 和 Set 因此不再支持IE 11 以下的浏览器，如果想要支持，需要使用全局的 polyfill

20.说说你对windowing的了解
react-window和react-virtualized都是流行的使用windowing技术的库，他们都提供了一系列可重用的组件，这些组件能够帮助你以最好的性能展示列表以及表格数据

21.说说你对windowing的了解
展示长列表
react-window和react-virtualized都是流行的使用windowing技术的库

22.举例说明React的插槽有哪些运用场景
props.children

23.你有用过React的插槽(Portals)吗？怎么用？
ReactDOM.createPortal(child, container)

24.React的严格模式有什么用处
react的strictMode 是一个突出显示应用程序中潜在问题的工具，与Fragment一样，strictMode 不会渲染任何的可见UI，它为其后代元素触发额外的检查和警告。

25.React如何进行代码拆分？拆分的原则是什么




































































































































































































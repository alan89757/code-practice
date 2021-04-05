class BundlePlugin {
  constructor() {
    console.log("copywebpackplugin被调用")
  }
  apply(compiler) {
    // compiler webpack运行时实例
    // compiler.hooks.emit.tapAsync("BundlePlugin", (compilation, cb)=> { // 异步
      
    // })
    compiler.hooks.startCompile.tap("BundlePlugin", (compilation)=> { // 同步
      console.log("BundlePlugin___startCompile")
    });
    compiler.hooks.startEmitCompile.tap("BundlePlugin", (compilation)=> { // 同步
      console.log("BundlePlugin___startEmitCompile")
      console.log(compilation)
    });
    compiler.hooks.afterEmitCompile.tap("BundlePlugin", (compilation)=> { // 同步
      console.log("BundlePlugin___afterEmitCompile")
    })
    compiler.hooks.done.tap("BundlePlugin", (compilation)=> { // 同步
      console.log("BundlePlugin___done")
    })
  }
}

module.exports = BundlePlugin;
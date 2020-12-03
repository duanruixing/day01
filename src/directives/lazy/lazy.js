export default (Vue) => {
  // inserted(el) {
  //   console.log(el.parentNode)
  // }
  return class LazyClass {
    constructor(options) { }

    add(el) {
      Vue.nextTick(() => {
        console.log(el.parentNode)
        console.log(111)
      })
    }
  }
}

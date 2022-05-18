Function.prototype.$call() = function () {
    const args = Array.from(arguments)
    const ctx = args.shift(0)
    ctx.fn = this
    return ctx.fn()
}
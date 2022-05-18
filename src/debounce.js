export default function debounce(fn ,wait = 1000) {
    let timer = null
    return function(...args) {
        const ctx = this
        if(timer) {
            clearTimeout(timer)
            timer = null
           
        }
        timer = setTimeout(() => {
            fn.call(ctx, ...args)
          }, wait);
        
    }
}
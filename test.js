new Promise(resolve => {
    resolve(1)
    console.log('resolve后面的执行了')
}).then(value => {
    console.log(value)
})

const getAllResolveResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

getAllResolveResult<any>([Promise.resolve(true), Promise.resolve('hello')])
    .then(result => console.log(result))

getAllResolveResult<any>([Promise.reject(new Error('error')), Promise.resolve(1)])
    .then(result => console.log(result))
    .catch(error => console.log('error:', error.message))
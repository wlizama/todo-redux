import { bindActionCreators } from "redux"

// no usado
function middlewareOld(store, next, action) {
    const state = store.getState()
    store.dispatch({
        type: 'TEST'
    })

    next(action)
}


function middlewareFun(store) {
    return function (next) {
        return function (action) {
            const state = store.getState()
            store.dispatch({
                type: 'TEST'
            })

            next(action)
        }
    }
}

// con arrow functions
let actions = []
const middleware = store => next => action => {
    actions.push(action)
    localStorage.setItem('actions', JSON.stringify(actions))
    next(action)
    console.log("action saved")
}

export default middleware
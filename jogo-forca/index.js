import React from 'react'
import ReactDOM from 'react-dom'

import Corpo from './Corpo'
import Palavra from './Palavra'

var App = (props) => {
    return <div><Corpo /><Palavra /></div>
}

ReactDOM.render(<App />, document.getElementById('root'))

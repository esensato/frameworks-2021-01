import React from 'react'
import { render } from 'react-dom'

import { Button } from 'antd'

function App(props) {

    return <div><Button type="primary">Clique Aqui</Button></div>

}

render(<App />, document.getElementById('root'))
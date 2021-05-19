import React from 'react'
import axios from 'axios'
import { Button } from 'antd'

export default function NovoGasto(props) {

    const url_novo = "https://7c2bad50.us-south.apigw.appdomain.cloud/api/gasto"

    const criar = () => {

        let timestamp = new Date().getTime()
        let params = {username: "edson", categoria: "Transporte", valor: 50, data: timestamp}
        axios.post(url_novo, params).then((resp) => {
            console.log(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const listarGastos = () => {

        let URL = "https://7c2bad50.us-south.apigw.appdomain.cloud/api/gasto?username=edson"
        axios.get(URL).then((resp) => {
            
            console.log(resp.data)
            resp.data.gastos.forEach((item, idx) => console.log(item.categoria, Date(item.data)))

        }).catch((err) => {
            console.log(err)
        })

    }

    return <div>
        <Button onClick={ criar }>Novo Gasto</Button>
        <Button onClick={ listarGastos }>Listar Gastos</Button>
    </div>

}


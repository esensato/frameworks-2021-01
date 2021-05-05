import React from 'react'
import axios from 'axios'
import { Button, Form, Input } from 'antd'

export default function Login(props) {

    const url_login = "https://7c2bad50.us-south.apigw.appdomain.cloud/api/login"

    const login = (params) => {
        //let params = {username: "edson", senha: "123"}
        console.log(params)
        axios.post(url_login, params).then((resp) => {
            console.log(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return <div>
        <Form style={{width: "300px"}} onFinish={ login }>
            <Form.Item label="Username:" name="username">
                <Input />
            </Form.Item>

            <Form.Item label="Senha:" name="senha">
                <Input.Password />
            </Form.Item>
            <Button htmlType="submit">Login</Button>
        </Form>
    </div>

}


import React from 'react'

import { useState } from 'react'
import { Button, Input, List, Divider } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

export default function Cadastro(props) {

    var [nome, setNome] = useState("")

    return <div>

                <Input value={ nome } style={{width: "400px"}}
                onChange= {(v) => {
                    setNome(v.target.value)
                }}
                addonBefore="Nome:" 
                placeholder="Digite seu nome completo"/>
                <Button onClick={()=>alert(nome)}>Exibir Nome</Button>
                <List style={{width: "200px"}}
                      bordered
                      header="Frutas" 
                      footer="Fim da lista"
                      dataSource={ ["Abacate", "Abacaxi", "Melão"] }
                      renderItem={ item => {

                          return <List.Item id={ item } 
                              onClick={(v) => {
                                  alert(v.target.id)
                              }}>
                              { item }{item === "Abacate" ? <QuestionCircleOutlined/> : ""}
                              <Divider />
                              </List.Item>
                      } }/>

    </div>
}
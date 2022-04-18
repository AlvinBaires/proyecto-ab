import React, { useEffect, useState } from "react";
import {Col, Row,  Form, Button} from 'react-bootstrap';
import "./styles.css";
import {useParams} from 'react-router-dom';

function OneTimeSecretApp() {
  return (
    <div className="App">
      <h1>One Time Secret</h1>
      <OneTimeSecret/>

    </div>
  );
}

function OneTimeSecret(props){

  const [mensaje, setMensaje] = useState("");
  const [keyToShow, setKey] = useState("");
  const [searchingMessage, setSearchingMessage] = useState("");

  const { key } = useParams();
  useEffect(() => {
    setSearchingMessage('🕵️‍♂️ Estamos obteniendo tu mensaje... 🕵️‍♂️');
    if(window.localStorage.getItem(key)!==''){
      setMensaje(window.localStorage.getItem(key));
      window.localStorage.setItem(key,'')
    }
    setTimeout(() => {
      if(((!mensaje || mensaje == '') && window.localStorage.getItem(key) == '')){
        setSearchingMessage("❌ Este mensaje no existe o no puede ser visualizado nuevamente ❌")
      }
    }, 5000);
  },[key]);

  const changeMensaje = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      alert("URL Invalida")
    }
    event.preventDefault();
    event.stopPropagation();
    let myKey = Math.random().toString(36).slice(2);
    window.localStorage.setItem(myKey, mensaje);
    setKey(myKey);
    
  };


  return (

    <Form noValidate onSubmit={handleSubmit}>
          {key?
            <>
              
              <h1>{mensaje? '🤫 Este es tu mensaje secreto 🤫:': searchingMessage}</h1>
              <h2>{mensaje}</h2>    
            </>
            : (
              <Row>
                <Col>
                  <Form.Group as={Col} md="6" controlId="mensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control type="mensaje" name = "mensaje" onChange={changeMensaje} required value={mensaje} />
                    <Form.Control.Feedback type="invalid">
                      Requerido
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                {keyToShow?
                  <>
                    <Col>
                      <a href={window.location.href + '/' + keyToShow} target="_blank">{window.location.href + '/' + keyToShow}</a>
                      
                    </Col>              
                  </>
                  :''
                }
              </Row>
            )
          }
        
        {key?
            <>
            </>
            :
            <>
              <br></br>
              <Button variant="primary" type="submit" disabled = {!mensaje} className ="myBtn">
                Generar URL secreta
              </Button>
            </>
        }

        

      </Form>

  );
}

export default OneTimeSecretApp;
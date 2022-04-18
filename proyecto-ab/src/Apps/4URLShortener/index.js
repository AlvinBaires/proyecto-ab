import React, { useEffect, useState } from "react";
import {Col, Row,  Form, Button} from 'react-bootstrap';
import "./styles.css";
import {useParams} from 'react-router-dom';

function URLShortenerApp() {
  return (
    <div className="App">
      <h1>URL Shortener App</h1>
      <URLShortener/>
    </div>
  );
}

function URLShortener(props){

  let { key } = useParams();
  if(key){
    setTimeout(function (){
      window.location.href = window.localStorage.getItem(key);
    }, 3000);
  }

  const [url, setUrl] = useState("");
  const [keyToShow, setKey] = useState("");

  const changeUrl = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      alert("URL Invalida")
    }else{
      let myKey = Math.random().toString(36).slice(2);
      window.localStorage.setItem(myKey, url);
      setKey(myKey);
    }
    event.preventDefault();
    event.stopPropagation();
  };

  return (    
    
    <Form noValidate onSubmit={handleSubmit}>
          {key?
            <>
              <h1>Estamos redirigiendote...</h1>    
            </>
            : (
              <Row>
                <Col>
                  <Form.Group as={Col} md="6" controlId="url">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="url" name = "url" onChange={changeUrl} required value={url} />
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
              <Button variant="primary" type="submit" disabled = {!url} className ="myBtn">
          Generar URL
        </Button>
            </>
        }

      </Form>
  );
}

export default URLShortenerApp;
import React, { useEffect, useState } from "react";
import {Col, Row,  Form, Button} from 'react-bootstrap';
import "./styles.css";

function JSONtoCSVApp() {
  return (
    <div className="App">
      <h1>JSON to CSV</h1>
      <JSONtoCSV/>
    </div>
  );
}


function JSONtoCSV(props){

  const [json, setJson] = useState("");
  const [csv, setCsv] = useState("");
  const [jsonFormatted, setJsonFormatted] = useState("");

  const changeJson = (event) => {
    setJson(event.target.value);
  };

  const formatJson = function (){
    try{
      setJsonFormatted(JSON.stringify(JSON.parse(json), null, 2));
    }catch(e){
      alert("JSON invalido")
    }
  }

  const clear = function (){
    setJson('');
    setJsonFormatted('');
    setCsv('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let myJson;
    try{
      myJson = JSON.parse(json);
      if(myJson.length > 0){

        let myCsv = "";
        let properties = Object.getOwnPropertyNames(myJson[0]);
        myCsv = properties.join(",");

        myJson.forEach(element => {
          let values = [];
          properties.forEach(prop => {
            values.push((element.hasOwnProperty(prop) && element[prop] != "") ? element[prop] : ' ');
          });
          myCsv += ( "\n" + values.join(","));
        });
        
        setCsv(myCsv);

      }else{
        throw 'No es un listado';
      }
    } catch(e){
      alert("El texto ingresado no es un JSON válido: " + e)
    }
  };

    return (
      
      <Form noValidate onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group as={Col} md="6" controlId="JSON">
              <Form.Label>JSON</Form.Label>
              <Form.Control type="text" name = "JSON" as="textarea" onChange={changeJson} required className="inputConverter" value={json} />
              <Form.Control.Feedback type="invalid">
                Requerido
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <span>JSON Formateado</span>
            <br></br>

            <pre className='pre'>
              {jsonFormatted}
            </pre>
          </Col>
          <Col>
            <Form.Group as={Col} md="6" controlId="csv">
              <Form.Label>CSV</Form.Label>
              <Form.Control type="text" name = "csv" as="textarea" value={csv} className="inputConverter" disabled="true" />
              <Form.Control.Feedback type="invalid">
                Requerido
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        

        <br></br>

        <Button variant="primary" disabled = {!json} className ="myBtn" onClick={formatJson}>
          Formatear
        </Button>

        <Button variant="primary" type="submit" disabled = {!json} className ="myBtn">
          Convertir
        </Button>

        <Button variant="primary" disabled = {!json} className ="myBtn" onClick={clear}>
          Limpiar
        </Button>

      </Form>

      

    );

}

export default JSONtoCSVApp;
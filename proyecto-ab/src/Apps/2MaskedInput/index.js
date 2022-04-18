import React, { useEffect, useState } from "react";
import "./styles.css";
import {Col, Row,  Form, Button} from 'react-bootstrap';

function MaskedInputApp() {
  return (
    <div className="App">
      <h1>Masked Input</h1>
      <MaskedImput/>
    </div>
  );
}


function MaskedImput(props){

    const [emergencia, setEmergencia] = useState(false);
    

    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }else{
            let data = {
                nombres: event.target.nombres.value,
                primerApellido: event.target.primerApellido.value,
                nombrsegundoApellidoes: event.target.segundoApellido.value,
                fechaNacimiento: event.target.fechaNacimiento.value,
                email: event.target.email.value,
                direccion: event.target.direccion.value,
                codigoMarcado: event.target.codigoMarcado.value,
                telefono: event.target.telefono.value,
                telefonoCasa: event.target.telefonoCasa.value,
                dui: event.target.dui.value,
                pasaporte: event.target.pasaporte.value,
                tarjeta: event.target.tarjeta.value,
                mesTarjeta: event.target.mesTarjeta.value,
                anioTarjeta: event.target.anioTarjeta.value,
                verificacionTarjeta: event.target.verificacionTarjeta.value
            };
            if(emergencia){
                let emergenciaObj = {
                    nombres: event.target.enombres.value,
                    primerApellido: event.target.eprimerApellido.value,
                    nombrsegundoApellidoes: event.target.esegundoApellido.value,
                    fechaNacimiento: event.target.efechaNacimiento.value,
                    email: event.target.eemail.value,
                    direccion: event.target.edireccion.value,
                    codigoMarcado: event.target.ecodigoMarcado.value,
                    telefono: event.target.etelefono.value
                };
                data.emergencia = emergenciaObj;

            }
            window.localStorage.setItem(data.email, JSON.stringify(data));
            alert("Se ha almacenado a la persona ", data.email);
            event.target.reset();
        }
        setValidated(true);

        event.preventDefault();
        event.stopPropagation();

        
    };

    const handleOnChange = (event) => {
        setEmergencia(!emergencia);
    };

    return (
        <main>
            <Row>
                <Col>
                    <div>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>

                            <Form.Group as={Col} md="6" controlId="nombres">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control type="text" name = "nombres" pattern = "[A-Za-z]{1,32}" required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="primerApellido">
                                <Form.Label>Primer Apellido</Form.Label>
                                <Form.Control type="text" name = "primerApellido" pattern = "[A-Za-z]{1,32}" required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="segundoApellido">
                                <Form.Label>Segundo Apellido</Form.Label>
                                <Form.Control type="text" name = "segundoApellido" pattern = "[A-Za-z]{1,32}" required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="fechaNacimiento">
                                <Form.Label>Fecha de Nacimiento</Form.Label>
                                <Form.Control type="date" name = "fechaNacimiento" max = {new Date().toLocaleDateString('en-ca')} required   />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name = "email" required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="direccion">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="text" name = "direccion" maxLength= "200" required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="codigoMarcado">
                                <Form.Label>Código de Marcado</Form.Label>
                                <Form.Control type="text" name = "codigoMarcado" maxLength= "200" required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="telefono">
                                <Form.Label>Número de Teléfono</Form.Label>
                                <Form.Control type="tel" name = "telefono" minLength = "8"  required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="telefonoCasa">
                                <Form.Label>Número de Teléfono casa</Form.Label>
                                <Form.Control type="tel" name = "telefonoCasa" minLength = "8"  required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="dui">
                                <Form.Label>Número de DUI (sin guiones)</Form.Label>
                                <Form.Control type="tel" name = "dui" minLength = "9" maxLength= "9" pattern = "^[0-9]*$"  required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="pasaporte">
                                <Form.Label>Número de Pasaporte</Form.Label>
                                <Form.Control type="text" name = "pasaporte"  required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="tarjeta">
                                <Form.Label>Tarjeta de Crédito</Form.Label>
                                <Form.Control type="text" name = "tarjeta" placeholder = "Test 4111111111111111" pattern = "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$" required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="mesTarjeta">
                                <Form.Label>Mes vencimiento</Form.Label>
                                <Form.Control type="number" name = "mesTarjeta" placeholder="1-12" min="1" max = "12"  required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group as={Col} md="6" controlId="anioTarjeta">
                                <Form.Label>Año vencimiento</Form.Label>
                                <Form.Control type="number" name = "anioTarjeta" min={new Date().getFullYear()} max = "2050"  required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="verificacionTarjeta">
                                <Form.Label>CVC</Form.Label>
                                <Form.Control type="number" name = "verificacionTarjeta"   required  />
                                <Form.Control.Feedback type="invalid">
                                    Valor inválido
                                </Form.Control.Feedback>
                            </Form.Group>



                            <br></br>
                            <Form.Group className="mb-3">
                                <Form.Check
                                label="Llenar contacto de emergencia"
                                onChange={handleOnChange}
                                />
                            </Form.Group>

                            { emergencia?                                    
                                    <>
                                        <h3>Contacto de Emergencia</h3>
                                        <Form.Group as={Col} md="6" controlId="enombres">
                                            <Form.Label>Nombres</Form.Label>
                                            <Form.Control type="text" name = "enombres" pattern = "[A-Za-z]{1,32}" required  />
                                            <Form.Control.Feedback type="invalid">
                                                Valor inválido
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" controlId="eprimerApellido">
                                            <Form.Label>Primer Apellido</Form.Label>
                                            <Form.Control type="text" name = "eprimerApellido" pattern = "[A-Za-z]{1,32}" required  />
                                            <Form.Control.Feedback type="invalid">
                                                Valor inválido
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" controlId="esegundoApellido">
                                            <Form.Label>Segundo Apellido</Form.Label>
                                            <Form.Control type="text" name = "esegundoApellido" pattern = "[A-Za-z]{1,32}" required  />
                                            <Form.Control.Feedback type="invalid">
                                                Valor inválido
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" controlId="efechaNacimiento">
                                            <Form.Label>Fecha de Nacimiento</Form.Label>
                                            <Form.Control type="date" name = "efechaNacimiento" max = {new Date().toLocaleDateString('en-ca')} required   />
                                            <Form.Control.Feedback type="invalid">
                                                Valor inválido
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" controlId="eemail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" name = "eemail" required  />
                                            <Form.Control.Feedback type="invalid">
                                                Valor inválido
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" controlId="edireccion">
                                            <Form.Label>Dirección</Form.Label>
                                            <Form.Control type="text" name = "edireccion" maxLength= "200" required  />
                                            <Form.Control.Feedback type="invalid">
                                                Valor inválido
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" controlId="ecodigoMarcado">
                                            <Form.Label>Código de Marcado</Form.Label>
                                            <Form.Control type="text" name = "ecodigoMarcado" maxLength= "200" required  />
                                            <Form.Control.Feedback type="invalid">
                                                Valor inválido
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" controlId="etelefono">
                                            <Form.Label>Número de Teléfono</Form.Label>
                                            <Form.Control type="tel" name = "etelefono" minLength = "8"  required  />
                                            <Form.Control.Feedback type="invalid">
                                                Valor inválido
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </>                        

                                : 'No llenar valores de emergencia'
                            }

                            
                            

                            <br></br>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col>
                    <span>
                        Ver consola de navegador para ver los datos almacenados
                    </span>
                </Col>
                
            </Row>
            
        </main>
    );
}

export default MaskedInputApp;
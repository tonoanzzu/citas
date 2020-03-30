import React, { Fragment, useState } from "react";
import {v4 as uuidv4} from 'uuid';
const Formulario = ({crearCita}) => {

  //crear State de citas

  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
  });

  const[error, actualizaError] = useState(false)

  const actualizarState= (e) =>{
      
     actualizarCita({
       ...cita,
       [e.target.name]: e.target.value
     })
  }
  //extraer los valores
  const {mascota, propietario, fecha, hora, sintomas} = cita

  //Cuando el usuario presiona agregar cita
  const submitCita = (e)=>{
    e.preventDefault();
    //validar

    if(mascota.trim()===''||propietario.trim()===''||fecha.trim()===''||hora.trim()===''||sintomas.trim()===''){
      actualizaError(true)
      return;
    }
    actualizaError(false)

    //Asignar ID
    cita.id= uuidv4();

    //crear cita
    crearCita(cita)

    //Reiniciar el form
    actualizarCita({
      mascota: '',
      propietario:'',
      fecha:'',
      hora:'',
      sintomas:''
    })
    
  }

    return (
      <Fragment>
        <h2>Crear cita</h2>
        { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
        <form
        onSubmit={submitCita}>
          <label>Nombre de mascota</label>
          <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState} 
          value={mascota}
          />

          <label>Nombre de propietario</label>
          <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre de propietario"
          onChange={actualizarState}
          value={propietario}
           />

          <label>Fecha</label>
          <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
           />

          <label>Hora</label>
          <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
           />

          <label>Síntomas</label>
          <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
          ></textarea>
          <button
          type="submit"
          className="u-full-width button-primary">Agregar cita</button>
        </form>
      </Fragment>
        
      );
}
 
export default Formulario;
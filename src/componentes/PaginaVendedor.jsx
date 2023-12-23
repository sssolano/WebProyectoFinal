import  { useEffect, useState } from 'react';
import { onDelete, onFindAll, onFindById, onInsert, onUpdate } from '../config/conexiones';
import swal from 'sweetalert';
import Formulario from './Formulario';
import ListaContactos from './ListaContactos';

export const PaginaVendedor = () => {
  const initialValues = {
    nombre: "",
    correo: "",
    numtelefono: "",
    direccion1:"",
    direccion2:"",
    tiponegocio:"",
    codigopostal:"",
   servicio:"",
   canton:"",
   distrito:"",
   provincia:"",
   imagen:"",
   tag:"",



  }

  const [values, setValues] = useState(initialValues);
  const [contactos, setContactos] = useState([]);
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    onGetContactos();
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  }

  const onGetContactos = async () => {
    const lstContactos = await onFindAll('contactos');
    setContactos(lstContactos.docs);
  }

  const onSubmit = async ev => {
    ev.preventDefault();
    try {
      if (currentId === '') {
        await onInsert(values);
        swal("Registro ingresado correctamente.", { icon: "success" });
      } else {
        await onUpdate(currentId, values);
        swal("Registro ingresado correctamente.", { icon: "success" });
      }
    } catch (error) {
      swal("Error", "Error: " + error, "error");
    }
    onGetContactos();
    limpiar();
  }

  const onDeleteContacto = ({ target }) => {
    swal({
      title: "Desea eliminar el registro?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await onDelete(target.dataset.id);
        onGetContactos();
        swal("Registro elimininado!", { icon: "success" });
      }
    });
  }

  const onCargarContacto = async ({ target }) => {
    const docSeleccionado = await onFindById('contactos',target.dataset.id);
    setValues({ ...docSeleccionado });
    setCurrentId(target.dataset.id);
  }

  const limpiar = () => {
    setValues({ ...initialValues });
    setCurrentId('');
  }

  return (
    <div className="container">
      <div className="row">
        <Formulario
          values={values}
          handleInputChange={handleInputChange}
          onSubmit={onSubmit}
          limpiar={limpiar}
          currentId={currentId}
        />
        <ListaContactos
          contactos={contactos}
          onCargarContacto={onCargarContacto}
          onDeleteContacto={onDeleteContacto}
        />
      </div>
    </div>
  );
}
export default PaginaVendedor;
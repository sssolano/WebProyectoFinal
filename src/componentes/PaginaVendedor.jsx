import  { useEffect, useState } from 'react';
import { onDelete, onFindAll, onFindById, onInsert, onUpdate } from '../config/conexiones';
import swal from 'sweetalert';
import Formulario from './Formulario';
import ListaContactos from './ListaNegocios';

const PaginaVendedor = () => {
  const initialValues = {
    nombre: '',
    correo: '',
    numtelefono: '',
    direccion1: '',
    direccion2: '',
    tiponegocio: '',
    codigopostal: '',
    servicio: '',
    canton: '',
    distrito: '',
    provincia: '',
    imagen: '',
    tag: '',
  };

  const [values, setValues] = useState(initialValues);
  const [contactos, setNegocios] = useState([]);
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    onGetNegocios();
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const onGetNegocios = async () => {
    try {
      const lstContactos = await onFindAll('contactos');
      setNegocios(lstContactos.docs);
    } catch (error) {
      console.error('Error al obtener contactos:', error);
    }
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      if (currentId === '') {
        await onInsert('contactos', values);
        swal('Registro ingresado correctamente.', { icon: 'success' });
      } else {
        await onUpdate('contactos', currentId, values);
        swal('Registro modificado correctamente.', { icon: 'success' });
      }
    } catch (error) {
      swal('Error', 'Error: ' + error.message, 'error');
    }
    onGetNegocios();
    limpiar();
  };

  const onDeleteContacto = ({ target }) => {
    swal({
      title: '¿Desea eliminar el registro?',
      text: '',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await onDelete('contactos', target.dataset.id);
          onGetNegocios();
          swal('Registro eliminado correctamente.', { icon: 'success' });
        } catch (error) {
          console.error('Error al eliminar contacto:', error);
          swal('Error', 'Error al eliminar el registro.', 'error');
        }
      }
    });
  };

  const onCargarContacto = async ({ target }) => {
    try {
      const docSeleccionado = await onFindById('contactos', target.dataset.id);
      setValues({ ...docSeleccionado });
      setCurrentId(target.dataset.id);
    } catch (error) {
      console.error('Error al cargar contacto:', error);
      swal('Error', 'Error al cargar el registro.', 'error');
    }
  };

  const limpiar = () => {
    setValues({ ...initialValues });
    setCurrentId('');
  };

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
};

export default PaginaVendedor;
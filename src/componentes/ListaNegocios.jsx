
import PropTypes from 'prop-types';

const ListaContactos = ({ contactos, onCargarContacto, onDeleteContacto }) => {
  ListaContactos.propTypes = {
    contactos: PropTypes.array.isRequired,
    onCargarContacto: PropTypes.func.isRequired,
    onDeleteContacto: PropTypes.func.isRequired,
  };
  return (
    <div className="col-8">
      <table className="table table-striped mt-4">
        <thead>
          <tr>
          <td>nombre</td>
              <td>email</td>
              <td>numtelefono</td>
              <td>direccion1</td>
              <td>direccion2</td>
              <td>tiponegocio</td>
              <td>codigopostal</td>
              <td>servicio</td>
              <td>canton</td>
              <td>distrito</td>
              <td>provincia</td>
              <td>imagen</td>
              <td>tag</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contactos && contactos.map(contacto => (
            <tr key={contacto.id}>
              <td>{contacto.data().nombre}</td>
              <td>{contacto.data().email}</td>
              <td>{contacto.data().numtelefono}</td>
              <td>{contacto.data().dirrecion1}</td>
              <td>{contacto.data().dirrecion2}</td>
              <td>{contacto.data().tiponegocio}</td>
              <td>{contacto.data().codigopostal}</td>
              <td>{contacto.data().servcio}</td>
              <td>{contacto.data().canton}</td>
              <td>{contacto.data().distrito}</td>
              <td>{contacto.data().provincia}</td>
              <td>{contacto.data().imagen}</td>
              <td>{contacto.data().tag}</td>
              <td>
                <button className='btn btn-warning mx-1' data-id={contacto.id} onClick={onCargarContacto}>Editar</button>
                <button className='btn btn-secondary' data-id={contacto.id} onClick={onDeleteContacto}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaContactos;

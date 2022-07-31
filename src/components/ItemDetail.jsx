import AgregarItem from "./AgregarItem";

const ItemDetail = ({ detail }) => {
  console.log({ detail });
  return (
    <>
      <div className="detalleProducto">
        <div className="detalleProducto__img">
          <img src={detail.imagen} alt={detail.nombre} />
        </div>
        <div className="detalleProducto__compra">
          <div className="detalleProducto__compraInt">
            <div>
              <h2 className="bodega">{detail.bodega}</h2>
              <h3 className="nombre">{detail.nombre}</h3>
            </div>
            <div>
              <div>
                <p className="precio">${detail.precio}</p>
              </div>
            </div>
            <AgregarItem initial={1} stockItems={detail.stock} />
          </div>
        </div>
        <div className="detalleProducto__detalles">
          <div>
            <div className="detalles">
              <h2>DETALLES</h2>
            </div>
            <div className="tablas">
              <div className="table1">
                <table>
                  <tbody>
                    <tr>
                      <th>Tipo de Producto</th>
                      <td>Vino </td>
                    </tr>
                    <tr>
                      <th>Nombre: </th>
                      <td>{detail.nombre}</td>
                    </tr>
                    <tr>
                      <th>Bodega</th>
                      <td>{detail.bodega}</td>
                    </tr>
                    <tr>
                      <th>Varietal</th>
                      <td>{detail.varietal}</td>
                    </tr>
                    <tr>
                      <th>Region</th>
                      <td>{detail.region}</td>
                    </tr>
                    <tr>
                      <th>Valle</th>
                      <td>{detail.valle}</td>
                    </tr>
                    <tr>
                      <th>Crianza</th>
                      <td>{detail.crianza}</td>
                    </tr>
                    <tr>
                      <th>Tiempo de Crianza</th>
                      <td>{detail.tiempo}</td>
                    </tr>
                    <tr>
                      <th>Enologo</th>
                      <td>{detail.enologo}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className="table2">
                  <tbody>
                    <tr>
                      <th>Descripcion</th>
                      <td>{detail.descripcion}</td>
                    </tr>

                    <tr>
                      <th>Notas</th>
                      <td>{detail.notas}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;

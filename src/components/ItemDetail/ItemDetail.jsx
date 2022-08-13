import AgregarItem from "../AgregarItem";
import { useState } from "react";
import Terminar from "./../Terminar";

const ItemDetail = ({ detail }) => {
  const { imagen, nombre, bodega, precio, stock, varietal, region, valle, crianza, tiempo, enologo, descripcion, notas, id } = detail;
  const [compra, setCompra] = useState();

  return (
    <>
      <div className="detalleProducto">
        <div className="detalleProducto__img">
          <img src={imagen} alt={nombre} />
        </div>
        <div className="detalleProducto__compra">
          <div className="detalleProducto__compraInt">
            <div>
              <h2 className="bodega">{bodega}</h2>
              <h3 className="nombre">{nombre}</h3>
            </div>
            <div>
              <div>
                <p className="precio">${precio}</p>
              </div>
            </div>
            {!compra ? <AgregarItem initial={1} producto={{ stock, nombre, id, precio, varietal }} setCompra={setCompra} /> : <Terminar />}
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
                      <td>{nombre}</td>
                    </tr>
                    <tr>
                      <th>Bodega</th>
                      <td>{bodega}</td>
                    </tr>
                    <tr>
                      <th>Varietal</th>
                      <td>{varietal}</td>
                    </tr>
                    <tr>
                      <th>Region</th>
                      <td>{region}</td>
                    </tr>
                    <tr>
                      <th>Valle</th>
                      <td>{valle}</td>
                    </tr>
                    <tr>
                      <th>Crianza</th>
                      <td>{crianza}</td>
                    </tr>
                    <tr>
                      <th>Tiempo de Crianza</th>
                      <td>{tiempo}</td>
                    </tr>
                    <tr>
                      <th>Enologo</th>
                      <td>{enologo}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className="table2">
                  <tbody>
                    <tr>
                      <th>Descripcion</th>
                      <td>{descripcion}</td>
                    </tr>

                    <tr>
                      <th>Notas</th>
                      <td>{notas}</td>
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

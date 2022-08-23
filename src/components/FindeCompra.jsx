import React from "react";

const FindeCompra = ({ orders }) => {
  console.log(orders);
  return (
    <>
      <div className="orders">
        <div>Gracias {orders.buyer.name} Por su compra</div>
        <div>
          Se van a comunica por su email
          {orders.buyer.email} o Telefono {orders.buyer.tel}
        </div>
        <div>no olvide su Id de compra es {orders.id}</div>
        <div>y su compra fue </div>
        {orders.cart.map((producto) => (
          <div>
            {producto.cantidad}, {producto.nombre}
          </div>
        ))}
        <div>Total :${orders.total}</div>
      </div>
    </>
  );
};
export default FindeCompra;

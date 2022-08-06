import imagen from "../assets/404.jpg";
const CuatroCientosCuatro = () => {
  return (
    <>
      <div className="contenedor404">
        <div className="texto404">
          <p>Pagina no encotrada</p>
        </div>
        <div className="pagina404">404</div>
        <div>
          <img src={imagen} alt="404" />
        </div>
      </div>
    </>
  );
};
export default CuatroCientosCuatro;

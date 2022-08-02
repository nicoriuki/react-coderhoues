import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <>
      <main className="main">
        <section className="items">
          {data.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </section>
      </main>
    </>
  );
};
export default ItemList;

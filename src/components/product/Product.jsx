import "./Product.css"

export const Product = ({ img, title, desc, link }) => {
  return (
    //Added wrapper, title and dicription
    <div className="p-wrapper">

      <h3 className="p-title">{title}</h3>
      <p className="p-desc">{desc}</p>

      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>

        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt={title} className="p-img" />
        </a>
      </div>

    </div>
  );
};

export default Product;
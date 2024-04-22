import styles from "./styles.module.css";

const { product, productImg, productInfo } = styles;

type ProductInfoProps = {
  title: string;
  img: string;
  price: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  quantity?: number;
};

const ProductInfo = ({
  img,
  title,
  price,
  quantity,
  style,
  children,
}: ProductInfoProps) => {
  return (
    <div className={product} style={style}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <div className={productInfo}>
        <h2>{title}</h2>
        <h3>Item Price: {price.toFixed(2)} EGP</h3>
        {quantity && <h3>Total Quantity {quantity}</h3>}
        {quantity && <h3>Total Price {(quantity * price).toFixed(2)} EGP</h3>}
        {children}
      </div>
    </div>
  );
};

export default ProductInfo;

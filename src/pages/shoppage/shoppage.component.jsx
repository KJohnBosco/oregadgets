import React from "react";
import "./shoppage.styles.scss";
import { Products } from "../../Products";
import { Collection } from "../../components/collection/collection.component";

export class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: Products,
    };
  }

  render() {
    return (
      <div className="shoppage">
        <div className="products-container">{}</div>
      </div>
    );
  }
}

// export default ShopPage;

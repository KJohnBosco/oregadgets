import React from "react";
import "./shoppage.styles.scss";
import { Products } from "../../Products";

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
        <h1>Shop Page</h1>
        <h3>Welcome to Ore Store</h3>
      </div>
    );
  }
}

// export default ShopPage;

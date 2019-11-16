import React from "react";

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    // Import SHOP_DATA array into state from shop.data.js.
    // This gives us some products to display
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

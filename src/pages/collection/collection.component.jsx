import React from "react";

import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => (
  <div className="collection-page">
    <h2>KATEGORI</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  // We need to pass in state here because unlike the other selectors
  // this one needs a part of the state depending on the URL parameter
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);

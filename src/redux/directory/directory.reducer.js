const INITIAL_STATE = {
  sections: [
    {
      title: 'hatter',
      imageUrl: 'https://react-ecommerce.dfweb.no/images/hats.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jakker',
      imageUrl: 'https://react-ecommerce.dfweb.no/images/jacket.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sko',
      imageUrl: 'https://react-ecommerce.dfweb.no/images/shoes.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'dame',
      imageUrl: 'https://react-ecommerce.dfweb.no/images/woman.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'menn',
      imageUrl: 'https://react-ecommerce.dfweb.no/images/man.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const DirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default DirectoryReducer;

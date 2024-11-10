// Task 1: Create the Asset Module
export const assets = [
    { id: 1, name: "Stock A", type: "stock", price: 100, quantity: 50 },
    { id: 2, name: "Bond B", type: "bond", price: 200, quantity: 30 },
    { id: 3, name: "Stock C", type: "stock", price: 150, quantity: 20 }
  ];
  
  export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
  }
  
export const productService = {
  getAll: async () =>
    fetch("http://localhost:9080/api/products").then((res) => res.json()),
};

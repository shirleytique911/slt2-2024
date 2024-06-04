export const objectToArray = object => {
    return Object.keys(object).map(key => object[key])
}
export const objectToArrays = object => {
  return Object.keys(object).map(key => {
      let item = object[key];
      if (typeof item.items === 'object') {
          item.items = Object.values(item.items);
      }
      return {
          id: key,
          ...item
      };
  });
};
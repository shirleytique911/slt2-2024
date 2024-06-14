export const objectToArray = (object) => {
    if (!object) {
        return [];
      }
    return Object.keys(object).map(key => ({
        firebaseId: key,  // Añadir firebaseId como parte del objeto
        ...object[key]
    }));
};
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
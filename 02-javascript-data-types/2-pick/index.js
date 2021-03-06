/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const res = Object.keys(obj)
    .filter(key => fields.includes(key))
    .reduce((tmp, key) => {
      tmp[key] = obj[key];
      return tmp;
    }, {});

  return res;
};

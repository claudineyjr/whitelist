const findMissingFields = (target, requiredFields) => {
  const result = [];
  if(typeof target !== 'object' || target === null){
    return [];
  }
  for(const field of requiredFields){
    if(!target.hasOwnProperty(field) || target[field] === null){
      result.push(field);
    }
  }
  return result;
}

module.exports = {
  findMissingFields,
}


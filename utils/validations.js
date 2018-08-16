const findMissingFields = (target, requiredFields) => {
  const result = [];
  if(typeof target !== 'object' || target === null){
    return ['null object'];
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


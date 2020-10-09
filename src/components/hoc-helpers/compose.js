const compose = (...funcs) => (component) => {
  return funcs.reduceRight((prevResult, fn) => fn(prevResult), component);
}

export default compose;

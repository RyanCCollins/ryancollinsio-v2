// filterProjects :: [Object] -> String -> [Object]
const filterProjects = (
  xs,
  cat
) =>
  cat.value == 'all' ? // eslint-disable-line
    xs
  :
    xs.filter(x => x.category === cat.value);

export {
  filterProjects
};

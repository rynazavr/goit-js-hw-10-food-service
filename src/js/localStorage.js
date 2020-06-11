const load = key => {
  try {
    const somethingThere = localStorage.getItem(key);
    return somethingThere === null ? undefined : JSON.parse(somethingThere);
  } catch (err) {
    console.error('get state error: '.err);
  }
};

const save = (key, value) => {
  try {
    const somethingThere = JSON.stringify(value);
    localStorage.setItem(key, somethingThere);
  } catch (err) {
    console.error('set state error: ', err);
  }
};
export default { load, save };

const get = url => {
  return new Promise((resolve, reject) => {
    fetch(url, {}).then(response =>
      response
        .json()
        .then(data => data)
        .then(resolve)
        .catch(reject)
    );
  });
};

export { get };

const fakeServerLatency = (ms) =>
  new Promise((resolve, __) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export default fakeServerLatency;

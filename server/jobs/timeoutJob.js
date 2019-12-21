const mockAsync = number => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!number) reject(new Error("no first name"));

      resolve(number * 10);
    }, 5000);
  });
};

module.exports = mockAsync;

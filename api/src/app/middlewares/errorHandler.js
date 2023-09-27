module.exports = (error, request, response, next) => {
  if (error) {
    return response.sendStatus(500);
  }
};

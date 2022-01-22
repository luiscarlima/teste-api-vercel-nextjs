function tempo(request, response) {
  const dynamicDate = new Date();

  response.json({
    date: dynamicDate.toGMTString(),
  });
}

//Entry point
//Toda resquest feita para site.com/api/tempo
export default tempo;

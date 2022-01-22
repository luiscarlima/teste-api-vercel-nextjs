async function tempo(request, response) {
  const dynamicDate = new Date();

  //apiSecret recebe o valor da variável de ambiente CONVERTKIT_API_SECRET
  const apiSecret = process.env.CONVERTKIT_API_SECRET;

  //faz o request na url da api com a api secret pegando o response
  const subscribersResponse = await fetch(`url/api?api_secret=${apiSecret}`); //exemplo

  //converte o responde para json
  const subscribersResponseJson = await subscribersResponse.json();

  //pega apenas o valor desejado (ou valores)
  const inscritos = subscribersResponseJson.total_subscribers;

  //comando para cachear os response para o problema de haver muitos requests para o endpoint da api externa
  //Este comando irá somente revalidar o cache após passado dez segundos
  response.setHeader('Cache-control', 's-maxage=10, stale-while-revalidate');

  //Response main da API
  response.json({
    date: dynamicDate.toGMTString(),
    inscritos: inscritos,
  });
}

//Entry point
//Toda resquest feita para site.com/api/tempo
export default tempo;

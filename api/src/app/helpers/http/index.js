const HttpStatusCode = {
  OK: 200, // Requisição bem-sucedida
  CREATED: 201, // Recurso criado com sucesso
  NO_CONTENT: 204, // Requisição bem-sucedida, sem conteúdo
  BAD_REQUEST: 400, // Requisição inválida do cliente
  NOT_FOUND: 404, // Recurso não encontrado
  INTERNAL_SERVER: 500, // Erro interno do servidor
};
export { HttpStatusCode };

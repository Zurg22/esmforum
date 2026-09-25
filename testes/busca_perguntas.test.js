const mock_bd = {};

const PerguntaRepository = require('../repositories/pergunta_repository.js');
const BuscaPerguntasService = require('../services/busca_perguntas_service.js');

mock_bd.queryAll = jest.fn().mockReturnValue([
  {
    id_pergunta: 1,
    texto: 'Como funciona o desenvolvimento de software?',
    id_usuario: 1
  },
  {
    id_pergunta: 2,
    texto: 'O que é engenharia de software?',
    id_usuario: 1
  }
]);

const perguntaRepository = new PerguntaRepository(mock_bd);
const buscaPerguntasService = new BuscaPerguntasService(perguntaRepository);

test('Deve buscar perguntas por palavra-chave', () => {
  const perguntas = buscaPerguntasService.executar('software');

  expect(perguntas.length).toBe(2);
  expect(perguntas[0].texto).toBe(
    'Como funciona o desenvolvimento de software?'
  );
  expect(perguntas[1].texto).toBe(
    'O que é engenharia de software?'
  );
});

test('Deve retornar lista vazia quando a palavra-chave estiver vazia', () => {
  const perguntas = buscaPerguntasService.executar('');

  expect(perguntas).toEqual([]);
});
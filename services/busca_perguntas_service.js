class BuscaPerguntasService {
  constructor(perguntaRepository) {
    this.perguntaRepository = perguntaRepository;
  }

  executar(palavra) {
    if (!palavra || palavra.trim() === '') {
      return [];
    }

    return this.perguntaRepository.buscarPorPalavra(palavra.trim());
  }
}

module.exports = BuscaPerguntasService;

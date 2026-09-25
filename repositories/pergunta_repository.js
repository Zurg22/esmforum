class PerguntaRepository {
  constructor(bd) {
    this.bd = bd;
  }

  buscarPorPalavra(palavra) {
    const termo = `%${palavra}%`;

    return this.bd.queryAll(
      'SELECT * FROM perguntas WHERE texto LIKE ?',
      [termo]
    );
  }
}

module.exports = PerguntaRepository;

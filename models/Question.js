class Question {
    /**
     *
     * @param {string} text el texto de la pregunta
     * @param {string[]} choices lista de opciones a la pregunta
     * @param {string} answer respuesta de la pregunta
     */
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
  
    /**
     *
     * @param {string} choice opcion seleccionada
     * @returns {boolean} retorna si la eleccion es correcta
     */
    correctAnswer(choice) {
      return choice === this.answer;
    }
  }
  
  export { Question };
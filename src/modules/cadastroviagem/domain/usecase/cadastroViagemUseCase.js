import AsyncStorage from "@react-native-async-storage/async-storage";

class CadastroViagemUseCase { 
  constructor(repository) {
    this.repository = repository;
  }

  validarDadosViagem({ titulo, dataIda, dataVolta, gastoPrevisto }) {
    if (!titulo) throw new Error("O título da viagem é obrigatório.");
    if (!dataIda) throw new Error("A data de ida é obrigatória.");
    if (!dataVolta) throw new Error("A data de volta é obrigatória.");
    
    if (new Date(dataIda) > new Date(dataVolta)) {
      throw new Error("A data de volta não pode ser anterior à data de ida.");
    }

    if (!gastoPrevisto || gastoPrevisto === "R$ 0,00") throw new Error("O gasto previsto é obrigatório.");
  }

  async salvarViagem({ titulo, dataIda, dataVolta, gastoPrevisto }) {
    try {
      this.validarDadosViagem({ titulo, dataIda, dataVolta, gastoPrevisto });

      const viagem = {
        titulo,
        dataIda: dataIda.toISOString(),
        dataVolta: dataVolta.toISOString(),
        gastoPrevisto,
      };

      await AsyncStorage.setItem("@viagemCadastro", JSON.stringify(viagem));

      return { success: true, message: "Viagem salva com sucesso!" };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}

// Exporta a classe com o nome capitalizado, pois é uma classe
export default CadastroViagemUseCase;

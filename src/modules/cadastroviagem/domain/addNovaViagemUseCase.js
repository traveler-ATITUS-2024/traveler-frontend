import AsyncStorage from "@react-native-async-storage/async-storage";

class CadastroViagemUseCase {

  // Valida os dados do cadastro de viagem
  validarDadosViagem({ titulo, dataIda, dataVolta, gastoPrevisto }) {
    if (!titulo) throw new Error("O título da viagem é obrigatório.");
    if (!dataIda) throw new Error("A data de ida é obrigatória.");
    if (!dataVolta) throw new Error("A data de volta é obrigatória.");
    
    // Verifica se a data de volta é antes da data de ida
    if (new Date(dataIda) > new Date(dataVolta)) {
      throw new Error("A data de volta não pode ser anterior à data de ida.");
    }

    if (!gastoPrevisto || gastoPrevisto === "R$ 0,00") throw new Error("O gasto previsto é obrigatório.");
  }

  // Salva os dados da viagem usando AsyncStorage
  async salvarViagem({ titulo, dataIda, dataVolta, gastoPrevisto }) {
    try {
      // Valida os dados antes de salvar
      this.validarDadosViagem({ titulo, dataIda, dataVolta, gastoPrevisto });

      const viagem = {
        titulo,
        dataIda: dataIda.toISOString(),
        dataVolta: dataVolta.toISOString(),
        gastoPrevisto,
      };

      // Armazena os dados no AsyncStorage (pode ser atualizado para salvar várias viagens)
      await AsyncStorage.setItem("@viagemCadastro", JSON.stringify(viagem));

      return { success: true, message: "Viagem salva com sucesso!" };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}

export default new CadastroViagemUseCase();

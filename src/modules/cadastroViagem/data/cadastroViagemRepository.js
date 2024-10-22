const cadastroViagemRepository = (axios) => async (payload) => {
    try {
      console.log("repository", payload);
  
      const response = await axios.post("/auth/viagem", payload);
  
      return response.data;
    } catch (error) {
      console.log("Erro no cadastroViagemRepository:", error);
      throw error;
    }
  };
  
  export default cadastroViagemRepository;
  
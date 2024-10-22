import cadastroViagemController from "../controller/cadastroviagemController";
import cadastroViagemRepository from "../data/cadastroViagemRepository";
import CadastroViagemUseCase from "../domain/usecase/cadastroViagemUseCase"; 
import axiosInstance from "./axios";

const cadastroViagemRepositoryImpl = cadastroViagemRepository(axiosInstance);

const cadastroViagemUseCaseImpl = new CadastroViagemUseCase(cadastroViagemRepositoryImpl);

const cadastroViagemControllerImpl = cadastroViagemController(cadastroViagemUseCaseImpl);

export { cadastroViagemControllerImpl };

import cadastroviagemController from "../controller/cadastroviagemController";
import addNovaViagemRepository from "../data/addNovaViagemRepository";
import addNovaViagemUseCase from "../domain/addNovaViagemUseCase";
import axiosInstance from "./axios";

const loginRepositoryImpl = addNovaViagemRepository(axiosInstance);
console.log(loginRepositoryImpl, "repoimpl");

const loginUseCaseImpl = addNovaViagemUseCase(loginRepositoryImpl);
console.log(loginUseCaseImpl, "useimpl");

export const cadastroviagemControllerImpl = cadastroviagemController(loginUseCaseImpl);

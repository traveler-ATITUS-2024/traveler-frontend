import cadastroviagemController from "../controller/cadastroviagemController";
import addNovaViagemRepository from "../data/addNovaViagemRepository";
import addNovaViagemUseCase from "../domain/addNovaViagemUseCase";
import axiosInstance from "./axios";

const addNovaViagemRepositoryImpl = addNovaViagemRepository(axiosInstance);
console.log(addNovaViagemRepositoryImpl, "repoimpl");

const addNovaViagemUseCase = addNovaViagemUseCase(addNovaViagemRepositoryImpl);
console.log(addNovaViagemUseCase, "useimpl");

export const cadastroviagemControllerImpl = cadastroviagemController(addNovaViagemUseCase);

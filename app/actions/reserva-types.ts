export type ReservaState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const RESERVA_INITIAL_STATE: ReservaState = {
  status: "idle",
  message: "",
};

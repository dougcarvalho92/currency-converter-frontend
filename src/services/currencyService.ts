import api from "./api";

const CurrencyService = {
  async loadRates() {
    return await api.get("/").then((result) => result.data);
  },
  async converterCurrency(origin: string, destination: string, value: number) {
    return;
  },
};
export default CurrencyService;

import axios from "axios";

const URL = "https://fe-task-api.mainstack.io";

export const getUser = async () => {
  try {
    const response = await axios.get(`${URL}/user`);
    return response.data;
  } catch (error) {
    console.log("user error: ", error);
  }
};

export const getWallet = async () => {
  try {
    const response = await axios.get(`${URL}/wallet`);
    return response.data;
  } catch (error) {
    console.log("wallet error: ", error);
  }
};

export const getTransactions = async () => {
  try {
    const response = await axios.get(`${URL}/transactions`);
    return response.data;
  } catch (error) {
    console.log("transaction error", error);
  }
};

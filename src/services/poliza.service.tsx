import axios from "axios";

const USER_URL = `${import.meta.env.VITE_API_URL}/poliza`;

type PolizaProps = {
  asegurado: string;
  productor: string;
  compañia: string;
  riesgo: string;
  numeroPoliza: string;
  detalle: string;
  estado: string;
  vigenciaInicio: Date;
  vigenciaFin: Date;
  moneda: string;
  premio: string;
  formaDePago: string;
  numero?: string;
};

export const getPolizas = async () => {
  try {
    const res = await axios.get(`${USER_URL}`, { withCredentials: true });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createPoliza = async (polizaData: PolizaProps) => {
  try {
    const res = await axios.post(
      `${USER_URL}`,
      { ...polizaData },
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

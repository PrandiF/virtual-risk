import axios from "axios";
// import { useState } from "react";

const USER_URL = `${import.meta.env.VITE_API_URL}/poliza`;

type PolizaProps = {
  id: number;
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

type FilterProps = {
  asegurado: string;
  compañia: string;
  detalle: string;
  estado: string;
  vigenciaInicio: Date | null;
  vigenciaFin: Date | null;
};

export const getPolizas = async () => {
  try {
    const res = await axios.get(`${USER_URL}`, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.error("Error al obtener las polizas:", error);
    throw error;
  }
};

export const getPoliza = async () => {
  try {
    const res = await axios.get(`${USER_URL}`, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.error("Error al obtener la poliza:", error);
    throw error;
  }
};

export const getFilterPoliza = async (filter: FilterProps) => {
  console.log("FILTRAR");
  // const [response, setResponse] = useState([])
  let filterClean: FilterProps = {
    asegurado: filter.asegurado,
    compañia: filter.compañia,
    detalle: filter.detalle,
    estado: filter.estado,
    vigenciaInicio: filter.vigenciaInicio,
    vigenciaFin: filter.vigenciaFin,
  };

  if (
    filter.vigenciaInicio &&
    new Date(filter.vigenciaInicio).toLocaleDateString() === "31/12/1899"
  ) {
    filterClean.vigenciaInicio = null;
  }
  if (
    filter.vigenciaFin &&
    new Date(filter.vigenciaFin).toLocaleDateString() === "31/12/1899"
  ) {
    filterClean.vigenciaFin = null;
  }
  // const newUrl = async () => {
  let stringReq = "";
  Object.keys(filterClean).forEach((key) => {
    if (
      filterClean[key as keyof FilterProps] === "" ||
      filterClean[key as keyof FilterProps] === null
    ) {
      delete filterClean[key as keyof FilterProps];
    } else {
      if (stringReq.includes("?")) {
        stringReq =
          stringReq + `&${key}=${filterClean[key as keyof FilterProps]}`;
      } else {
        stringReq =
          stringReq + `?${key}=${filterClean[key as keyof FilterProps]}`;
      }
    }
  });
  console.log(stringReq);
  try {
    const res = await axios.get(`${USER_URL}/filter${stringReq}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error al filtrar la/las poliza/s:", error);
    throw error;
  }
  // }
  // newUrl()
  // return response;
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
    console.error("Error al crear la poliza:", error);
    throw error;
  }
};

export const getPolizaByPolizaNumber = async (id: string) => {
  try {
    console.log(`Requesting policy with id: ${id}`);
    const res = await axios.get(`${USER_URL}/poliza/${id}`, {
      withCredentials: true,
    });
    console.log("Response:", res);
    return res.data;
  } catch (error) {
    console.error("Error al obtener la poliza:", error);
    throw error;
  }
};

export const deletePoliza = async (id: number) => {
  try {
    await axios.delete(`${USER_URL}/${id}`, { withCredentials: true });
    console.log("Poliza eliminada:", id);
  } catch (error) {
    console.log("Error al eliminar la poliza:", error);
    throw error;
  }
};

export const editPoliza = async (id: number, data: PolizaProps) => {
  try {
    const res = await axios.put(
      `${USER_URL}/${id}`,
      { data },
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.log("Error al editar la poliza:", error);
    throw error;
  }
};

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
  vigenciaInicio: Date | string;
  vigenciaFin: Date | string;
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

export const getPolizaByPolizaNumber = async (polizaNumber: string) => {
  try {
    const res = await axios.get(`${USER_URL}/${polizaNumber}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error al obtener la poliza:", error);
    throw error;
  }
};

export const deletePoliza = async (polizaNumber: string) => {
  try {
    const res = await axios.delete(`${USER_URL}/${polizaNumber}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log("Error al eliminar la poliza:", error);
    throw error;
  }
};

export const editPoliza = async (
  polizaNumber: string,
  data: PolizaProps,
  state: string,
  change: boolean
) => {
  const dataClean =
    state == "ANULADA" && change
      ? { ...data, estado: "" }
      : change
      ? { ...data, estado: "ANULADA" }
      : { ...data };
  try {
    const res = await axios.put(
      `${USER_URL}/${polizaNumber}`,
      { ...dataClean },
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.log("Error al editar la poliza:", error);
    throw error;
  }
};

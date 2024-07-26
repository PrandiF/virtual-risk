import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { getFilterPoliza, getPolizas } from "../../services/poliza.service";
import { useEffect, useState } from "react";

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
  premio: number;
  formaDePago: string;
  numero?: string;
};

type FilterProps = {
  filter: {
    asegurado: string;
    compañia: string;
    detalle: string;
    estado: string;
    vigenciaInicio: Date;
    vigenciaFin: Date;
  };
  isFilter: boolean;
  pageTotal: number;
  pageFilter: number;
};

function TablaConsulta({ filter, isFilter, pageTotal, pageFilter }: FilterProps) {
  const navigate = useNavigate();
  const [polizas, setPolizas] = useState([]);
  const [arrayFilter, setArrayFilter] = useState([]);
  useEffect(() => {
    try {
      getPolizas(pageTotal).then((res) => {
        if (!res) setPolizas([]);
        setPolizas(res);
      });
    } catch (error) {
      throw error;
    }
  }, [pageTotal]);

  useEffect(() => {
    if (isFilter) {
      try {
        getFilterPoliza(filter, pageFilter).then((res) => {
          if (!res) {
            setArrayFilter([]);
          } else {
            setArrayFilter(res);
          }
        });
      } catch (error) {
        console.error(error);
        setArrayFilter([]);
      }
    }
  }, [isFilter, pageFilter]);
  return (
    <Table className="xl:w-[80%] md:w-[85%] w-[95%] rounded-lg">
      <thead className="bg-orange1 opacity-80 text-white xl:text-lg md:text-base text-[13px] rounded-lg">
        <tr className="text-center rounded-lg">
          <th className="w-[16%]">Asegurado</th>
          <th className="w-[16%]">Compañía</th>
          <th className="w-[16%]">Detalle/Patente</th>
          <th className="w-[16%]">Póliza</th>
          <th className="w-[16%]">Estado</th>
          <th className="w-full xl:flex hidden justify-center py-3">
            Vigencia inicio/fin
          </th>
        </tr>
      </thead>
      <tbody className="bg-white opacity-90 text-black xl:text-lg md:text-base text-[12px] w-full rounded-lg">
        {polizas && !isFilter
          ? polizas.map((poliza: PolizaProps, i) => (
            <tr key={i} className="text-center">
              <td className="w-[16%]">{poliza.asegurado}</td>
              <td className="w-[16%]">{poliza.compañia}</td>
              <td className="w-[16%]">{poliza.detalle}</td>
              <td className="w-[16%]">
                <button
                  onClick={() =>
                    navigate(
                      `/consultar/consulta-individual/${poliza.numeroPoliza}`
                    )
                  }
                  className="text-orange1 underline"
                >
                  {poliza.numeroPoliza}
                </button>
              </td>
              <td
                className={`${{
                  VENCIDA:
                    "bg-[linear-gradient(to_right,_white_0%,_rgba(255,166,166,0.8)_15%,_rgba(255,166,166,1)_85%,_white_100%)]",
                  VIGENTE:
                    "bg-[linear-gradient(to_right,_white_0%,_rgba(166,227,149,0.8)_15%,_rgba(166,227,149,1)_85%,_white_100%)]",
                  ANULADA:
                    "bg-[linear-gradient(to_right,_white_0%,_rgba(176,176,176,0.8)_15%,_rgba(176,176,176,1)_85%,_white_100%)]",
                }[poliza.estado] || ""
                  } text-white font-semibold w-[16%]`}
              >
                {poliza.estado.toUpperCase()}
              </td>
              <td className="py-3 px-1 xl:flex justify-center hidden w-full">
                {new Date(
                  new Date(poliza.vigenciaInicio).setDate(
                    new Date(poliza.vigenciaInicio).getDate() + 1
                  )
                ).toLocaleDateString() +
                  " - " +
                  new Date(
                    new Date(poliza.vigenciaFin).setDate(
                      new Date(poliza.vigenciaFin).getDate() + 1
                    )
                  ).toLocaleDateString()}
              </td>
            </tr>
          ))
          : Array.isArray(arrayFilter) && arrayFilter.map((poliza: PolizaProps, i) => (
            <tr key={i} className="text-center">
              <td className="w-[16%]">{poliza.asegurado}</td>
              <td className="w-[16%]">{poliza.compañia}</td>
              <td className="w-[16%]">{poliza.detalle}</td>
              <td className="w-[16%]">
                <button
                  onClick={() =>
                    navigate(
                      `/consultar/consulta-individual/${poliza.numeroPoliza}`
                    )
                  }
                  className="text-orange1 underline"
                >
                  {poliza.numeroPoliza}
                </button>
              </td>
              <td
                className={` ${{
                  VENCIDA:
                    "bg-[linear-gradient(to_right,_white_0%,_rgba(255,166,166,0.8)_15%,_rgba(255,166,166,1)_85%,_white_100%)]",
                  VIGENTE:
                    "bg-[linear-gradient(to_right,_white_0%,_rgba(166,227,149,0.8)_15%,_rgba(166,227,149,1)_85%,_white_100%)]",
                  ANULADA:
                    "bg-[linear-gradient(to_right,_white_0%,_rgba(176,176,176,0.8)_15%,_rgba(176,176,176,1)_85%,_white_100%)]",
                }[poliza.estado] || ""
                  } text-white font-semibold w-[16%]`}
              >
                {poliza.estado.toUpperCase()}
              </td>
              <td className="py-2 px-1 xl:flex justify-center hidden w-full">
                {new Date(
                  new Date(poliza.vigenciaInicio).setDate(
                    new Date(poliza.vigenciaInicio).getDate() + 1
                  )
                ).toLocaleDateString() +
                  " - " +
                  new Date(
                    new Date(poliza.vigenciaFin).setDate(
                      new Date(poliza.vigenciaFin).getDate() + 1
                    )
                  ).toLocaleDateString()}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default TablaConsulta;

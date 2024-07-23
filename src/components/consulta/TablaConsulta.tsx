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
};

function TablaConsulta({ filter, isFilter }: FilterProps) {
  const navigate = useNavigate();
  const [polizas, setPolizas] = useState([]);
  const [arrayFilter, setArrayFilter] = useState([]);
  useEffect(() => {
    try {
      getPolizas().then((res) => {
        if (!res) setPolizas([]);
        setPolizas(res);
      });
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    if (isFilter) {
      try {
        getFilterPoliza(filter).then((res) => {
          if (!res) setArrayFilter([]);
          setArrayFilter(res);
        });
      } catch (error) {
        throw error;
      }
    }
  }, [isFilter]);
  return (
    <Table className="xl:w-[80%] md:w-[85%] w-[99%] rounded-lg shadow-xl">
      <thead className="bg-orange1 opacity-80 text-white xl:text-lg md:text-base text-[13px] rounded-lg">
        <tr className="text-center rounded-lg">
          <th className="xl:p-2 p-1">Asegurado</th>
          <th className="xl:p-2 p-1">Compañía</th>
          <th className="xl:p-2 p-1">Detalle/Patente</th>
          <th className="xl:p-2 p-1">Póliza</th>
          <th className="xl:p-2 p-1">Estado</th>
          <th className="xl:p-2 p-1 xl:flex hidden justify-center">
            Vigencia inicio/fin
          </th>
        </tr>
      </thead>
      <tbody className="bg-white opacity-90 text-black xl:text-lg md:text-base text-[12px] rounded-lg">
        {polizas && !isFilter
          ? polizas.map((poliza: PolizaProps, i) => (
              <tr key={i} className="text-center">
                <td className="xl:p-2 p-1">{poliza.asegurado}</td>
                <td className="xl:p-2 p-1">{poliza.compañia}</td>
                <td className="xl:p-2 p-1">{poliza.detalle}</td>
                <td className="xl:p-2 p-1">
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
                <td className="bg-[#FFA6A6] text-white font-semibold p-2">
                  {poliza.estado}
                </td>
                <td className="p-2 xl:flex justify-center hidden">
                  {new Date(
                    new Date(poliza.vigenciaInicio).setDate(
                      new Date(poliza.vigenciaInicio).getDate() + 1
                    )
                  ).toLocaleDateString()}{" "}
                  -
                  {new Date(
                    new Date(poliza.vigenciaFin).setDate(
                      new Date(poliza.vigenciaFin).getDate() + 1
                    )
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))
          : arrayFilter.map((poliza: PolizaProps, i) => (
              <tr key={i} className="text-center">
                <td className="xl:p-2 p-1">{poliza.asegurado}</td>
                <td className="xl:p-2 p-1">{poliza.compañia}</td>
                <td className="xl:p-2 p-1">{poliza.detalle}</td>
                <td className="xl:p-2 p-1">
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
                <td className="bg-[#FFA6A6] text-white font-semibold p-2">
                  {poliza.estado}
                </td>
                <td className="p-2 xl:flex justify-center hidden">
                  {new Date(
                    new Date(poliza.vigenciaInicio).setDate(
                      new Date(poliza.vigenciaInicio).getDate() + 1
                    )
                  ).toLocaleDateString()}{" "}
                  -
                  {new Date(
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

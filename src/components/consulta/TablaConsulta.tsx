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

function TablaConsulta({
  filter,
  isFilter,
  pageTotal,
  pageFilter,
}: FilterProps) {
  const navigate = useNavigate();
  const [polizas, setPolizas] = useState<PolizaProps[]>([]);
  const [arrayFilter, setArrayFilter] = useState<PolizaProps[]>([]);
  const [arrayEmpty, setArrayEmpty] = useState(false);

  useEffect(() => {
    try {
      getPolizas(pageTotal).then((res) => {
        if (!res || res.length === 0) {
          setPolizas([]);
          setArrayEmpty(true);
        } else {
          setPolizas(res);
          setArrayEmpty(false);
        }
      });
    } catch (error) {
      console.error(error);
      setPolizas([]);
      setArrayEmpty(true);
    }
  }, [pageTotal]);

  useEffect(() => {
    if (isFilter) {
      try {
        getFilterPoliza(filter, pageFilter).then((res) => {
          if (!res || res.length === 0) {
            setArrayFilter([]);
            setArrayEmpty(true);
          } else {
            setArrayFilter(res);
            setArrayEmpty(false);
          }
        });
      } catch (error) {
        console.error(error);
        setArrayFilter([]);
        setArrayEmpty(true);
      }
    }
  }, [isFilter, pageFilter]);

  return (
    <Table className="xl:w-[80%] md:w-[85%] w-[90%] rounded-lg">
      <thead className="bg-orange1 opacity-80 text-white xl:text-lg md:text-base text-[13px] rounded-lg">
        <tr className="text-center rounded-lg">
          <th className="max-w-[16%] xl:py-0 py-2  xl:px-2 px-1">Asegurado</th>
          <th className="max-w-[16%] xl:py-0 py-2 ">Compañía</th>
          <th className="max-w-[16%] xl:py-0 py-2 ">Detalle/Patente</th>
          <th className="max-w-[16%] xl:py-0 py-2 ">Póliza</th>
          <th className="max-w-[16%] xl:py-0 py-2 ">Estado</th>
          <th className="w-full xl:flex hidden justify-center py-2">
            Vigencia inicio/fin
          </th>
        </tr>
      </thead>
      <tbody className="bg-white opacity-90 text-black xl:text-lg md:text-base text-[12px] w-full rounded-lg">
        {arrayEmpty ? (
          <tr>
            <td colSpan={6} className="text-center py-3">
              No se encontró ninguna poliza.
            </td>
          </tr>
        ) : (
          <>
            {polizas && !isFilter
              ? polizas.map((poliza: PolizaProps, i) => (
                  <tr key={i} className="text-center">
                    <td className="max-w-[16%] xl:py-0 py-3">
                      {poliza.asegurado.length > 8
                        ? `${poliza.asegurado.substring(0, 8)}...`
                        : poliza.asegurado}
                    </td>
                    <td className="max-w-[16%] xl:py-0 py-3 ">
                      {poliza.compañia.length > 8
                        ? `${poliza.compañia.substring(0, 8)}...`
                        : poliza.compañia}
                    </td>
                    <td className="max-w-[16%] xl:py-0 py-3 ">
                      {poliza.detalle.length > 8
                        ? `${poliza.detalle.substring(0, 8)}...`
                        : poliza.detalle}
                    </td>
                    <td className="max-w-[16%] xl:py-0 py-3 ">
                      <button
                        onClick={() =>
                          navigate(
                            `/consultar/consulta-individual/${poliza.numeroPoliza}`
                          )
                        }
                        className="text-orange1 underline "
                      >
                        {poliza.numeroPoliza.length > 8
                          ? `${poliza.numeroPoliza.substring(0, 8)}...`
                          : poliza.numeroPoliza}
                      </button>
                    </td>
                    <td
                      className={`${
                        {
                          VENCIDA:
                            "bg-[linear-gradient(to_right,_white_0%,_rgba(255,166,166,0.8)_15%,_rgba(255,166,166,1)_85%,_white_100%)]",
                          VIGENTE:
                            "bg-[linear-gradient(to_right,_white_0%,_rgba(166,227,149,0.8)_15%,_rgba(166,227,149,1)_85%,_white_100%)]",
                          ANULADA:
                            "bg-[linear-gradient(to_right,_white_0%,_rgba(176,176,176,0.8)_15%,_rgba(176,176,176,1)_85%,_white_100%)]",
                        }[poliza.estado] || ""
                      } text-white font-semibold max-w-[16%] xl:py-0 py-3  px-1.5`}
                    >
                      {poliza.estado.toUpperCase()}
                    </td>
                    <td className="py-3 px-1 xl:flex justify-center hidden w-full ">
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
              : Array.isArray(arrayFilter) &&
                arrayFilter.length >= 1 &&
                arrayFilter.map((poliza: PolizaProps, i) => (
                  <tr key={i} className="text-center">
                    <td className="max-w-[16%] xl:py-0 py-3 ">
                      {poliza.asegurado.length > 8
                        ? `${poliza.asegurado.substring(0, 8)}...`
                        : poliza.asegurado}
                    </td>
                    <td className="max-w-[16%] xl:py-0 py-3 ">
                      {poliza.compañia.length > 8
                        ? `${poliza.compañia.substring(0, 8)}...`
                        : poliza.compañia}
                    </td>
                    <td className="max-w-[16%] xl:py-0 py-3 ">
                      {poliza.detalle.length > 8
                        ? `${poliza.detalle.substring(0, 8)}...`
                        : poliza.detalle}
                    </td>
                    <td className="max-w-[16%] xl:py-0 py-3 ">
                      <button
                        onClick={() =>
                          navigate(
                            `/consultar/consulta-individual/${poliza.numeroPoliza}`
                          )
                        }
                        className="text-orange1 underline "
                      >
                        {poliza.numeroPoliza.length > 8
                          ? `${poliza.numeroPoliza.substring(0, 8)}...`
                          : poliza.numeroPoliza}
                      </button>
                    </td>
                    <td
                      className={`${
                        {
                          VENCIDA:
                            "bg-[linear-gradient(to_right,_white_0%,_rgba(255,166,166,0.8)_15%,_rgba(255,166,166,1)_85%,_white_100%)]",
                          VIGENTE:
                            "bg-[linear-gradient(to_right,_white_0%,_rgba(166,227,149,0.8)_15%,_rgba(166,227,149,1)_85%,_white_100%)]",
                          ANULADA:
                            "bg-[linear-gradient(to_right,_white_0%,_rgba(176,176,176,0.8)_15%,_rgba(176,176,176,1)_85%,_white_100%)]",
                        }[poliza.estado] || ""
                      } text-white font-semibold max-w-[16%] xl:py-0 py-3  px-1.5`}
                    >
                      {poliza.estado.toUpperCase()}
                    </td>
                    <td className="py-3 px-1 xl:flex justify-center hidden w-full ">
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
          </>
        )}
      </tbody>
    </Table>
  );
}

export default TablaConsulta;

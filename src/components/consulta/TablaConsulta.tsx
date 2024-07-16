import Table from "react-bootstrap/Table";

function TablaConsulta() {
  return (
    <Table className="xl:w-[70%] md:w-[85%] w-[95%]">
      <thead className="bg-orange1 text-white xl:text-lg md:text-base text-[10px]">
        <tr className="text-center">
          <th className="xl:p-2 p-0.5">Asegurado</th>
          <th className="xl:p-2 p-0.5">Riesgo</th>
          <th className="xl:p-2 p-0.5">Compañía</th>
          <th className="xl:p-2 p-0.5">Póliza</th>
          <th className="xl:p-2 p-0.5">Estado</th>
          <th className="xl:p-2 p-0.5">Vigencia Inicio</th>
          <th className="xl:p-2 p-0.5">Vigencia Fin</th>
        </tr>
      </thead>
      <tbody className="bg-orange-100 text-black xl:text-lg md:text-base text-[10px]">
        <tr className="text-center">
          <td className="xl:p-2 p-0.5">Pérez, Juan</td>
          <td className="xl:p-2 p-0.5">Automotor</td>
          <td className="xl:p-2 p-0.5">Allianz</td>
          <td className="xl:p-2 p-0.5">
            <a
              href="/consultar/consulta-individual"
              className="text-orange1 underline"
            >
              3-55963698
            </a>
          </td>
          <td className="bg-[#FFA6A6] text-white p-2">Vencida</td>
          <td className="p-2">15-02-2023</td>
          <td className="p-2">15-05-2024</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TablaConsulta;

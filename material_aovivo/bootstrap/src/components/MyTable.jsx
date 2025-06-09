import Table from 'react-bootstrap/Table';

function MyTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Plano</th>
          <th>Tempo</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Basico</td>
          <td>4 meses</td>
          <td>R$ 120,00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Intermediario</td>
          <td>4 meses</td>
          <td>R$ 220,00</td>
        </tr>
       <tr>
          <td>3</td>
          <td>Avançado</td>
          <td>4 meses</td>
          <td>R$ 520,00</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTable;
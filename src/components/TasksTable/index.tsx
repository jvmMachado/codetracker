import styles from "./styles.module.scss";

export function TasksTable() {

  return(
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
            <tr>
              <td>Primeira Task</td>
              <td>
                FAZER NÃO SEI O QUE
              </td>
              <td>FINALIZADA</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date('2021-07-15'))}
              </td>
            </tr>
            <tr>
              <td>Segunda Task</td>
              <td>
              FAZER ALGUMA COISA
              </td>
              <td>A FAZER</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date('2021-07-19'))}
              </td>
            </tr>
            <tr>
              <td>Primeira Task</td>
              <td>
                SITE DE PADARIA
              </td>
              <td>A FAZER</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date('2021-07-20'))}
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};
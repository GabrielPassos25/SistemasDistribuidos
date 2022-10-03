/**
 * Componente de Tabela - Responsável por controlar a renderização dos dados em tabelas. Assume propriedades genéricas para a renderização de dados.
 * */

// Styles
import {
    Container,
    TableArea,
    TableRow,
    TableColumn,
    Value,
    TableHeader,
    TableHead,
} from './styles';

// Types
interface TableProps {
    data?: any[][]; // Dados que serão renderizados na tabela.
    headers?: string[]; // Títulos das colunas.
    noMargin?: boolean; // Indica se a tabela deve ter margens superiores.
    dataLabel?: string[]; // Nomes dos dados que serão renderizados.
}

/**
 *  ==== EXEMPLO DE USO ====
 * const tableData = []
 * mockData.map(data => {
 *   return(tableData.push([data.val1, data.val2, ... , data.valN]))
 * })
 * (...)
 * return (
 *  <Table data={tableData} headers={["header1", "header2", ... , "headerN"]}/>
 * )
* */

// Renderer
export function Table({ data = [], headers, noMargin, dataLabel }: TableProps) {
    return (
        <Container noMargin={noMargin}>
            <TableHeader>
                <TableRow>
                    {
                        headers?.map((header, index) => (
                            <TableHead key={index}>
                                {header}
                            </TableHead>
                        ))
                    }
                </TableRow>
            </TableHeader>
            <TableArea>
                {
                    data.map((data, index) => (
                        <TableRow key={index}>
                            {
                                data.map((value, index) => (
                                    <TableColumn key={index} data-label={(headers && headers[index]) || (dataLabel && dataLabel[index])}>
                                        <Value>
                                            {value}
                                        </Value>
                                    </TableColumn>
                                ))
                            }
                        </TableRow>
                    ))
                }
            </TableArea>
        </Container>
    );
}
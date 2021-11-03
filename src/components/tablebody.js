import './table.css';

const TableBody = (props) => {
    const rows = props.customerData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.city}</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
                <td>
                    <button className="button-del" onClick={() => props.removeCustomer(index)}></button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

export default TableBody;
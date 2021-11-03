import TableHeader from "./tableheader";
import TableBody from "./tablebody";

const Table = (props) => {

    const { customerData, removeCustomer } = props

    return (
        <table className="tt">
            <TableHeader />
            <TableBody customerData={customerData} removeCustomer={removeCustomer} />
        </table>
    )

}

export default Table;
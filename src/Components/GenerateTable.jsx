import React, { useState } from "react";

function GenerateTable() {
    const [number, setNumber] = useState(0);

    const generateTable = () => {
        const rows = [];
        for (let i = 1; i <= 10; i++) {
            rows.push(
                <tr key={i}>
                    <td>{i}</td>
                    <td>{i * number}</td>
                </tr>
            );
        }
        return rows;
    };

    const updateTable = () => {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        setNumber(randomNum);
    };

    return (
        <div>
            <h1>Generate Table..</h1>
            <p>Random Number: = {number}</p>

            <button onClick={updateTable}>Generate Random Number</button>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Table</th>
                    </tr>
                </thead>
                <tbody>{generateTable()}</tbody>
            </table>
        </div>
    );
}

export default GenerateTable;

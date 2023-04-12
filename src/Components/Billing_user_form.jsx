import { useState } from "react";


function Billing() {

    const [customerName, setCustomerName] = useState("")
    const [billingItem, setBillingItem] = useState([{ product: "", quantity: "" }])

    const handleAddItem = () => {
        setBillingItem([...billingItem, { product: "", quantity: "" }]);
    };



    return (

        <form >
            <div>
                <h1>Billing Form</h1>
                <label>Customer Name :</label>
                <input type="text" id="customerName" onChange={(e) => setCustomerName(e.target.value)} />
            </div>
            <hr /><hr />

            {billingItem.map((item, index) => (

                <div key={index} className="container">
                    <label >Select Product:= </label> <br/><br/>
                    <select  name="product" value={item.product} onChange={(e) => setBillingItem([...billingItem.slice(0, index), { product: e.target.value }, ...billingItem.slice(index + 1)])}>
                        
                        <option value="">Select a product</option>
                        <option value="product1">Sugar</option>
                        <option value="product2">Coffee</option>
                        <option value="product3">milk</option>

                    </select>

                    <label>Quantity:</label>
                    <input type="number" placeholder="Quantity" value={item.quantity} onChange={(e) => setBillingItem([...billingItem.slice(0, index), {quantity: e.target.value }, ...billingItem.slice(index + 1)])} />
                <hr/>
                </div>
            ))}

                <button type="button" onClick={handleAddItem}> Add More </button>
        </form>
    )
}
export default Billing;
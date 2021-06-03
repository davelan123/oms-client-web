import React from 'react';
import { useSelector} from "react-redux";

function SummaryInfo() {
    const {firstName, lastName, country, city, phone } = useSelector((state) => state.contactsVault.formData);
    const delivery = useSelector((state) => state.deliveryVault.deliveryMethod);
    const payment = useSelector((state) => state.paymentVault.paymentMethod);
    const getDeliveryTime = (delivery) => {
        if(delivery){
            if(delivery==="DHL"){
                return "Today";
            }else if (delivery==="UDH"){
                return "3 Days";
            }else if (delivery==="DPD"){
                return "1-2 Days";
            }else if (delivery === "HFG") {
                return "5 Days";
            }
            return;
        }
        else  return "Please contact us for more information."
    };
    return (
      <div className="info">
        <div className="contacts">
          <h4 className="contacts_title">Contact Summary:</h4>
          <ul className="contacts_list">
            <li className="contacts__item">First Name:</li>
            <li className="contacts__item">Last Name:</li>
            <li className="contacts__item">Country:</li>
            <li className="contacts__item">Phone:</li>
          </ul>
        </div>
        <div className="delivery">
            <h4 className="delivery__title">Delivery title:</h4>
            <ul className="delivery__list">
                <li className="delivery_item">
                    {delivery} / {getDeliveryTime(delivery)}
                </li>
            </ul>
        </div>
        <div className="payment">
            <h4 className="payment__title">Payment title:</h4>
            <ul className="payment__list">
                <li className="payment__item">{payment}</li>
            </ul>
        </div>
      </div>
    );
}

export default SummaryInfo;
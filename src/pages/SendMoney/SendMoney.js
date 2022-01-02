import { useState } from "react";
import ConfirmSend from "./components/ConfirmSend";
import SendMoneyForm from "./components/SendMoneyForm";

function SendMoney() {
  const [transaction, setTransaction] = useState(null);
  return (
    <div className="p-4">
      {!transaction && <SendMoneyForm onSuccess={setTransaction} />}
      {transaction && <ConfirmSend />}
    </div>
  );
}

export default SendMoney;

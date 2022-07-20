import { React, useState } from "react";
import axios from "axios";
import Getapi from "../../services/Getapi";

const Predict = async ({ selectedRows, setData }) => {
  console.log("Predict called");
  for (const rows of selectedRows) {
    let business_code = rows["business_code"];
    let cust_number = rows["cust_number"];
    let name_customer = "highradius";
    let clear_date = rows["clear_date"];
    let buisness_year = rows["buisness_year"].slice(0, 4);
    let doc_id = rows["doc_id"];
    let posting_date = rows["posting_date"];
    let due_in_date = rows["due_in_date"];
    let baseline_create_date = rows["baseline_create_date"];
    let cust_payment_terms = rows["cust_payment_terms"];
    let posting_id = rows["posting_id"];
    let invoice_id = rows["invoice_id"];
    let isOpen = rows["isOpen"];
    let invoice_currency = rows["invoice_currency"];
    let document_type = rows["document_type"];
    let document_create_date = rows["document_create_date"];
    let document_create_date1 = rows["document_create_date1"];
    let sl_no = rows["sl_no"];
    let converted_usd = rows["converted_usd"];
    console.log(converted_usd);
    if (rows["clear_date"] === "0000-00-00") {
      clear_date = "";
    }
    console.log(clear_date);
    if (rows["converted_usd"] === undefined) {
      converted_usd = rows["total_open_amount"];
    }
    console.log(buisness_year);

    const predictData = {
      business_code: business_code,
      cust_number: cust_number,
      name_customer: name_customer,
      clear_date: clear_date,
      buisness_year: buisness_year,
      doc_id: doc_id,
      posting_date: posting_date,
      due_in_date: due_in_date,
      baseline_create_date: baseline_create_date,
      cust_payment_terms: cust_payment_terms,
      converted_usd: converted_usd,
      posting_id: posting_id,
      invoice_id: invoice_id,
      isOpen: isOpen,
      invoice_currency: invoice_currency,
      document_type: document_type,
      document_create_date: document_create_date,
      document_create_date1: document_create_date1,
      sl_no: sl_no,
    };
    console.log(predictData);
    let response = await axios.post("http://127.0.0.1:5000/", predictData);
    console.log(response.data);

    const newResponse = await axios.post(
      "http://localhost:8080/HRC62093WK-BACKEND/Predict",
      { ...response.data[0], sl_no: rows["sl_no"] }
    );
    console.log(newResponse.data);
  }
  Getapi({ setData });
};

export default Predict;

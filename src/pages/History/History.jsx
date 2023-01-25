import React from "react";
import "./History.css";
import DataTable from "react-data-table-component";
import { data } from "./Data";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function History() {
  const columns = [
    {
      name: "S.No",
      selector: "id",
      sortable: true,
    },
    {
      name: "Service Name",
      cell: (row) => <a className="text-primary">{row.service}</a>,
      sortable: true,
    },
    {
      name: "Order Id",
      selector: "order",
      sortable: true,
    },
    {
      name: "Date",
      selector: "date",
      sortable: true,
    },
    {
      name: "Payment",
      selector: "payment",
      sortable: true,
    },

    {
      name: "Status",
      selector: "status",
      sortable: false,
    },
    {
      name: "Action",
      cell: (row) =>[
      <button className="view-btn">view</button>,
      <i class="fa-solid fa-trash-can text-danger m-3"></i>
    ],
      sortable: false,
    },
  ];

  return (
    <>
    <Header></Header>
      <div className="container-fluid history-head">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>History</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid table mb-0 pb-0">
        <div className="row">
          <div className="col-md-10 m-auto mt-5">
            <p className="hist-subhead">History<span>Total Balance: &nbsp;  <b>   $2034.00</b></span></p>
            
            <DataTable
              columns={columns}
              data={data}
              pagination={10}
              noDataComponent="Loading..."
              fixedHeader
              highlightOnHover
            />
              <span className="clear text-danger mt-3 mb-3">Clear All</span>
          </div>
        </div>
      

        
      </div>
    <Footer></Footer>
    </>
  );
}
export default History;

import React, { Component } from "react";

class Stock extends Component {
  dummyData = [
    { c1: "xxx", c2: "xxx", c3: "xxx", c4: "xxx", c5: "xxx" },
    { c1: "xxx", c2: "xxx", c3: "xxx", c4: "xxx", c5: "xxx" },
    { c1: "xxx", c2: "xxx", c3: "xxx", c4: "xxx", c5: "xxx" },
    { c1: "xxx", c2: "xxx", c3: "xxx", c4: "xxx", c5: "xxx" },
    { c1: "xxx", c2: "xxx", c3: "xxx", c4: "xxx", c5: "xxx" },
  ];

  renderRows = () => {
    return this.dummyData.map((item) => (
      <tr>
        <td>{item.c1}</td>
        <td>{item.c2}</td>
        <td>{item.c3}</td>
        <td>{item.c4}</td>
        <td>{item.c5}</td>
      </tr>
    ));
  };
  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Data Tables
            <small>advanced tables</small>
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="#">Tables</a>
            </li>
            <li className="active">Data tables</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Hover Data Table</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                        <th>CSS grade</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderRows()}</tbody>
                  </table>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}

export default Stock;

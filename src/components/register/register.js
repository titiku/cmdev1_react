import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "./../../actions/register.action";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  showError = () => {
    return (
      <div className="alert alert-danger alert-dismissible">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <h5>
          <i className="icon fa fa-ban" /> Error!
        </h5>
        Incorrect information
      </div>
    );
  };

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Stock</b>Register
          </a>
        </div>
        {/* /.regis-logo */}
        <div
          className="login-box-body"
          style={{ background: "whitesmoke", borderRadius: 10 }}
        >
          <p className="login-box-msg">Sign in to start your session</p>
          <form>
            <div className="form-group has-feedback">
              <input
                onChange={(e) => this.setState({ username: e.target.value })}
                name="username"
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                onChange={(e) => this.setState({ password: e.target.value })}
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            {this.props.registerReducer.isError && this.showError()}

            <div className="row">
              <div className="col-xs-8"></div>
              {/* /.col */}
              <div className="col-xs-12">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.register(this.props.history, this.state);
                  }}
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Register
                </button>
              </div>
              <div className="col-xs-12">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.history.goBack();
                  }}
                  style={{ marginTop: 8 }}
                  className="btn btn-block btn-default"
                >
                  Cancel
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
        </div>
        {/* /.regis-box-body */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  registerReducer: state.registerReducer,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

import React, { Component } from "react";
import { login,autoLogin } from "./../../actions/login.action";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "ßß",
    };
  }
  componentDidMount(){
    this.props.autoLogin(this.props.history)
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
            <b>Stock</b>Login
          </a>
        </div>
        {/* /.login-logo */}
        <div
          className="login-box-body"
          style={{ background: "whitesmoke", borderRadius: 10 }}
        >
          <p className="login-box-msg">Sign in to start your session</p>
          <form action="../../index2.html" method="post">
            <div className="form-group has-feedback">
              <input
                onChange={(e) => this.setState({ username: e.target.value })}
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                onChange={(e) => this.setState({ password: e.target.value })}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            {this.props.loginReducer.isError && this.showError()}
            <div className="row">
              <div className="col-xs-8"></div>
              {/* /.col */}
              <div className="col-xs-12">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.login(this.props.history, this.state);
                  }}
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Sign In
                </button>
              </div>
              <div className="col-xs-12">
                <button
                  onClick={() => this.props.history.push("/register")}
                  style={{ marginTop: 8 }}
                  type="submit"
                  className="btn btn-block btn-default"
                >
                  register
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
        </div>
        {/* /.login-box-body */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginReducer: state.loginReducer,
});

const mapDispatchToProps = {
  login,autoLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

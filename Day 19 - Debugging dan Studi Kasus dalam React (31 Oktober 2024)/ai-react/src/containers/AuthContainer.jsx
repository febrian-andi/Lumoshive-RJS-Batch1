import React, { Component } from "react";
import LoginModal from "../components/LoginModal";
import { login, register } from "../utils/api";

export default class AuthContainer extends Component {
  state = {
    isLogin: false,
    form: {
      username: "",
      password: "",
    },
    loading: false,
    error: null,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.setToken(token);
    }
  }

  toogleLogin = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    if (this.state.isLogin) {
      login(this.state.form)
      .then((res) => {
        alert("Login success");
        this.setState({
          isLogin: true,
          error: null,
          form: { username: "", password: "" },
        });
        localStorage.setItem("token", res.accessToken);
        window.location.reload();
      })
      .catch((err) => {
        this.setState({ error: err.response.data.error });
        console.log(this.state.error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
    } else {
      register(this.state.form)
        .then((res) => {
          alert("Register success");
          this.setState({
            isLogin: true,
            error: null,
            form: { username: "", password: "" },
          });
        })
        .catch((err) => {
          this.setState({ error: err.response.data.error });
          console.log(this.state.error);
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }

    this.setState({ loading: true, error: null });
  };

  render() {
    return (
      <div>
        <LoginModal
          form={this.state.form}
          loading={this.state.loading}
          error={this.state.error}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isLogin={this.state.isLogin}
          toogleLogin={this.toogleLogin}
        />
      </div>
    );
  }
}

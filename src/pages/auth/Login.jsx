import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../utils/Context";
import Loading from '../../component/Loading';
import Button from "../../component/Button";
import Input from "../../component/Input";
import Logo from "../../assets/logo.png";
import Layout from "../../component/Layout";

import { useNavigate } from 'react-router-dom';


const Login = (props) => {

  const { token, setToken } = useContext(TokenContext);

  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {

    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setLoading(false)
  }, []);

  const handleSubmit = async (e) => {

    setLoading(true);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "email": email,
      "password": password
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://mitramas-test.herokuapp.com/auth/login", requestOptions)
      .then(response => response.json())
      .then((result) => {
          localStorage.setItem("token", result.access_token);
          setToken(result.access_token);
          navigate("/");
      })
      .catch((error) => {
        alert(error.toString());
      })
  }


  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      // <Layout>
        <div className="h-screen flex lg:flex-row md:flex-row flex-col justify-center overflow-auto">
          <div className="w-full flex flex-col justify-center mt-28">
            <div className="text-center mb-28 ml-44">
              <img src={Logo} />
            </div>
          </div>
          <div className="w-full h-screen flex flex-col justify-center items-center bg-[#085E7D]">
            <h1
              id="Login"
              className="font-bold lg:text-5xl md:text-4xl text-3xl text-orange-500 pb-14"
            >
              LOGIN
            </h1>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="space-y-4 text-white flex flex-col lg:w-1/2 w-[80%]"
            >
              <Input
                id="loginEmail"
                className="bg-white rounded-md w-full"
                type="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                id="loginPassword"
                className="bg-white rounded-md w-full"
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-center">
                <Button
                onClick={() => handleSubmit()}
                  className={`bg-orange-500 text-white font-bold py-2 w-24 hover:shadow-md hover:shadow-gray-700 rounded-lg ${loading && "bg-orange-200 cursor-not-allowed"
                    }`}
                  id="btnLogin"
                  label="Login"
                  loading={loading || disabled}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      // </Layout>
    );
  }
}

export default Login;

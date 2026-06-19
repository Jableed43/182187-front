import { useState } from "react";
import useLoginUser from "../../hooks/user/useLoginUser";
import useAuth from "../../hooks/user/useAuth";

function LoginUserPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const {login} = useAuth()

  const {error, loginUser} = useLoginUser()

    const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

      const handleFormSubmit = async (e) => {
        e.preventDefault()
        const success = await loginUser(form.email, form.password)
        console.log(success)
        if(success){
            login(form)
            alert("Login!")
            setForm({
                email: "",
                password: ""
            })
            // TODO: falta redireccion a la home
        }
    }

  return (
    <>
      <h1> Login de usuario </h1>

      <form onSubmit={handleFormSubmit}>

        <label htmlFor="email">Email</label>
        <input
          onChange={handleInputChange}
          value={form.email}
          type="email"
          required
          name="email"
          id="email"
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          onChange={handleInputChange}
          form={form.password}
          type="password"
          required
          name="password"
          id="password"
        />
        <br />

        <button type="submit"> Login </button>
        <br />
        {error && <p> {error?.message || error} </p>}
      </form>
    </>
  );
}

export default LoginUserPage;

import { useState } from 'react'
import useRegisterUser from '../../hooks/user/useRegisterUser'
import useAuth from '../../hooks/user/useAuth'
import { notifySuccess, notifyError } from '../../utils/notify'

function RegisterUserPage() {
    // El rol por defecto es "cliente". Un admin logueado puede cambiarlo a "admin".
    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
        role: "cliente",
    })

    const { registerUser } = useRegisterUser()
    const { isAdmin } = useAuth()

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const success = await registerUser(form)
        if(success){
            setForm({
                email: "",
                name: "",
                password: "",
                role: "cliente",
            })
            notifySuccess("Usuario registrado", `La cuenta de ${success.name} se creó correctamente`)
        } else {
            notifyError("No se pudo registrar", "Ocurrió un error al crear la cuenta")
        }
    }

  return (
    <div className="container my-4" style={{ maxWidth: "420px" }}>
    <h1 className="mb-4"> Registrar usuario </h1>

    <form onSubmit={handleFormSubmit} className="w-100">

    <div className="mb-3 w-100">
      <label htmlFor="name" className="form-label">Nombre de usuario</label>
      <input className="form-control" onChange={handleInputChange} value={form.name} type="text" required name='name' id='name' />
    </div>

    <div className="mb-3 w-100">
      <label htmlFor="email" className="form-label">Email</label>
      <input className="form-control" onChange={handleInputChange} value={form.email} type="email" required name='email' id='email' />
    </div>

    <div className="mb-3 w-100">
      <label htmlFor="password" className="form-label">Password</label>
      <input className="form-control" onChange={handleInputChange} value={form.password} type="password" required name='password' id='password' />
    </div>

    {/* Solo un administrador logueado puede asignar el rol al crear la cuenta */}
    {isAdmin && (
      <div className="mb-3 w-100">
        <label htmlFor="role" className="form-label">Rol</label>
        <select className="form-select" onChange={handleInputChange} value={form.role} name='role' id='role'>
          <option value="cliente">Cliente</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    )}

    <button type='submit' className="btn btn-primary w-100 mb-2"> Registrar usuario </button>
    <button type='reset' className="btn btn-outline-secondary w-100">Limpiar formulario </button>

    </form>
    </div>
  )
}

export default RegisterUserPage

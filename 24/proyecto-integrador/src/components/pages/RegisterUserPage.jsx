import { useState } from 'react'
import useRegisterUser from '../../hooks/user/useRegisterUser'

function RegisterUserPage() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
    })

    const { error, registerUser } = useRegisterUser()

    const handleInputChange = (e) => {
        // Vos desde el setState/ dispatch si usas spead operator podes acceder al valor actual de los datos
        // Forma dinamica de setear el estado
        // Esto estaría actualizando el valor de los estados del objeto Form de acuerdo al input que esta cambiando/ disparando el evento
        setForm({
            ...form,
            [e.target.name]: e.target.value
            // password: "Password123"
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const success = await registerUser(form)
        console.log(success)
        if(success){
            setForm({
                email: "",
                name: "",
                password: ""
            })
        }
    }

  return (
    <>
    <h1> Registrar usuario </h1>

    <form onSubmit={handleFormSubmit}>

    <label htmlFor="name">Nombre de usuario</label>
    {/* Cuando el evento se usa asi onChange={handleInputChange} el event viaja aunque no este escrito */}
    <input onChange={handleInputChange} value={form.name} type="text" required name='name' id='name' />
    <br />

    <label htmlFor="email">Email</label>
    <input onChange={handleInputChange} value={form.email} type="email" required name='email' id='email' />
    <br />

    <label htmlFor="password">Password</label>
    <input onChange={handleInputChange} form={form.password} type="password" required name='password' id='password' />
    <br />

    <button type='submit'> Registrar usuario </button>
    <br />
    <button type='reset'>Limpiar formulario </button>
    <br />
    { error && <p> {error?.message || error} </p> }

    </form>
    </>
  )
}

export default RegisterUserPage
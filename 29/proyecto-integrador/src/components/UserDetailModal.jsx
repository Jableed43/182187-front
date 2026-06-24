// Modal de presentación: muestra los datos completos de un usuario.
// No tiene lógica de datos (no hace fetch ni borra); solo recibe el usuario a
// mostrar y un callback para cerrarse, por lo que es testeable de forma aislada.
function UserDetailModal({ user, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card p-4"
        style={{ minWidth: "300px" }}
      >
        <h2>Detalle del usuario</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role}</p>
        {user.superadmin && <p><strong>Superadmin:</strong> Sí</p>}
        <button className="btn btn-secondary mt-2" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}

export default UserDetailModal

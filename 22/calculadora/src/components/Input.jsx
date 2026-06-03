export function Input({type, label, onChange, value, labelId }) {
    return (
        <div>
            <label htmlFor={labelId}>{label}</label>
            <input type={type} value={value} onChange={onChange} id={labelId} />
        </div>
    )
}

// import { useId } from 'react';

// export function Input({ type = 'text', label, ...props }) {
//     const uniqueId = useId(); // Genera un ID único automáticamente

//     return (
//         <div className="input-container">
//             {label && <label htmlFor={uniqueId}>{label}</label>}
//             <input 
//                 type={type} 
//                 id={uniqueId} 
//                 {...props} // Permite placeholder, disabled, className, etc., sin agregarlos uno a uno
//             />
//         </div>
//     );
// }
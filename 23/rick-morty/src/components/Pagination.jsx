function Pagination({prev, next, onPrevious, onNext}) {

  return (
    <>
    <ul className='pagination justify-content-center'>
        {prev && (
            <li className='page-item'>
                <button className='page-link' onClick={onPrevious} > Pagina previa </button>
            </li>
        )}

        {next && (
            <li className='page-item'>
                <button className='page-link' onClick={onNext} > Pagina siguiente </button>
            </li>
        )}
    </ul>
    </>
  )
}

export default Pagination
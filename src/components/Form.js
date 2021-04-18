import React from 'react'

const Form = () => {
    return (
        <form className="container-sm">
            <div className='form-title'>
                <h1> Formulario</h1>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Tu nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" for="floatingInputValue" className="form-label">Email</label>
                    <input type="email" className="form-control" id="floatingInputValue" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Comentario</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Registrar</button>
                </div>
            </div>
        </form>
    )
}

export default Form

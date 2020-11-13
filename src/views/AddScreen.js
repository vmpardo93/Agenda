import React from 'react'
import { useForm } from 'react-hook-form'




function AddScreen(props) {
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        data.id = null
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }

    return (
        <div style={{display:"flex", flexDirection:"column",margin:"auto"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div>
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name"
                            ref={register({required: {value: true, message: 'Valor requerido'}})}
                            />
                        <div>
                            {errors?.name?.message}
                        </div>
                        </div>
                    <div>
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            ref={register({required: {value: true, message: 'Valor requerido'}})}
                            />
                        <div>
                            {errors?.email?.message}
                        </div>
                        </div>
                    <div>
                        <label>Fecha de nacimiento</label>
                        <input 
                            type="text" 
                            name="dataBorn" 
                            ref={register({required: {value: true, message: 'Valor requerido'}})}
                            />
                        <div>
                            {errors?.dataBorn?.message}
                        </div>
                    </div>
                    <div>
                        <label>Telefono</label>
                        <input 
                            type="text" 
                            name="phone" 
                            ref={register({required: {value: true, message: 'Valor requerido'}})}
                            />
                        <div>
                            {errors?.phone?.message}
                        </div>
                    </div>
                    <div>
                        <label>Address</label>
                        <input 
                            type="text" 
                            name="addrest" 
                            ref={register({required: {value: true, message: 'Valor requerido'}})}
                            />
                        <div>
                            {errors?.addrest?.message}
                        </div>
                    </div>
                    <div>
                        <button type="submit">Nuevo contacto</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddScreen;
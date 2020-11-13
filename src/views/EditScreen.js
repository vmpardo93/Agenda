import React from 'react'
import { useForm } from 'react-hook-form'

const EditYo = (props) => {

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        console.log(data)
        props.updateUser(props.currentUser.id, data)
        e.target.reset()
    }

    return (
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
            </div>
            <div>
                <button type="submit">Editar usuario</button>
            </div>
            <div>
                <button onClick={() => props.setEditing(false)} className="button muted-button">
                    Cancelar
                </button>
            </div>
        </form>
    );
}
 
export default EditYo;
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../Form';

const FormNew = () => {
    const schema = Yup.object().shape({
        name: Yup.string()
          .required('Informe o nome!')
          .min(5, 'O nome deve conter mais de 5 letras!')
          .max(100, 'O nome deve conter menos de 100 letras!')
          .notOneOf(['admin', 'administrador'], 'Esse nome não pode camarada!'),
        email: Yup.string()
          .required('Informe o email!')
          .email('Informe um email válido!'),
        message: Yup.string()
          .required('Informe a mensagem!')
          .max(500, 'A mensagem deve conter no máximo 500 caracteres!')
    })

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const newOpnions = (opnions) => {
        console.log(opnions);
        alert('Mensagem enviada com sucesso!\nObrigada!');
    }

    return (
        <Form action="#" onSubmit={handleSubmit(newOpnions)}>
            <h1>Vem tomar um café com a gente</h1>
            <h3>{errors.name?.message}</h3>
            <input name="name" type="text" placeholder = "Nome" ref={register} required /> 
            <h3>{errors.email?.message}</h3> 
            <input name="email" type="text" placeholder = "Email" ref={register} /> 
            <h3>{errors.message?.message}</h3>
            <textarea name="message" placeholder="Mensagem" ref={register} /> 
            <button id="send" type="submit" >ENVIAR</button> 
        </Form>
    )
};

export default FormNew;
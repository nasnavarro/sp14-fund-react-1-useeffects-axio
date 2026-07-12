import { useRef } from "react";

function FormRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Datos: ", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value
      });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" ref={nameRef} placeholder="Nombre" />
            <input name="email" ref={emailRef} placeholder="Email" />
            <textarea name="message" ref={messageRef} placeholder="Mensaje" />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormRef;
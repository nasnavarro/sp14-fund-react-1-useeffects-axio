import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Datos: ", form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name}
            onChange={handleChange} placeholder="Nombre" />
            <input name="email" value={form.email}
            onChange={handleChange} placeholder="Email" />
            <textarea name="message" value={form.message}
            onChange={handleChange} placeholder="Mensaje" />
            <button
                type="submit"
                disabled={!form.name || !form.email || !form.message}
                >Enviar
            </button>
        </form>
    );
}

export default Form;
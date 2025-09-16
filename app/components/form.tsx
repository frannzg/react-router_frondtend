import { Form } from "react-router";
import { useActionState } from 'react';

export async function contactAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validaciones simples
  if (!name || !email || !message) {
    return { error: "⚠️ Todos los campos son obligatorios." };
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return { error: "⚠️ El correo electrónico no es válido." };
  }

  // Aquí podrías enviar los datos a tu backend con fetch/axios
  console.log("📩 Nuevo mensaje de contacto:", { name, email, message });

  return { success: true, message: "✅ ¡Gracias por contactarnos!" };
}

export default function ContactForm() {
  const [state, formAction] = useActionState(contactAction, null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Formulario de Contacto</h2>

      <Form
        method="post"
        action={formAction}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "400px",
        }}
      >
        <label>
          Nombre:
          <input type="text" name="name" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Mensaje:
          <textarea name="message" rows={5} required />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </Form>

      {/* Feedback */}
      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state?.success && <p style={{ color: "green" }}>{state.message}</p>}
    </div>
  );
}

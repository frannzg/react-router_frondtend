import { Form } from "react-router";
import { useState } from 'react';

interface FormState {
  error?: string;
  success?: boolean;
  message?: string;
}


export async function handleSubmit(formData: FormData): Promise<FormState> {
  try {
    console.log("Form Data Submitted:", Object.fromEntries(formData.entries()));
    console.log('aaaaaaaa')
    return { success: true, message: "Formulario enviado con éxito." };
} catch (error) {
    console.log('bbbb')
    return { error: "Error enviando el formulario. Por favor, inténtalo de nuevo." };
  }
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({});

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await handleSubmit(formData);
    setFormState(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
            Contacto
          </h2>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm 
                p-2 border transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm 
                p-2 border transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm 
                p-2 border transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                bg-green-600 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                transition duration-150 ease-in-out"
              >
                Enviar mensaje
              </button>
            </div>
          </form>

          {formState.error && (
            <div className="mt-4 p-4 rounded-md bg-red-50">
              <p className="text-sm text-red-700">{formState.error}</p>
            </div>
          )}
          
          {formState.success && (
            <div className="mt-4 p-4 rounded-md bg-green-50">
              <p className="text-sm text-green-700">{formState.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
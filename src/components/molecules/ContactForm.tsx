"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "88e29b19-b647-4ad6-b839-f764c7533603");
        formData.append("from_name", "Esteban Castano");
        formData.append("subject", "Nuevo mensaje desde el portafolio");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("✅ Mensaje enviado correctamente!");
                form.reset(); // 🔹 Limpia los campos
            } else {
                setResult("⚠️ Ocurrió un error. Intenta de nuevo.");
            }
        } catch (error) {
            setResult("⚠️ Ocurrió un error. Intenta de nuevo.");
        }
    };

    return (
        <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 max-w-lg mx-auto"
        >
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                required
                className="p-3 border rounded-md w-full"
            />
            <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                className="p-3 border rounded-md w-full"
            />
            <textarea
                name="message"
                placeholder="Mensaje"
                required
                className="p-3 border rounded-md w-full h-32"
            />
            <Button type="submit" className="cursor-pointer">
                Enviar
            </Button>

            {result && (
                <p
                    className={`text-sm mt-2 transition ${result.includes("✅") ? "text-green-600" : "text-red-600"
                        }`}
                >
                    {result}
                </p>
            )}
        </form>
    );
}

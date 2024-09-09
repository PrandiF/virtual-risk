import Button4 from "../../../commons/Button4";
import InputText from "../../../commons/InputText";
import Textarea from "../../../commons/Textarea";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { Report } from "notiflix/build/notiflix-report-aio";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    client_name: "",
    client_lastname: "",
    client_email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      try {
        const response = await emailjs.sendForm(
          "service_pkzrkdv",
          "template_fran8",
          form.current,
          { publicKey: "-6rYvGNi_9NhpDVBu" }
        );

        if (response) {
          Report.success(
            "Mensaje enviado",
            "Tu mensaje ha sido enviado exitosamente.",
            "OK",
            () => {
              setFormData({
                client_name: "",
                client_lastname: "",
                client_email: "",
                message: "",
              });
            }
          );
        } else {
          throw new Error("Error al enviar el mensaje");
        }
      } catch (error) {
        Report.failure(
          "Error",
          "Hubo un problema al enviar tu mensaje. Intenta nuevamente.",
          "OK"
        );
      }
    } else {
      Report.failure(
        "Error",
        "El formulario no está disponible. Intenta nuevamente.",
        "OK"
      );
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <form
      className="flex flex-col gap-3 mt-3 xl:w-[50%] w-[80%]"
      data-aos="fade"
      data-aos-duration="3000"
      data-aos-delay="600"
      ref={form}
    >
      <InputText
        placeholder="Nombre"
        width="full"
        name="client_name"
        onChange={handleChange}
        value={formData.client_name}
      />
      <InputText
        placeholder="Apellido"
        width="full"
        name="client_lastname"
        onChange={handleChange}
        value={formData.client_lastname}
      />
      <InputText
        placeholder="Mail"
        width="full"
        name="client_email"
        onChange={handleChange}
        value={formData.client_email}
      />
      <Textarea
        placeholder="Tu mensaje..."
        width="full"
        name="message"
        onChange={handleChange}
        value={formData.message}
      />
      <div className="flex w-full justify-center">
        <Button4 text="Enviar" onClick={handleSubmit} />
      </div>
    </form>
  );
}

export default ContactForm;

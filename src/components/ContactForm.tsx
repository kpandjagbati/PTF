import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykvpyra";

const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nouveau message de ${formData.name}`,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMessage =
          data && typeof data === "object" && "error" in data
            ? String(data.error)
            : "Erreur lors de l'envoi";
        throw new Error(errorMessage);
      }

      setSubmitStatus({
        success: true,
        message:
          "Message envoyé avec succès ! Je vous répondrai dès que possible.",
      });

      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      setSubmitStatus({
        success: false,
        message:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <dialog className="modal modal-open">
      <motion.div
        className="modal-box w-full max-w-md max-h-[90dvh]"
        onClick={(e) => e.stopPropagation()}
        role="document"
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 id="contact-form-title" className="font-bold text-xl">
            Me contacter
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost"
            disabled={isSubmitting}
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {submitStatus ? (
          <div
            role="alert"
            className={`alert ${submitStatus.success ? "alert-success" : "alert-error"}`}
          >
            <span>{submitStatus.message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Nom</legend>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
                disabled={isSubmitting}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
                disabled={isSubmitting}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Message</legend>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered h-32 w-full"
                required
                disabled={isSubmitting}
              />
            </fieldset>

            <div className="modal-action flex-col-reverse sm:flex-row gap-2 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-ghost w-full sm:w-auto"
                disabled={isSubmitting}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer"
                )}
              </button>
            </div>
          </form>
        )}
      </motion.div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={onClose}>
          close
        </button>
      </form>
    </dialog>
  );
};

export default ContactForm;

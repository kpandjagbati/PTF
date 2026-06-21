import { useState } from "react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykvpyra';

const ContactForm = ({ onClose }: { onClose: () => void }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
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
                    data && typeof data === 'object' && 'error' in data
                        ? String(data.error)
                        : 'Erreur lors de l\'envoi';
                throw new Error(errorMessage);
            }

            setSubmitStatus({
                success: true,
                message: 'Message envoyé avec succès ! Je vous répondrai dès que possible.'
            });

            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                onClose();
            }, 3000);
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            setSubmitStatus({
                success: false,
                message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={onClose}
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-base-100 p-5 sm:p-6 rounded-lg shadow-xl w-full max-w-md max-h-[90dvh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-labelledby="contact-form-title"
                initial={{ opacity: 0, scale: 0.85, y: 40, rotateX: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                style={{ transformPerspective: 800 }}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 id="contact-form-title" className="text-xl font-bold">Me contacter</h3>
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
                    <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-success' : 'bg-error'} text-white`}>
                        {submitStatus.message}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label" htmlFor="contact-name">
                                <span className="label-text">Nom</span>
                            </label>
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
                        </div>

                        <div className="form-control">
                            <label className="label" htmlFor="contact-email">
                                <span className="label-text">Email</span>
                            </label>
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
                        </div>

                        <div className="form-control">
                            <label className="label" htmlFor="contact-message">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="textarea textarea-bordered h-32 w-full"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-2">
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
                                className={`btn btn-primary w-full sm:w-auto ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                            </button>
                        </div>
                    </form>
                )}
            </motion.div>
        </motion.div>
    );
};

export default ContactForm;

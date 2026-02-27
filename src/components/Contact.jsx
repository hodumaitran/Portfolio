import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPaperPlane,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được quá 50 ký tự"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải có ít nhất 10 số")
    .max(11, "Số điện thoại không được quá 11 số")
    .regex(/^[0-9]+$/, "Số điện thoại chỉ được chứa số"),
  email: z.string().email("Email không hợp lệ"),
  message: z
    .string()
    .min(10, "Nội dung phải có ít nhất 10 ký tự")
    .max(500, "Nội dung không được quá 500 ký tự"),
});

const SOCIAL_LINKS = [
  { icon: faGithub, href: "https://github.com/hodumaitran", label: "GitHub" },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/mai-tr%C3%A2n-h%E1%BB%93-d%C6%B0-802111313/",
    label: "LinkedIn",
  },
  {
    icon: faFacebook,
    href: "https://www.facebook.com/ho.du.mai.tran.2024",
    label: "Facebook",
  },
];

const FormField = ({ label, id, type = "text", register, error, ...props }) => (
  <div>
    <label htmlFor={id} className="block mb-2 font-medium text-sm">
      {label} <span className="text-red-500">*</span>
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        {...register(id)}
        className="form-input resize-none"
        {...props}
      />
    ) : (
      <input
        type={type}
        id={id}
        {...register(id)}
        className="form-input"
        {...props}
      />
    )}
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-sm mt-1"
      >
        {error.message}
      </motion.p>
    )}
  </div>
);

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        message: data.message,
        to_email: "hodumaitran.work@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Gửi tin nhắn thành công! Cảm ơn bạn đã liên hệ.",
      });
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Liên hệ <span className="text-primary">với tôi</span>
      </motion.h2>

      <div className="max-w-2xl mx-auto px-2">
        <motion.div
          className="glass-card p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Email Display */}
          <div className="text-center mb-6 md:mb-8">
            <p className="text-secondary mb-3 md:mb-4 text-sm md:text-base">
              Hãy liên hệ với tôi qua email hoặc điền form bên dưới
            </p>
            <a
              href="mailto:hodumaitran.work@gmail.com"
              className="text-base md:text-lg font-semibold text-primary hover:underline break-all"
            >
              hodumaitran.work@gmail.com
            </a>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField
                label="Tên"
                id="name"
                register={register}
                error={errors.name}
                placeholder="Nhập tên của bạn"
              />
              <FormField
                label="Số điện thoại"
                id="phone"
                type="tel"
                register={register}
                error={errors.phone}
                placeholder="Nhập số điện thoại"
              />
            </div>

            <FormField
              label="Email"
              id="email"
              type="email"
              register={register}
              error={errors.email}
              placeholder="Nhập email của bạn"
            />

            <FormField
              label="Nội dung"
              id="message"
              type="textarea"
              register={register}
              error={errors.message}
              rows="5"
              placeholder="Nhập nội dung tin nhắn của bạn"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                  <span>Đang gửi...</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span>Gửi tin nhắn</span>
                </>
              )}
            </button>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl text-center ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </form>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-secondary mb-4">
              Hoặc kết nối với tôi qua
            </p>
            <div className="flex justify-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          className="flex justify-center items-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-secondary">Cảm ơn bạn đã xem đến đây nhé</p>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

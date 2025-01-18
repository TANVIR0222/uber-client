import { toast } from "react-toastify";

// Dynamic toast function
export const showToast = (type, message, options = {}) => {
  const defaultOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const finalOptions = { ...defaultOptions, ...options };

  switch (type) {
    case "success":
      toast.success(message, finalOptions);
      break;
    case "error":
      toast.error(message, finalOptions);
      break;
    case "info":
      toast.info(message, finalOptions);
      break;
    case "warning":
      toast.warning(message, finalOptions);
      break;
    default:
      toast(message, finalOptions); // Default toast type
  }
};

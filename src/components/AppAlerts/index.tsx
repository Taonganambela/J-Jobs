import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import '../../plugins/bootstrap-4.min.css';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});
interface Props {
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info' | 'question';
  onClose?: () => void;
}

export const alertToast = ({ title, message, type, onClose }: Props) => {
  Toast.fire({
    icon: type,
    title: title,
    text: message
  }).then(() => {
    if (onClose) onClose();
  });
};

import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

export const toast = {
    showSuccess(message) {
        Toast.fire({
            icon: 'success',
            title: message
        });
    },

    showError(message) {
        Toast.fire({
            icon: 'error',
            title: message
        });
    },

    showInfo(message) {
        Toast.fire({
            icon: 'info',
            title: message
        });
    },

    showWarning(message) {
        Toast.fire({
            icon: 'warning',
            title: message
        });
    },
}
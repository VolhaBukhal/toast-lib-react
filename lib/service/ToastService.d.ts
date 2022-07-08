import { IToastParams, IToast } from '@/types/toastParams';
declare class ToastService {
    private static instance;
    toasts: IToast[];
    constructor();
    getAllToasts: () => IToast[];
    addToast: (toast: IToast) => void;
    removeToast: (toastId: string) => void;
    generateToast: (toastOptions: IToastParams) => IToast;
}
declare const toastService: ToastService;
export default toastService;

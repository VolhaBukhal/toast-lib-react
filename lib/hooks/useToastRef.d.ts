/// <reference types="react" />
import { IToastParams } from '@/types/toastParams';
export declare const useToastRef: () => {
    toastRef: import("react").RefObject<{
        addMessage: (toast: IToastParams) => void;
    }>;
    addToast: (options: IToastParams) => void;
};

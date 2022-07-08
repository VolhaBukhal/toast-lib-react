import React from 'react';
import { ToastPortalProps } from './types';
import { IToastParams } from '@/types/toastParams';
declare type RefType = {
    addMessage: (toast: IToastParams) => void;
};
export declare const ToastPortal: React.ForwardRefExoticComponent<ToastPortalProps & React.RefAttributes<RefType>>;
export {};

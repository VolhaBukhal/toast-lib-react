export declare type IToastParams = {
    mode: string;
    message: string;
    title: string;
    animationType: string;
    backgroundColor?: string;
    position: string;
};
export interface IToast extends IToastParams {
    id: string;
}

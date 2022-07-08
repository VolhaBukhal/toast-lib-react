export declare type ToastProps = {
    title: string;
    mode: string;
    message: string;
    animationType: string;
    backgroundColor?: string;
    position: string;
    onClose: () => void;
    onDragDelete: () => void;
};
export declare type StyledToastProps = {
    mode: string;
    backgroundColor?: string;
    reverse: boolean;
    animationType: string;
    position: string;
};
export declare enum ToastMode {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}
export declare enum AnimationMode {
    FADE = "fade",
    SCALE = "scale",
    MOVE = "move"
}

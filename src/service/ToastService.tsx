import { v4 as uuid } from 'uuid'

import { IToastParams, IToast } from '@/types/toastParams'

class ToastService {
  private static instance: ToastService
  toasts!: IToast[]

  constructor() {
    if (typeof ToastService.instance === 'object') {
      return ToastService.instance
    }
    this.toasts = []
    ToastService.instance = this
    return this
  }

  public getAllToasts = () => {
    return this.toasts
  }

  public addToast = (toast: IToast) => {
    if (this.toasts.length < 3) {
      this.toasts.push(toast)
    } else {
      return
    }
  }

  public removeToast = (toastId: string) => {
    this.toasts = this.toasts.filter((toast) => toast.id !== toastId)
  }

  public generateToast = (toastOptions: IToastParams): IToast => {
    return {
      id: uuid(),
      ...toastOptions,
    }
  }
}

const toastService = new ToastService()

export default toastService

import { ToastPortal } from '@/components/ToastPortal'
import { useToastRef } from '@/hooks/useToastRef'

export default {
  title: 'Example of usage',
  component: ToastPortal,
}

const DefaultSuccessProperties = {
  title: 'Success',
  mode: 'success',
  message: 'This is example of success toast',
  animationType: 'move',
  position: 'topRight',
}

const DefaultPortalProperties = {
  autoClose: false,
  autoCloseTime: 3000,
  position: 'topRight',
  margin: 'none',
}

export const Example = () => {
  const { toastRef, addToast } = useToastRef()

  const addSuccess = () => addToast({ ...DefaultSuccessProperties })

  return (
    <>
      <button onClick={addSuccess}> Test Success Toast</button>
      <ToastPortal ref={toastRef} {...DefaultPortalProperties} />
    </>
  )
}

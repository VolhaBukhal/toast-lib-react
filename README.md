# toast-lib-react allows you to create notification in 5 steps

## Installation

```
npm i toast-lib-react
yarn add toast-lib-react
```

## Features

- Settings of toast place
- Settings of toast appearance animation
- Settings of toast title
- Settings of toast message
- Settings of toast type
- Settings of autoClose ability and time

## Example

```
import { ToastPortal, useToastREf } from 'toast-lib-react'

const SuccessSettings = {
  title: 'Success',
  mode: 'success',
  message: 'This is example of success toast',
  animationType: 'move',
  position: 'topRight',
}

const PortalSettings = {
  autoClose: false,
  autoCloseTime: 3000,
  position: 'topRight',
  margin: 'none',
}

export const Example = () => {

  const { toastRef, addToast } = useToastRef()

  const addSuccess = () => addToast({
    ...SuccessSettings })

  return (
    <>
      <button onClick={addSuccess}> Test Success Toast</button>
      <ToastPortal ref={toastRef} {...PortalSettings} />
    </>
  )
}

```

## Steps to create a Toast

1.  Import functions from the library

```
  import { ToastPortal, useToastREf } from 'toast-lib-react'
```

2.  Create objects with settings for Toast and ToastPortal

```
   const ToastSettings = {
       title: 'Success',
       mode: 'success',
       message: 'This is example of success toast',
       animationType: 'move',
       position: 'topRight',
   }

   const PortalSettings = {
       autoClose: false,
       autoCloseTime: 3000,
       position: 'topRight',
       margin: 'none',
   }
```

3. Distract `toastRef` and `addToast` from `useToastRef()` inside your component

```
    const { toastRef, addToast } = useToastRef()

```

4. Create event handler with Toast settings `ToastSettings` and call the Toast

```
    const addSuccess = () => addToast({
        ...DefaultSuccessProperties })

    <button onClick={addSuccess}> Test Success Toast </button>
```

5. Place `ToastPortal` with `useToastRef` and `PortalSettings`

```
    return (
        <>
           <button onClick={addSuccess}>
               Test Success Toast
           </button>
           <ToastPortal
               ref={toastRef}
               {...PortalSettings} />
           </>
    )
```

## Available settings

### Toast:

- `title` - any text
- `mode` - 'info', 'success', 'warning', 'error'
- `message` - any text'
- `backgroundColor` - string
- `animationType` - 'fade', 'scale', 'move'
- `position` - 'topRight', 'topLeft', 'bottomRight', bottomLeft'

### TaostPortal:

- `autoClose` - boolean
- `autoCloseTime` - number
- `position` - 'topRight', 'topLeft', 'bottomRight', bottomLeft'
- `margin` - 'none', 'small'(5px), 'medium'(10px), 'large'(20px)

## Notification is simple!!!

import { useToast } from 'vue-toast-notification'
export const capitalize = (string: string) => {
  return string[0]?.toUpperCase() + string.toString().slice(1)
}



export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const toast = useToast()
      toast.clear()
      toast.open({
        message: 'Copied',
        position: 'top-right',
        type: 'success',
        queue: false
      })
    })
    .catch((err) => console.log(err, 'Failed to copy'))
}

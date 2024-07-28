export const capitalize = (string: string) => {
  return string[0]?.toUpperCase() + string.toString().slice(1)
}

export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => window.alert('Copied'))
    .catch((err) => console.log(err, 'Failed to copy'))
}

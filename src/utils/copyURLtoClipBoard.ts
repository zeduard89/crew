export const copyURLtoClipBoard = (url: string): void => {
  void navigator.clipboard.writeText(url)
}

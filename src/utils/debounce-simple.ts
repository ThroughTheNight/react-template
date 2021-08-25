let timer: number;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function debounce (callback: ()=> any, wait: number): void {
  if (timer) {window.clearTimeout(timer);}
  timer = window.setTimeout(callback, wait);
}


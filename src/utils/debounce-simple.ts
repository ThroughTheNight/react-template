let timer: number;
export default function debounce(callback: ()=> any, wait: number): void {
  if (timer) window.clearTimeout(timer);
  timer = window.setTimeout(callback, wait);
}


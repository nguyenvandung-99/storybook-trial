export default function debounce<Args extends any[]>(callback: (...args: Args) => void, time: number) {
  let timer: NodeJS.Timeout;
  return (...args: Args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(...args), time);
  }
}
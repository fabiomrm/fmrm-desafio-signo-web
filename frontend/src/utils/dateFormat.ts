export function dateFormat(dateString: string) {
  const date = new Date(dateString)
  return Intl.DateTimeFormat('pt-br', {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date)
}

export const days = Array.from({ length: 31 }, (_, day) => day + 1);

export const months = Array.from({ length: 12 }, (_, monthNumber) => {
  const date = new Date(0, monthNumber);
  const month = date.toLocaleDateString('pt-br', { month: 'short' }).replace('.', '');
  return month.charAt(0).toUpperCase() + month.slice(1);
});

export const years = Array.from({ length: 150 }, (_, index) => {
  return new Date().getFullYear() - index;
});

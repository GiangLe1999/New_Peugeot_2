export const formatPrice = (rawPrice: number) => {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const formattedPrice = VND.format(rawPrice);

  return formattedPrice.substring(0, formattedPrice.length - 1);
};

export const formatLongDate = (ms: number | string) => {
  const date = new Date(ms);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return date.toLocaleDateString("vi", options);
};

export const formatShortDate = (ms: number | string) => {
  const date = new Date(ms);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };

  return date.toLocaleDateString("en", options);
};

export const formatTime = (ms: number | string) => {
  const date = new Date(ms);

  const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();

  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  return `${hours}:${minutes}`;
};

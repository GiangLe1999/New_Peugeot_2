import { FC } from "react";

interface Props {}

const GoogleMaps: FC<Props> = (props): JSX.Element => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.74848539597!2d106.7108456760131!3d10.830549858191102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d9f93fde37%3A0x9bffee2b065489d6!2zUGV1Z2VvdCBCw6xuaCBUcmnhu4d1!5e0!3m2!1svi!2s!4v1718292035911!5m2!1svi!2s"
      className="w-full h-[400px] mt-10"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title="Vị trí Peugeot Thủ Đức"
    ></iframe>
  );
};

export default GoogleMaps;

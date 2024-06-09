import { FC } from "react";

interface Props {}

const GoogleMaps: FC<Props> = (props): JSX.Element => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7887680054164!2d106.71228047601315!3d10.827470858248212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752902a0e9a235%3A0xb75352c6302b9a24!2zTWF6ZGEgLSBUaMOgbmggUGjhu5EgVGjhu6cgxJDhu6lj!5e0!3m2!1svi!2s!4v1717517833562!5m2!1svi!2s"
      className="w-full h-[400px] mt-10"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title="Vị trí Mazda Thủ Đức - Thành Long"
    ></iframe>
  );
};

export default GoogleMaps;

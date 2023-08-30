import { FC } from "react";

interface Props {
  lines: { name: string; price: number; priceText: string }[];
}

const CarPriceSection: FC<Props> = ({ lines }): JSX.Element => {
  return (
    <section>
      <h2 className="post-heading-2">
        <span>GIÁ XE NEW MAZDA 2</span>
      </h2>

      <table className="price-table w-full">
        <thead>
          <tr>
            <td>Phiên Bản</td>
            <td>Giá Xe</td>
          </tr>
        </thead>

        <tbody>
          {lines.map((line, index) => (
            <tr key={index}>
              <td>{line.name}</td>
              <td>{line.priceText}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CarPriceSection;

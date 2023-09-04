import { FC } from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FiChevronDown } from "react-icons/fi";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

interface ItemsProps {
  header: string;
  children: JSX.Element | JSX.Element[];
  initialEntered?: boolean;
}

const AccordionItem: FC<ItemsProps> = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className="flex justify-between items-center w-full">
        <span className="block font-bold">{header}</span>
        <FiChevronDown
          className={`ml-auto transition-transform duration-200 ease-out w-3 h-3 ${
            isEnter && "rotate-180"
          }`}
        />
      </div>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left ${isEnter && "bg-[#E8E8E8]"}`,
    }}
    contentProps={{
      className: "transition-height duration-300 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

interface Props {
  data: { header: string; items: string[] }[];
}

const StyledAccordion: FC<Props> = ({ data }): JSX.Element => {
  return (
    <div className="mx-2 my-4 border-t">
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition allowMultiple transitionTimeout={300}>
        {data.map((group, index) => (
          <AccordionItem header={group.header} key={index} initialEntered>
            <ul className={index === 0 ? "uppercase" : "capitalize"}>
              {group.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 py-2 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={group.header}
                    id={item}
                    className="cursor-pointer"
                  />
                  <label htmlFor={item} className="cursor-pointer">
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default StyledAccordion;

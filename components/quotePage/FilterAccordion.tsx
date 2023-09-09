"use client";

import { FC, useEffect, useState, Dispatch, SetStateAction } from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FiChevronDown } from "react-icons/fi";
import { CarType } from "@/types";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

interface ItemsProps {
  header: FieldNameType;
  children: JSX.Element | JSX.Element[];
  initialEntered?: boolean;
}

const AccordionItem: FC<ItemsProps> = ({ header, ...rest }) => {
  let headerLabel = "";
  switch (header) {
    case "line":
      headerLabel = "dòng xe";
      break;
    case "price":
      headerLabel = "giá";
      break;
    case "fuel":
      headerLabel = "nhiên liệu";
      break;
    case "seats":
      headerLabel = "số ghế";
      break;
    case "kind":
      headerLabel = "kiểu dáng";
      break;
    default:
      headerLabel = "";
  }

  return (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <div className="flex justify-between items-center w-full">
          <span className="block font-bold uppercase">{headerLabel}</span>
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
};

interface Props {
  data: { header: string; items: string[] }[];
  setCars: Dispatch<SetStateAction<CarType[]>>;
  setFilterLoading: Dispatch<SetStateAction<boolean>>;
  filterLoading: boolean;
}

export type QueryType = {
  line: string[];
  price: string[];
  fuel: string[];
  seats: string[];
  kind: string[];
};

export type FieldNameType = "line" | "price" | "fuel" | "seats" | "kind";

const initialQuery = {
  line: [],
  price: [],
  fuel: [],
  seats: [],
  kind: [],
};

const FilterAccordion: FC<Props> = ({
  data,
  setCars,
  setFilterLoading,
  filterLoading,
}): JSX.Element => {
  const [query, setQuery] = useState<QueryType>(initialQuery);

  const inputChangeHandler = (name: FieldNameType, value: string) => {
    const newQuery = { ...query };

    if (newQuery[name].includes(value)) {
      newQuery[name] = newQuery[name].filter((item) => item !== value);
    } else {
      newQuery[name].push(value);
    }

    setQuery(newQuery);
  };

  useEffect(() => {
    try {
      setFilterLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/filter`, {
        method: "POST",
        body: JSON.stringify({
          query,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setFilterLoading(false);
          setCars(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [query, setCars]);

  return (
    <div className="my-4 border-t">
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition allowMultiple transitionTimeout={300}>
        {data.map((group, index) => (
          <AccordionItem
            header={group.header as FieldNameType}
            key={index}
            initialEntered
          >
            <ul className={index === 0 ? "uppercase" : "capitalize"}>
              {group.items.map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 py-2 text-sm cursor-pointer truncate"
                  htmlFor={item}
                >
                  <input
                    type="checkbox"
                    name={group.header}
                    checked={query[group.header as FieldNameType].includes(
                      item
                    )}
                    id={item}
                    className="cursor-pointer"
                    onChange={() =>
                      inputChangeHandler(group.header as FieldNameType, item)
                    }
                    disabled={filterLoading}
                  />
                  {item}
                </label>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FilterAccordion;

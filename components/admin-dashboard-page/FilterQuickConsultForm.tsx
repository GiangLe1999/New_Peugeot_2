"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { initialFilterObj } from "./ContactListTable";

interface Props {
  carNames: any;
  statuses: any;
  filter: initialFilterObj;
  setFilter: Dispatch<SetStateAction<initialFilterObj>>;
}

const FilterQuickConsultForm: FC<Props> = ({
  carNames,
  statuses,
  filter,
  setFilter,
}): JSX.Element => {
  return (
    <div className="admin-card-body">
      <div className="grid grid-cols-4 gap-3">
        <div>
          <span className="text-sm font-bold">Trạng thái</span>
          <ul className="mt-1">
            {statuses?.map((status: string) => {
              if (status)
                return (
                  <label
                    key={status}
                    className="flex items-center gap-2 py-2 text-xs cursor-pointer truncate leading-none"
                    htmlFor={status}
                  >
                    <input
                      type="checkbox"
                      name="status"
                      checked={filter.statuses.includes(status)}
                      id={status}
                      className="cursor-pointer accent-red-700 leading-none"
                      onChange={() => {
                        if (filter.statuses.includes(status)) {
                          return setFilter((prev) => ({
                            ...prev,
                            statuses: prev.statuses.filter(
                              (item) => item !== status
                            ),
                          }));
                        }

                        setFilter((prev) => ({
                          ...prev,
                          statuses: [...prev.statuses, status],
                        }));
                      }}
                      // disabled
                    />
                    {status}
                  </label>
                );
            })}
          </ul>
        </div>

        <div>
          <span className="text-sm font-bold">Dòng xe</span>
          <ul className="mt-1">
            {carNames?.map((carName: string) => {
              if (carName)
                return (
                  <label
                    key={carName}
                    className="flex items-center gap-2 py-2 text-xs cursor-pointer truncate leading-none"
                    htmlFor={carName}
                  >
                    <input
                      type="checkbox"
                      name="carName"
                      checked={filter.carNames.includes(carName)}
                      id={carName}
                      className="cursor-pointer accent-red-700 leading-none"
                      onChange={() => {
                        if (filter.carNames.includes(carName)) {
                          return setFilter((prev) => ({
                            ...prev,
                            carNames: prev.carNames.filter(
                              (item) => item !== carName
                            ),
                          }));
                        }

                        setFilter((prev) => ({
                          ...prev,
                          carNames: [...prev.carNames, carName],
                        }));
                      }}
                      // disabled
                    />
                    {carName}
                  </label>
                );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterQuickConsultForm;

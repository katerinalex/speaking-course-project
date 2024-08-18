import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./dropdown.scss";
import cn from "classnames";

export type OptionsType = {
  title: string;
  value: string;
};

type Props = {
  subtitle: string;
  paramKey: string;
  options: OptionsType[];
  setSelectedOption: (value: string) => void;
};

export const DropDown: React.FC<Props> = ({ subtitle, paramKey, options, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedOption, setSelectedOptionState] = useState(
    () => searchParams.get(paramKey) || ""
  );

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (selectedOption: OptionsType) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.set(paramKey, selectedOption.value);
    setSearchParams(updatedParams);
    setSelectedOptionState(selectedOption.title);
    setSelectedOption(selectedOption.value);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__subtitle-container">
        <h3 className="dropdown__subtitle">{subtitle}</h3>
        <button className="dropdown__button" onClick={handleToggleMenu}>
          <h1 className="dropdown__title">{selectedOption || "Select"}</h1>
          <div className="dropdown__toggle" />
        </button>
      </div>
      {isOpen && (
        <ul className="dropdown__menu">
          {options.map((option) => (
            <li key={option.value} className="dropdown__menu__item">
              <button
                className="dropdown__menu__item__button"
                onClick={() => handleOptionChange(option)}
              >
                <h2
                  className={cn("dropdown__menu__item__title", {
                    dropdown__menu__item__title_active:
                      selectedOption === option.value,
                  })}
                >
                  {option.title}
                </h2>
                <div
                  className={cn("dropdown__menu__item__check", {
                    dropdown__menu__item__check_active:
                      selectedOption === option.value,
                  })}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

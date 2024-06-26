import { useState } from "react";
import './dropdown.scss';
// import cn from "classnames";

export type OptionsType = {
  text: string;
};

type Props = {
  subtitle: string,
//   name: string;
  options: OptionsType[];
//   selectedOption: string,
//   setSelectedOption: (selectedOption: OptionsType) => void;
};

export const DropDown: React.FC<Props> = ({
  subtitle,
//   name,
  options,
//   selectedOption,
//   setSelectedOption
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <div className="dropdown__subtitle-container">
        <h3 className="dropdown__subtitle">{subtitle}</h3>
          <button className="dropdown__button" onClick={handleToggleMenu}>
            <h1 className="dropdown__title">All</h1>
            <div className="dropdown__toggle" />
          </button>
      </div>
        
      {isOpen && (
        <ul className="dropdown__menu">
          {options.map((option) => (
            <li key={option.text} className="dropdown__menu__item">
              <button
                className="dropdown__menu__item__button"
                // onClick={() => setSelectedOption(option)}
              >
                <h2
                //   className={cn('dropdown__menu__item__title',
                //   {'dropdown__menu__item__title_active': selectedOption === option.text})}
                >
                  {option.text}
                </h2>
                <div
                //   className={cn('dropdown__menu__item__check',
                //   {'dropdown__menu__item__check_active': selectedOption === option.text})}
                />
              </button>
          </li>
          ))}
        </ul>
      )}
    </div>
  )
}

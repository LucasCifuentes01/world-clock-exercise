import { ReactNode } from "react";
import css from "./Card.module.css";

interface IProps {
  children: ReactNode;
  onDelete?: () => void;
}

const CardTitle = ({ children }: IProps) => {
  return <h2 className={css.card__title}>{children}</h2>;
};

const CardBody = ({ children }: IProps) => {
  return <div className={css.card__body}>{children}</div>;
};

const Card = ({ children, onDelete }: IProps) => {
  return (
    <div className={css.card}>
      <div className={css.card__button__container}>
        <button onClick={() => onDelete?.()} className={css.card__button}>
          x
        </button>
      </div>
      {children}
    </div>
  );
};

Card.Title = CardTitle;
Card.Body = CardBody;

export default Card;

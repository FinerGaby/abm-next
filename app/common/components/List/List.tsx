import React from "react";

interface ListProps<T> {
  items: T[];
  displayKeys: (keyof T)[];
  onDelete?: (item: T) => void;
  onEdit?: (item: T) => void;
}

export const List = <T,>({ items, displayKeys, onDelete, onEdit }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <span>
            {displayKeys.map((key, i) => (
              <span key={i}>{item[key] as React.ReactNode}</span>
            ))}
          </span>
          {onEdit && <button onClick={() => onEdit(item)}>Editar</button>}
          {onDelete && <button onClick={() => onDelete(item)}>Eliminar</button>}
        </li>
      ))}
    </ul>
  );
};

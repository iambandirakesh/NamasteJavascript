import React from "react";
type TigerProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  styles: React.CSSProperties;
};
export const Tiger = ({ children, onClick, onChange, styles }: TigerProps) => {
  return (
    <div onClick={onClick} style={styles}>
      {children}
    </div>
  );
};

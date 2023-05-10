export const Button: React.FC<{ onClick: () => void, children: string }> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
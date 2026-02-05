
type ContainerProps = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: ContainerProps) {
  return (
    <h2>{children}</h2>
  );
}
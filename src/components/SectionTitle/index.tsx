
type ContainerProps = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: ContainerProps) {
  return (
    <h1>{children}</h1>
  );
}
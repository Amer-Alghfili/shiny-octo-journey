export function TextServiceCard({ height = "auto", className, children }) {
  return (
    <div
      className={"zad " + className + " relative rounded-[30px]"}
      style={{
        height,
      }}
    >
      {children}
    </div>
  );
}

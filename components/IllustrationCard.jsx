import Image from "next/image";

export function IllustrationServiceCard({
  height = "32em",
  width = "100%",
  src,
  classes,
}) {
  return (
    <div
      style={{
        minHeight: height,
        height: "100%",
        width,
      }}
      className="relative"
    >
      <Image
        src={src}
        className={`object-cover rounded-[30px] ${classes}`}
        fill={true}
        quality={100}
        priority={true}
        alt="icon"
      />
    </div>
  );
}

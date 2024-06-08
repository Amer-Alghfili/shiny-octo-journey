import Image from "next/image";

export function IllustrationServiceCard({
  height = "32em",
  width = "100%",
  src,
}) {
  return (
    <div
      style={{
        height,
        width,
      }}
      className={`relative`}
    >
      <Image
        src={src}
        className="block object-cover rounded-[30px]"
        fill={true}
        quality={100}
        priority={true}
        alt="icon"
      />
    </div>
  );
}

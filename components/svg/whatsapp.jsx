export default function Whatsapp({
  width = "20",
  height = "20",
  color = "white",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.87226 0.648438C4.64802 0.648438 0.335938 4.96052 0.335938 10.1848C0.335938 12.175 0.916409 13.9993 1.99443 15.5749L0.916409 18.8089C0.833485 18.9748 0.916409 19.1406 0.999334 19.2235C1.16518 19.3065 1.33103 19.3894 1.49688 19.3065L4.81386 18.2284C6.30651 19.2235 8.13085 19.7211 9.87226 19.7211C15.0965 19.7211 19.4086 15.409 19.4086 10.1848C19.4086 4.96052 15.0965 0.648438 9.87226 0.648438ZM15.5941 14.0822C15.3453 14.8285 14.3502 15.4919 13.5209 15.6578C13.3551 15.6578 13.1892 15.7407 12.9405 15.7407C12.2771 15.7407 11.4478 15.4919 10.121 14.9944C8.46255 14.331 6.80405 12.8383 5.47726 10.9311L5.39434 10.8482C4.89679 10.1848 4.15047 9.02382 4.15047 7.77995C4.15047 6.37023 4.89679 5.62391 5.14556 5.29221C5.47726 4.96052 5.89188 4.79467 6.38943 4.79467H6.72113C7.13575 4.79467 7.38453 4.96052 7.6333 5.45806L7.79915 5.78976C8.04792 6.37023 8.37962 7.2824 8.46255 7.44825C8.62839 7.77995 8.62839 8.02872 8.46255 8.2775C8.37962 8.44335 8.2967 8.6092 8.13085 8.77505C8.04792 8.85797 7.965 8.9409 7.965 9.02382L7.71622 9.27259V9.35552C7.965 9.77014 8.46255 10.5165 9.12594 11.0969C10.0381 11.9262 10.7015 12.175 11.0332 12.3408H11.1161C11.1991 12.3408 11.282 12.4237 11.282 12.3408C11.4478 12.175 11.6137 11.8433 11.8625 11.5945L11.9454 11.5116C12.1942 11.1799 12.5258 11.0969 12.6917 11.0969C12.7746 11.0969 12.9405 11.0969 13.0234 11.1799C13.1063 11.1799 13.2722 11.2628 14.8477 12.092L15.0136 12.175C15.2624 12.2579 15.4282 12.3408 15.5111 12.5896C15.8428 12.7554 15.7599 13.5017 15.5941 14.0822Z"
        fill={color}
      />
    </svg>
  );
}
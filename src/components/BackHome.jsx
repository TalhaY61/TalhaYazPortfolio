import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackHome() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-gray-300 hover:text-white transition text-lg"
    >
      <FaArrowLeft />
    </Link>
  );
}

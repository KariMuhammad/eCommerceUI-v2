import { BsEye } from "react-icons/bs";

type ProductViewEyeProps = {
    onView: () => void;
}


export default function ProductViewEye({ onView }: ProductViewEyeProps) {
    return (
        <div
            aria-label="product-preview"
            className="rounded-full transition-all p-2 hover:bg-black hover:text-white"
        >
            <button onClick={onView}>
                <BsEye />
            </button>
        </div>
    )
}
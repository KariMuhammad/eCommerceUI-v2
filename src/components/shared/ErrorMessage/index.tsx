export default function ErrorMessage({ message }: { message: string }) {
    return (
        <div className="p-1 my-1 rounded-md text-red-500">{message}</div>
    )
}
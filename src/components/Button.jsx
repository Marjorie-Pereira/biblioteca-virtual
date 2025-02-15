export default function Button({ text, onClick, type }) {
    return (
        <button onClick={onClick} type={type} className="w-full block bg-slate-800 text-white p-2 rounded-full mt-2 hover:bg-slate-700">{text}</button>
    )
}
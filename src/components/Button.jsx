
export default function Button({label, className="", children}) {
  return (
    <button className={`px-6 py-2 mx-auto rounded-md text-white m-2 bg-black ${className}`}>{children? children:label}</button>
  )
}

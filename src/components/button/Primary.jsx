export default function ButtonPrimary({ title, icon, click }) {
  return (
    <button
      className="px-2 sm:px-4 py-1 sm:py-2 bg-green-950/90 rounded-l-full rounded-r-full text-white hover:bg-green-800 hover:shadow-black/20 hover:shadow-md cursor-pointer text-[0.8rem] sm:text-base transition-all duration-300"
      onClick={click}
    >
      <i className={`${icon} me-2`}></i>
      {title}
    </button>
  );
}

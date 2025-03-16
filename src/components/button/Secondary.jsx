export default function ButtonSecondary({ title, click }) {
  return (
    <button className="px-2 sm:px-8 py-1 sm:py-2 bg-white/70 border border-green-700 rounded-l-full rounded-r-full text-green-700 hover:bg-green-100 hover:shadow-black/20 hover:shadow-md cursor-pointer text-[0.8rem] sm:text-base transition-all duration-300" onClick={click}>{title}</button>
  );
}

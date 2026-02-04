export default function Button({ children, onClick, type = 'button', color = 'blue' }) {
  const colors = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    red: 'bg-red-600 hover:bg-red-700',
    gray: 'bg-gray-600 hover:bg-gray-700'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded text-white ${colors[color]}`}
    >
      {children}
    </button>
  );
}

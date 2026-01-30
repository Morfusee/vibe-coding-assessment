const Switcher = () => {
  return (
    <>
      <button
        className="px-4 py-2 text-sm font-medium 
      bg-(--color-primary-cool-gray-10) text-(--color-primary-cool-gray-60)"
      >
        v1
      </button>
      <button
        className="px-4 py-2 text-sm font-medium 
      bg-(--color-primary-indigo-70) text-white"
      >
        v2
      </button>
    </>
  );
};

export default Switcher;

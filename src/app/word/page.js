function LookUp() {
  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          className="bg-white w-full rounded-lg p-4 text-2xl disabled:bg-gray-100"
        />
        <button className="bg-black px-4 py-2 text-2xl text-white rounded-lg disabled:bg-gray-400">
          Query
        </button>
      </div>
    </>
  );
}

export default LookUp;

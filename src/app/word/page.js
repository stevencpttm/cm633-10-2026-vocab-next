import { lookup } from "./actions";

function LookUp() {
  return (
    <>
      <form action={lookup} className="flex gap-2">
        <input
          type="text"
          name="word"
          className="bg-white w-full rounded-lg p-4 text-2xl disabled:bg-gray-100"
        />
        <button
          type="submit"
          className="bg-black px-4 py-2 text-2xl text-white rounded-lg disabled:bg-gray-400"
        >
          Query
        </button>
      </form>
    </>
  );
}

export default LookUp;

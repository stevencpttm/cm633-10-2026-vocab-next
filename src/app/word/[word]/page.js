async function LookUp({ params }) {
  const data = await params;
  const word = data.word;

  const response = await fetch("http://localhost:3000/api/lookup", {
    method: "POST",
    body: JSON.stringify({
      word: word,
    }),
  });

  const definition = await response.json();

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          className="bg-white w-full rounded-lg p-4 text-2xl disabled:bg-gray-100"
        />
      </div>

      {definition && (
        <>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-lg p-2">
              <strong>音標</strong>
              <p>{definition.phonetic}</p>
            </div>
            <div className="bg-white rounded-lg p-2">
              <strong>意思</strong>
              <p>{definition.meaning}</p>
            </div>
            <div className="bg-white rounded-lg p-2">
              <strong>詞性</strong>
              <p>{definition.partOfSpeech}</p>
            </div>
            <div className="bg-white rounded-lg p-2">
              <strong>例句</strong>
              <p>{definition.example}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LookUp;

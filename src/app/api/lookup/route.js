// path: /api/lookup
export async function POST(request) {
  const payload = await request.json();

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.OPENROUTER_KEY,
      },
      body: JSON.stringify({
        model: "openrouter/free",
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "vocabulary",
            strict: true,
            schema: {
              type: "object",
              properties: {
                phonetic: {
                  type: "string",
                  description: "IPA pronunciation",
                },
                meaning: {
                  type: "string",
                  description: "Meaning of the word in Traditional Chinese",
                },
                partOfSpeech: {
                  type: "string",
                  description: "English part of speech",
                },
                example: {
                  type: "string",
                  description: "One short english example sentence",
                },
              },
              required: ["phonetic", "meaning", "partOfSpeech", "example"],
              additionalProperties: false,
            },
          },
        },
        messages: [
          {
            role: "system",
            content: `You are an English teacher`,
          },
          {
            role: "user",
            content: payload.word,
          },
        ],
      }),
    },
  );

  const result = await response.json();

  const data = JSON.parse(result.choices[0].message.content);

  return Response.json(data);
}

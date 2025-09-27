import openaiClient from "./api.js";
const generate = async (queryDescription) => {
    const response = await openaiClient.responses.create({
        model: "gpt-5-nano",
        input: `Convert the following natural language description into an SQL query: \n\n${queryDescription}`,
    });
    return response.output_text;
};
export default generate;
//# sourceMappingURL=generate.js.map
import { InferenceClient, chatCompletion } from "@huggingface/inference";

import "dotenv/config";

const client = new InferenceClient(
    process.env.HUGGINGFACE_API_KEY
    );

const messages = [
    {
        role: "user",
        content: "What is the capital of France?"
    }
]

const chat = await client.chatCompletion({
	model: "mistralai/Mistral-7B-Instruct-v0.3",
	messages: messages,
    provider : "novita",
	max_tokens: 500,
});

console.log(chat.choices[0].message);
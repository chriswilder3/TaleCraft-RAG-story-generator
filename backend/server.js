const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { InferenceClient } = require("@huggingface/inference");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
const client = new InferenceClient(HF_API_KEY);

app.get("/", (req, res) => {
    res.status(200).json({ "msg": "Hi" });
});

app.post("/generate-story", async (req, res) => {
    const { prompt } = req.body;
    console.log("Received prompt:", prompt);

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const chatResponse = await client.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.3",  // Or use "meta-llama/Llama-3.1-8B-Instruct"
            messages: [{ role: "user", content: `Write a detailed enchanting story about: ${prompt}` }],
            max_tokens: 500,
        });

        const story = chatResponse.choices[0]?.message?.content || "No response from model";
        res.status(201).json({ story });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

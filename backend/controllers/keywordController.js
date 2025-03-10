const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generateKeywords = async(req, res) => {
    try {
        const { siteUrl, aboutKeywords } = req.body;

        if (!aboutKeywords) {
            return res.status(400).json({ error: "About Keywords field is required." });
        }

        const chatResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `Generate SEO keywords and meta tags for: ${aboutKeywords}` }],
        });

        const keywords = chatResponse && chatResponse.choices && chatResponse.choices[0] &&
            chatResponse.choices[0].message && chatResponse.choices[0].message.content ?
            chatResponse.choices[0].message.content.split(",") : [];



        const metaTags = keywords.map(tag => `<meta name="keywords" content="${tag.trim()}">`).join("\n");

        res.json({ keywords, metaTags });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error generating keywords" });
    }
};

module.exports = { generateKeywords };
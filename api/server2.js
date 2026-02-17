const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const { number } = req.body;
    if (!number) return res.status(400).json({ error: "Missing number param" });

    const response = await fetch(`https://nid-phone-fastapi.fly.dev/phone`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ number })
    });

    if (!response.ok) throw new Error("Server2 fetch failed");
    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    console.error("Server2 error:", err.message);
    res.status(500).json({ error: "Server2 Error" });
  }
};

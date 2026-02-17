const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const number = req.query.number;
  if (!number) return res.status(400).json({ error: "Missing number param" });

  try {
    const response = await fetch(`https://bd-reverse-lookup.streamlit.app/api?number=${encodeURIComponent(number)}`);
    if (!response.ok) throw new Error("Server3 fetch failed");
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Server3 error:", err.message);
    res.status(500).json({ error: "Server3 Error" });
  }
};

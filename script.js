else if (mode === "api") {
  // Ton backend mondé sur Render
  const apiUrl = "https://monde.onrender.com/ask"; 

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: userQuestion })
    });

    const result = await response.json();

    if (result.error) {
      aiResponseDiv.innerText = "⚠️ Erreur API : " + result.error.message;
    } else {
      aiResponseDiv.innerText = result.choices[0].message.content;
    }
  } catch (error) {
    console.error("Erreur lors de la requête API :", error);
    aiResponseDiv.innerText = "❌ Impossible de contacter l’IA.";
  }
}

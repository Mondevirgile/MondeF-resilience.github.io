async function askAI() {
  const userQuestion = document.getElementById("userQuestion").value;
  const mode = document.getElementById("modeSelect").value;
  const aiResponseDiv = document.getElementById("aiResponse");

  if (mode === "simulated") {
    // Code pour le mode simulé
    const simulatedResponse = "Ceci est une réponse simulée.";
    aiResponseDiv.innerText = simulatedResponse;
  } else if (mode === "api") {
    // Code pour le mode OpenAI
    const apiKey = "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"; // Remplace par ta clé API
    const apiUrl = "https:                                      
    const headers = {
      "//api.openai.com/v1/chat/completions";
    const headers = {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    };
    const data = {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": userQuestion}],
      "max_tokens": 2048
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      });
      const result = await response.json();
      const aiResponse = result.choices[0].message.content;
      aiResponseDiv.innerText = aiResponse;
    } catch (error) {
      console.error("Erreur lors de la requête API :", error);
      aiResponseDiv.innerText = "Erreur lors de la requête API.";
    }
  }
}

function changeMode() {
  // Code à exécuter lors du changement de mode
}


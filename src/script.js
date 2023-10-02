function generateScript() {
    // Get user inputs from the form
    const ideaInput = document.getElementById("idea").value;
    const platformInput = document.querySelector('input[name="platform"]:checked');
    const ageGroupInput = document.getElementById("age-group").value;
    const instructionsInput = document.getElementById("video-type").value;

    // Check if the user has selected a platform
    if (!platformInput) {
        document.getElementById("script-output").value = "Please select a preferred platform.";
        return;
    }

    // Construct the input prompt for ChatGPT
    const prompt = `Generate a script for an idea:\n\n
        Idea: ${ideaInput}\n
        for Platform: ${platformInput.value}\n
        Targeting Age Group: ${ageGroupInput}\n
        Keep it: ${instructionsInput}\n`;

    // Make an API call to ChatGPT (Replace with your API code)
    fetch("YOUR_CHATGPT_API_ENDPOINT", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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", // Replace with your API key
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 150, // Adjust as needed
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.error) {
            // If there is an error, display it in the output textarea
            document.getElementById("script-output").value = `Error: ${data.error.message}`;
        } else {
            // Display the generated script in the output textarea
            const scriptOutput = data.choices[0].text;
            document.getElementById("script-output").value = scriptOutput;
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        document.getElementById("script-output").value = "An error occurred while generating the script. Please try again.";
    });
}

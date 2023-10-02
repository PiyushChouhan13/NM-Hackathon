
    
    var button1 = document.getElementById("swBtn");
    var button2 = document.getElementById("GenBtn");
    var button3 = document.getElementById("ChkBtn");

    // Add click event listeners for each button
    button1.addEventListener("click", function() {
        // Redirect to the destination page for button 1
        window.location = "p2.html";
    });

    button2.addEventListener("click", function() {
        // Redirect to the destination page for button 2
        window.location.href = "https://www.hotpot.ai";
    });

    button3.addEventListener("click", function() {
        // Redirect to the destination page for button 3
        window.location.href = "https://example.com/page3.html";
    });


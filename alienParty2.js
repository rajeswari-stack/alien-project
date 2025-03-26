document.addEventListener("DOMContentLoaded", () => {
    const alienForm = document.getElementById("alienForm");
    const translateButton = document.getElementById("translateButton");
    const dancePartyButton = document.getElementById("danceParty");
    const mysteryScene = document.getElementById("mysteryScene");
    const fakeCrash = document.getElementById("fakeCrash");
    const alienLaugh = document.getElementById("alienLaugh");
    const instaCitizenshipButton = document.getElementById("instaCitizenship");
    const djVideoContainer = document.getElementById("djVideoContainer");
    const djVideo = document.getElementById("djVideo");
    alienForm.addEventListener("submit", (Event) => {
        Event.preventDefault();
        const alienName = document.getElementById("alienName").value;
        const alienAge = parseInt(document.getElementById("alienAge").value, 10);
        const reason = document.getElementById("reason").value;
        const captcha = document.getElementById("=captcha").value;
        const selectedPowers = document.querySelectorAll("input[name='Powers']:checked");
        if (alienName.length < 5) {
            alert("Alien name is too Human!Try a Alien Name!");
            return;
        }
        if (alienAge < 50) {
            alert("Sorry! only Mature aliens (50+ Zog years) can apply!");
            return;
        }
        if (selectedPowers.length < 2) {
            alert("Even weak aliens need atleast 2 powers");
            return;
        }
        if (reason.length > 200) {
            alert("Your reason must be 200 characters or less!");
            return;
        }
        if (captcha.trim() !== "10") {
            alert("Wrong answer to Alien Math!");
            return;
        }
        alert("Application Submitted Successfully Welcome to ZipttyZog World!!");
    });
    translateButton.addEventListener("click", () => {
        alert("Alien Translator Activated! Beep Boop!");
    });
    instaCitizenshipButton === null || instaCitizenshipButton === void 0 ? void 0 : instaCitizenshipButton.addEventListener("click", () => {
        alert("Ha ! Ha! Nice Try Earthain? You think Insta Citizenship is that Easy??");
    });
    dancePartyButton.addEventListener("click", () => {
        alert("Alien DJ Mode on..! Its time for an Alien Party");
        djVideoContainer.style.display = "block";
        const videoSrc = "https://www.youtube.com/embed/FzG4uDgje3M?autoplay=1&enablejsapi=1";
    });
    document.querySelectorAll("input[name='relation']").forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const selectedRelations = Array.from(document.querySelectorAll("input[name='relation']:checked"));
            if (selectedRelations.length > 2) {
                mysteryScene.classList.remove("hidden");
            }
            else {
                mysteryScene.classList.add("hidden");
            }
        });
    });
    alienForm.addEventListener("mouseover", () => {
        if (Math.random() > 0.95) {
            fakeCrash.classList.remove("hidden");
            setTimeout(() => {
                fakeCrash.classList.add("hidden");
            }, 3000);
        }
    });
});

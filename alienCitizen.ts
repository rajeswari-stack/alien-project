document.addEventListener("DOMContentLoaded",() =>{
    const alienForm = document.getElementById("alienForm") as HTMLFormElement;
    const translateButton = document.getElementById("translateButton")as HTMLButtonElement;
    const dancePartyButton = document.getElementById("danceParty")as HTMLButtonElement;
    const mysteryScene = document.getElementById("mysteryScene")as HTMLDivElement;
    const fakeCrash = document.getElementById("fakeCrash") as HTMLDivElement;
    const alienLaugh = document.getElementById("alienLaugh") as HTMLAudioElement;

    alienForm.addEventListener("submit",(Event) => {
        Event.preventDefault();

        const alienName= (document.getElementById("alienName") as HTMLInputElement).value;
        const reason= (document.getElementById("reason") as HTMLTextAreaElement).value;
        const captcha = (document.getElementById("=captcha") as HTMLInputElement).value;

        if(alienName.length<5){
            alert("Alien name must be atleast 5 characters long!");
            return;
        }
        if(reason.length >200){
            alert("Your reason must be 200 characters or less!");
            return;
        }
        if(captcha.trim() !== "10"){
            alert("Wrong answer to Alien Math!")
            return;
        }
        alert("Application Submitted Successfully Welcome to ZipttyZog World!!");
    });

    translateButton.addEventListener("click",() => {
        alert("Alien Translator Activated! Beep Boop!");
    });

    dancePartyButton.addEventListener("click",()=>{
        alert("Alien DJ Mode On..! Its time to Alien Party!!");
        alienLaugh.play();
    });

    document.querySelectorAll("input[name='relation']").forEach((checkbox) =>{
        checkbox.addEventListener("change",() => {
   const selectedRelations = Array.from(document.querySelectorAll("input[name='relation']:checked"));
        if(selectedRelations.length > 2){
            mysteryScene.classList.remove("hidden");
        }else{
            mysteryScene.classList.add("hidden");
        }
    });
    });

    alienForm.addEventListener("mouseover",() => {
        if(Math.random() > 0.95){
            fakeCrash.classList.remove("hidden");
            setTimeout(() => {
                fakeCrash.classList.add("hidden");
            },3000);
        }
    });

});
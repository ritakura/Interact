import './about.css'

function About() {
  
  return (
    <div className="about">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet"/>
        <div class="title">About Interact</div>
        <div class="explanation">
        The game is a RPG with mini games that tries to provide the user with tedious problems and hidden tests that involve paying attention to the environment and the NPCs. 
        We examine ADHD using DSM-V, focusing mostly on inattentiveness; however, also checking on hyperacting which was more difficult to examine. 
        At the end of the game, the player is presented with a report that lists the potential symptoms of ADHD that were observed within the player. 
        The player can use this report to compare the character's symptoms to the diagnostic criteria for ADHD and determine whether or not the player meets the criteria, providing the player with a suggestion on whether or not to get diagnosed for ADHD.
        </div>
    </div>
  );
}

export default About;

intros = [
    "{name} lived in a quiet village where the average temperature was {temp} and people weighed around {weight}.",
    "Every morning, {name} jogged {distance} before breakfast — rain or shine.",
    "{name}, an amateur inventor, once tried to make a tea machine that ran on chicken soup.",
    "In the heart of the town, {name} ran a bakery famous for its {weight} muffins."
]

dailyEventSegments = [
    "One day, a mysterious glowing package appeared outside his door.",
    "Suddenly, his pet llama began singing opera in the shower.",
    "His fridge started sending him passive-aggressive notes.",
    "{name} discovered a secret tunnel under his garden leading to a disco room."
]

conflictSegments = [
    "{name} had to choose between opening the package or attending his underwater basket-weaving class.",
    "The llama demanded to go on tour, and {name} had to become its manager.",
    "The notes from the fridge became increasingly threatening, mentioning mold.",
    "In the disco room, he met clones of himself arguing about the best kind of pie."
]

twistSegments = [
    "Just as {name} was about to decide, a squirrel in a suit offered him financial advice.",
    "He realized the tunnel was part of a reality show, and everyone was watching.",
    "The singing llama turned out to be an inter dimensional diplomat.",
    "The fridge revealed it had become self-aware and just wanted a vacation."
]

resolutionSegments = [
    "{name} shrugged, offered the fridge his passport, and took over as kitchen appliance.",
    "He became famous as the first person to manage a successful llama opera tour.",
    "He gave the clones cupcakes and they peacefully agreed to start a pie podcast.",
    "He danced with the squirrel under strobe lights, promising to open the package tomorrow."
]


function generateStory()
{
    const characterName = document.getElementById('customname').value === '' ? 'Bob' : document.getElementById('customname').value;

    const isUsa = document.getElementById('us').checked;
    const temp = isUsa ? "75°F" : "24°C";
    const weight = isUsa ? "150 pounds" : "68 kilograms";
    const distance = isUsa ? "3 miles" : "5 kilometers";

    // Pick random segments
    const intro = intros[Math.floor(Math.random() * intros.length)];
    const dailyEventSegment = dailyEventSegments[Math.floor(Math.random() * dailyEventSegments.length)];
    const conflictSegment = conflictSegments[Math.floor(Math.random() * conflictSegments.length)];
    const twistSegment = twistSegments[Math.floor(Math.random() * twistSegments.length)];
    const resolutionSegment = resolutionSegments[Math.floor(Math.random() * resolutionSegments.length)];

    // Merge segments
    // let content = intro + dailyEventSegment + conflictSegment + twistSegment + resolutionSegment;
    let content=[intro, dailyEventSegment, conflictSegment, twistSegment, resolutionSegment].join(" ")

    // Replace placeholders
    content = content
        .replace(/{name}/g, characterName)
        .replace(/{temp}/g, temp)
        .replace(/{weight}/g, weight)
        .replace(/{distance}/g, distance);

    // Typewriter effect
    const element = document.getElementById('story');
    element.textContent = '';
    element.style.visibility = 'visible';


    document.getElementById('generateButton').innerText='GENERATING...'
    document.getElementById('generateButton').style.backgroundColor='gray'

    let i = 0;
    function type()
    {
        if (i < content.length)
        {
            element.textContent += content.charAt(i);
            i++;
            setTimeout(type, 30); // speed of typing
        }
        else if(i==content.length)
        {
            document.getElementById('generateButton').innerText = 'GENERATE RANDOM STORY';
            document.getElementById('generateButton').style.backgroundColor = 'black'
        }
    }

    type();

    
}

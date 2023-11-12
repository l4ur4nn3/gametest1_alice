let storyText = document.getElementById('story-text');

function makeChoice(choice) {
    removeChoices(); 

    if (choice === 'curious') {
        storyText.textContent = "Alice décide de suivre le lapin curieux et se retrouve dans un monde étrange.";
        setTimeout(() => {
            storyText.textContent = "Elle rencontre le Chat du Cheshire. Que devrait-elle faire ?";
            createChoiceButtons(['parler', 'ignorer']);
        }, 2000);

    } else if (choice === 'bottle') {
        storyText.textContent = "Alice décide de boire la bouteille étiquetée 'Bois-moi' et subit une transformation.";
        setTimeout(() => {
            storyText.textContent = "Elle devient très petite. Que devrait-elle faire ?";
            createChoiceButtons(['manger', 'courir']);
        }, 2000);
    } else if (choice === 'parler') {
        storyText.textContent = "Alice décide de parler au Chat du Cheshire. Il lui donne des conseils énigmatiques.";
        setTimeout(() => {
            storyText.textContent = "Elle trouve une porte qui semble mener à un jardin. Que devrait-elle faire ?";
            createChoiceButtons(['ouvrir', 'rester']);
        }, 2000);
    } else if (choice === 'ignorer') {
        storyText.textContent = "Alice décide d'ignorer le Chat du Cheshire et continue son chemin.";
        setTimeout(() => {
            storyText.textContent = "Elle découvre une étrange maison de thé. Que devrait-elle faire ?";
            createChoiceButtons(['entrer', 'passer']);
        }, 2000);
    } else if (choice === 'manger') {
        storyText.textContent = "Alice décide de manger un petit gâteau et redevient de taille normale.";
        setTimeout(() => {
            storyText.textContent = "Elle se retrouve devant une porte mystérieuse. Que devrait-elle faire ?";
            createChoiceButtons(['frapper', 'ignorer']);
        }, 2000);
    } else if (choice === 'courir') {
        storyText.textContent = "Alice décide de courir loin. Elle se retrouve dans une forêt étrange.";
        setTimeout(() => {
            storyText.textContent = "Elle entend des voix d'animaux. Que devrait-elle faire ?";
            createChoiceButtons(['écouter', 'ignorer']);
        }, 2000);
    }
}

function createChoiceButtons(choices) {
    let choicesContainer = document.createElement('div');
    choices.forEach(choice => {
        let button = document.createElement('button');
        button.textContent = choice;
        button.onclick = function () {
            makeChoice(choice);
            choicesContainer.remove();
        };
        choicesContainer.appendChild(button);
    });
    document.getElementById('game-container').appendChild(choicesContainer);
}

function removeChoices() {
    let buttons = document.querySelectorAll('#game-container button');
    buttons.forEach(button => button.remove());
}

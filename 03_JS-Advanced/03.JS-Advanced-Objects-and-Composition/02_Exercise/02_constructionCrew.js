function constructionCrew(input) {
    if (input.dizziness == true) {
        input.levelOfHydrated += input.weight * 0.1 * input.experience;
        input.diziness = false;
    }

    return input;
}

constructionCrew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
constructionCrew({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true });
constructionCrew({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false });
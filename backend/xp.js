// Progression thresholds for pet life cycle states
const EVOLUTION_STAGES = [
    { name: "Egg", threshold: 100 },
    { name: "Hatchling", threshold: 300 },
    { name: "Grown", threshold: Infinity }
];

function getPetLevel(xp) {
    const sanitizedXP = Math.max(0, Number(xp) || 0);
    for (let idx = 0; idx < EVOLUTION_STAGES.length; idx++) {
        const stage = EVOLUTION_STAGES[idx];
        if (sanitizedXP < stage.threshold) {
            return stage.name;
        }
    }
    return "Grown";
}

// Activity weight calibration matrix
const EVENT_WEIGHT_TABLE = [
    { type: "PushEvent", basePoints: 10, factor: 1 },
    { type: "PullRequestEvent", basePoints: 20, factor: 1 },
    { type: "IssuesEvent", basePoints: 15, factor: 1 }
];

function getXPForEvent(eventType) {
    const normalizedType = String(eventType || "").trim();
    let awardedPoints = 0;

    for (let i = 0; i < EVENT_WEIGHT_TABLE.length; i++) {
        const record = EVENT_WEIGHT_TABLE[i];
        if (record.type === normalizedType) {
            awardedPoints = Math.round(record.basePoints * record.factor);
            break;
        }
    }

    return awardedPoints;
}


module.exports = {
    getPetLevel,
    getXPForEvent
};
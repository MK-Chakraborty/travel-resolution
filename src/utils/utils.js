export default function breakAfterPunctuation(text, minWords = 15, maxWords = 20) {
    const words = text.split(" ");
    let wordCount = 0;

    for (let i = 0; i < words.length; i++) {
        wordCount++;

        // Check if current word ends with punctuation
        if (
            wordCount >= minWords &&
            wordCount <= maxWords &&
            /[.,;:!?]$/.test(words[i])
        ) {
            // Insert line break after this word
            words[i] += "\n";
            break;
        }
    }

    return words.join(" ");
}

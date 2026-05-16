/* ===== YES/NO TAROT SCRIPT ===== */

const cards = [
  { name: "The Sun", emoji: "☀️", answer: "YES", color: "#f5c842", message: "The Sun shines brightly on your question. Positive energy surrounds this situation. Move forward with confidence — success and joy await you." },
  { name: "The Star", emoji: "⭐", answer: "YES", color: "#a0c4ff", message: "The Star brings hope and divine guidance. The universe is aligning in your favour. Trust the process and take that step forward." },
  { name: "The World", emoji: "🌍", answer: "YES", color: "#80ed99", message: "The World card signals completion and triumph. Your goal is within reach. This is a powerful confirmation — yes, pursue it." },
  { name: "The Lovers", emoji: "❤️", answer: "YES", color: "#ff6b9d", message: "The Lovers speak of alignment and unity. The answer is yes, especially if your heart is fully committed to this path." },
  { name: "The Chariot", emoji: "🏆", answer: "YES", color: "#ffd166", message: "The Chariot demands action and willpower. Victory is yours if you stay disciplined. Move forward decisively." },
  { name: "The Empress", emoji: "🌸", answer: "YES", color: "#c77dff", message: "The Empress brings abundance and nurturing energy. Growth and flourishing await. A beautiful yes from the universe." },
  { name: "Wheel of Fortune", emoji: "🎡", answer: "YES", color: "#06d6a0", message: "The Wheel of Fortune is turning in your favour. A cycle of good luck is beginning. Embrace this positive change." },
  { name: "The Moon", emoji: "🌙", answer: "MAYBE", color: "#b8c0cc", message: "The Moon warns of hidden factors and illusions. The situation is unclear right now. Wait for more information before acting — trust your intuition." },
  { name: "The Hermit", emoji: "🕯️", answer: "WAIT", color: "#adb5bd", message: "The Hermit asks you to pause and reflect. This is not the right moment. Seek inner wisdom before making your move." },
  { name: "The High Priestess", emoji: "🔮", answer: "MAYBE", color: "#9d4edd", message: "The High Priestess guards her secrets. There is more to this situation than you know. Meditate on it deeper before deciding." },
  { name: "The Tower", emoji: "⚡", answer: "NO", color: "#ef233c", message: "The Tower signals disruption ahead on this path. It may be wise to reconsider or approach from a different angle. Change course." },
  { name: "The Devil", emoji: "🔗", answer: "NO", color: "#dc2f02", message: "The Devil warns of obstacles, illusions, or unhealthy attachments in this situation. Pause, reflect, and ensure you're acting from a free and clear place." },
  { name: "The Hanged Man", emoji: "⏸️", answer: "WAIT", color: "#457b9d", message: "The Hanged Man asks for patience. The timing is not right — surrender control for now and allow the universe to reveal the better path." },
  { name: "Judgement", emoji: "📯", answer: "YES", color: "#f4a261", message: "Judgement calls you to rise and step into your higher calling. A resounding yes — this decision can transform your life." },
  { name: "Strength", emoji: "🦁", answer: "YES", color: "#e9c46a", message: "Strength affirms your inner power and courage. You have what it takes. Move forward with gentle confidence." },
  { name: "The Magician", emoji: "✨", answer: "YES", color: "#c9a84c", message: "The Magician says you have all the tools you need. The power is in your hands. Yes — create the outcome you desire." },
];

let flipped = false;
let currentCard = null;

function flipCard() {
  if (flipped) return;
  flipped = true;

  currentCard = cards[Math.floor(Math.random() * cards.length)];

  // Flip the card
  const card = document.getElementById('tarotCard');
  card.style.transform = 'rotateY(180deg)';

  // Set card face
  document.getElementById('cardEmoji').textContent = currentCard.emoji;
  document.getElementById('cardName').textContent = currentCard.name;

  setTimeout(() => {
    const result = document.getElementById('result');
    const answer = document.getElementById('resultAnswer');
    const message = document.getElementById('resultMessage');

    if (currentCard.answer === 'YES') {
      answer.style.color = currentCard.color;
      answer.textContent = '✦ YES ✦';
    } else if (currentCard.answer === 'NO') {
      answer.style.color = currentCard.color;
      answer.textContent = '✦ NO ✦';
    } else if (currentCard.answer === 'MAYBE') {
      answer.style.color = currentCard.color;
      answer.textContent = '✦ MAYBE ✦';
    } else {
      answer.style.color = currentCard.color;
      answer.textContent = '✦ WAIT ✦';
    }

    message.textContent = currentCard.message;
    result.style.display = 'block';
  }, 900);
}

function resetCard() {
  flipped = false;
  const card = document.getElementById('tarotCard');
  card.style.transform = 'rotateY(0deg)';

  document.getElementById('result').style.display = 'none';
  document.getElementById('resultAnswer').textContent = '';
  document.getElementById('resultMessage').textContent = '';
  document.getElementById('cardEmoji').textContent = '';
  document.getElementById('cardName').textContent = '';
}

// 🔧 PAS DIT AAN
const retirementDate = new Date("2027-05-01"); // YYYY-MM-DD

const today = new Date();

// ✅ Totaal aantal dagen
function calculateDays() {
  const diff = retirementDate - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// ✅ Werkdagen berekenen (ma-vr)
function calculateWorkdays() {
  let count = 0;
  let current = new Date(today);

  while (current <= retirementDate) {
    const day = current.getDay();

    // 0 = zondag, 6 = zaterdag
    if (day !== 0 && day !== 6) {
      count++;
    }

    current.setDate(current.getDate() + 1);
  }

  return count;
}

// ✅ Resultaten tonen
document.getElementById("days").innerText = calculateDays() + " dagen";
document.getElementById("workdays").innerText = calculateWorkdays() + " werkdagen";
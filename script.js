document.getElementById('checkerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let year = parseInt(document.getElementById('year').value);
  let protection = document.getElementById('protection').value;
  let emailChange = document.getElementById('emailChange').value;
  let maxTrophy = parseInt(document.getElementById('maxTrophy').value);
  let seasonTrophy = parseInt(document.getElementById('seasonTrophy').value);
  let charUnlock = parseInt(document.getElementById('charUnlock').value);
  let power11 = parseInt(document.getElementById('power11').value);

  if (protection === 'yes') {
    document.getElementById('result').innerText = "アカウント保護ありのため買取不可";
    return;
  }

  let price = 0;

  if (year <= 2020) price += 200;
  price += Math.floor(seasonTrophy / 1000) * 50;
  price += charUnlock * 5;
  price += power11 * 5;

  document.getElementById('result').innerText = "査定金額: " + price + "円";
});


  // JavaScript pour changer le thème avec sauvegarde
  const themeToggleButton = document.getElementById('themeToggleButton');
  const body = document.body;

  // Charger le thème enregistré
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-bs-theme', savedTheme);
    themeToggleButton.textContent = savedTheme === 'light' ? 'Passer au thème sombre' : 'Passer au thème clair';
  }

  themeToggleButton.addEventListener('click', () => {
    // Vérifie le thème actuel
    const currentTheme = body.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Met à jour le thème
    body.setAttribute('data-bs-theme', newTheme);

    // Sauvegarde le choix du thème
    localStorage.setItem('theme', newTheme);

    // Met à jour le texte du bouton
    themeToggleButton.textContent = newTheme === 'light' ? 'Passer au thème sombre' : 'Passer au thème clair';
  });

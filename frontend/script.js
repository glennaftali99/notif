async function loadNotifications() {
  const res = await fetch('http://localhost:3000/api/notifications');
  const data = await res.json();
  const container = document.getElementById('notifications-container');

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'notification-card';
    card.innerHTML = `
      <p><strong>Subject:</strong> ${item.Subject}</p>
      <p><strong>OWS ID:</strong> ${item['OWS ID']}</p>
      <p><strong>Service Impact:</strong> ${item['Impact']}</p>
      <p><strong>Location:</strong> ${item['Lokasi']}</p>
      <p><strong>Start Time:</strong> ${item['Start Time']}</p>
      <p><strong>Status:</strong> ${item['Status']}</p>
    `;
    container.appendChild(card);
  });
}

loadNotifications();
document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    timestampField.value = new Date().toISOString();
});

function showModal() {
    const modal = document.getElementById('membership-modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('membership-modal');
    modal.style.display = 'none';
}
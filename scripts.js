function toggleDescription(index) {
    const descriptions = document.querySelectorAll('.description');
    descriptions[index].style.display = descriptions[index].style.display === 'block' ? 'none' : 'block';
}

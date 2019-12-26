function handleTouchMove(event) {
    event.preventDefault();
}
//スクロール禁止
document.addEventListener('touchmove', handleTouchMove, { passive: false });
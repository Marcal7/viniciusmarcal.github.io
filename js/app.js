function mudarCor() {
    const cores = ["#ff4757", "#ff6348", "#1e90ff", "#3742fa", "#fbc531", "#4cd137"];

    const corNova = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corNova;
}

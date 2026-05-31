
            const grid = document.getElementById('ms-grid');
            for(let i=0; i<25; i++) {
                const cell = document.createElement('div');
                cell.className = 'ms-cell';
                cell.innerText = '';
                cell.addEventListener('click', () => {
                    if (Math.random() < 0.2) {
                        cell.innerText = '💣';
                        cell.style.background = 'red';
                        alert('BOOM!');
                    } else {
                        cell.innerText = Math.floor(Math.random()*3);
                        cell.style.background = '#111';
                    }
                });
                grid.appendChild(cell);
            }
        
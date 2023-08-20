chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'performAction') {
    // アラートを表示
    alert('頑張ってクリックしてね');

    function getMousePosition(event) {
        return { x: event.clientX, y: event.clientY };
    }

    function applyTextEscapeEffect(element) {
        const escapeDistance = 100;
        let isEscaping = false;

        element.addEventListener('mousemove', (event) => {
            if (!isEscaping) {
                isEscaping = true;

                const initialX = element.getBoundingClientRect().x;
                const initialY = element.getBoundingClientRect().top;

                const mousePosition = getMousePosition(event);
                const initialMouseX = mousePosition.x;
                const initialMouseY = mousePosition.y;

                const moveText = (event) => {
                    const mousePosition = getMousePosition(event);
                    const currentMouseX = mousePosition.x;
                    const currentMouseY = mousePosition.y;

                    const deltaX = currentMouseX - initialMouseX;
                    const deltaY = currentMouseY - initialMouseY;

                    const escapeX = initialX + (deltaX * escapeDistance);
                    const escapeY = initialY + (deltaY * escapeDistance);

                    element.style.transition = 'transform 0.3s ease-in-out';
                    element.style.transform = `translate(${escapeX}px, ${escapeY}px)`;
                    // テキストカラーの変更
                    const text = element.innerText;
                    const new_text = text.replace(/\d+/g, '<newtext style="color: red;">$&</newtext>');
                    element.innerHTML = new_text;
                };

                element.addEventListener('mousemove', moveText);

                setTimeout(() => {
                    element.style.transition = 'transform 0.3s ease-in-out';
                    element.style.transform = `translate(0, 0)`;
                    element.removeEventListener('mousemove', moveText);
                    setTimeout(() => {
                    isEscaping = false;
                    }, 500);
                }, 2000);
            }
        });
    }

    const textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, li, td, th');
    textElements.forEach((element) => {
        applyTextEscapeEffect(element);
    });
  }
});

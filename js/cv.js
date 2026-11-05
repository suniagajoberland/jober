const params = new URLSearchParams(window.location.search);

        window.addEventListener('load', () => {
            if (params.get('print') === '1') {
                setTimeout(() => window.print(), 400);
            }
        });

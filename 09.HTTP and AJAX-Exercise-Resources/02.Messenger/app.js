function attachEvents() {

    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    const btnSend = document.getElementById('submit');
    const btnRefresh = document.getElementById('refresh');
    const textarea = document.getElementById('messages');

    const inputFields = {
        author: document.querySelector('input[name=author]'),
        content: document.querySelector('input[name=content]'),
    }

    btnSend.addEventListener('click', () => {
        fetch(`${baseUrl}`, {
            method: 'POST',
            body: JSON.stringify(createNewObect())
        })
            .then(resetInputFields())
            .catch()
    });

    btnRefresh.addEventListener('click', () => {
        textarea.textContent = '';
        fetch(`${baseUrl}`)
            .then(res => res.json())
            .then(data => {
                const dataValues = Object.values(data);
                for (const message of dataValues) {
                    textarea.textContent = dataValues
                        .map(message => `${message.author}: ${message.content}`)
                        .join('\n');
                }
            })
            .catch()
    });

    const createNewObect = () => {

        const newObj = {};

        for (const [key, value] of Object.entries(inputFields)) {
            newObj[key] = value.value;
        }

        return newObj;
    }

    const resetInputFields = () => {
        Object.values(inputFields).forEach(field => field.value = '');
    };
}

attachEvents();
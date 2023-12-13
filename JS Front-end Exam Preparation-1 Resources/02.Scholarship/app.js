window.addEventListener("load", solve);

function solve() {

    const btnNext = document.getElementById('next-btn');
    btnNext.addEventListener('click', () => {

        const student = document.getElementById('student');
        const university = document.getElementById('university');
        const score = document.getElementById('score');
        const previewList = document.getElementById('preview-list');

        if(!student.value || !university.value || !score.value){
            return;
        }

        const li = document.createElement('li');
        li.className = 'application';
        previewList.appendChild(li);

        const article = document.createElement('article');
        li.appendChild(article);

        const h4 = document.createElement('h4');
        h4.textContent = student.value;
        article.appendChild(h4);

        const p1 = document.createElement('p');
        let studentUniversity = university.value;
        p1.textContent = `University: ${studentUniversity}`;
        article.appendChild(p1);

        const p2 = document.createElement('p');
        let studentScore = Number(score.value);
        p2.textContent = `Score: ${studentScore}`;
        article.appendChild(p2);

        const buttonEdit = document.createElement('button');
        buttonEdit.classList = 'action-btn edit';
        buttonEdit.textContent = 'edit';
        li.appendChild(buttonEdit);

        const buttonApply = document.createElement('button')
        buttonApply.classList = 'action-btn apply';
        buttonApply.textContent = 'apply';
        li.appendChild(buttonApply);

        student.value = '';
        university.value = '';
        score.value = '';
        btnNext.disabled = true;

        buttonEdit.addEventListener('click', () => {

            student.value =  h4.textContent;
            university.value = studentUniversity;
            score.value = studentScore;

            li.remove();
            btnNext.disabled = false;
        });

        buttonApply.addEventListener('click', () => {

            buttonEdit.remove();
            buttonApply.remove();

            const candidatesList = document.getElementById('candidates-list');
            candidatesList.appendChild(li);

            btnNext.disabled = false;
        });

    });
  }
  
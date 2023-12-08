/*
3. Locked Profile

In this problem, you should create a JS functionality that shows and hides the additional information about users.
When one of the [Show more] buttons is clicked, the hidden information inside the div should
be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.
If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working!
Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.
*/

function lockedProfile() {

    const buttonsShowMore = document.querySelectorAll("div.profile button");

    buttonsShowMore.forEach(button => {
        button.addEventListener('click', showMore);
    });

    function showMore(e) {
        
        const target = e.target.parentNode.children;
        console.log(target);

        let lockBtn = target[2];
        let hiddenInfo = target[9];
        let btnShowMore = target[10];

        if(lockBtn.checked){
            return;
        }

        if(btnShowMore.textContent === "Show more"){
            hiddenInfo.style.display = 'block';
            btnShowMore.textContent = "Hide it";
        } else if (btnShowMore.textContent === "Hide it"){
            hiddenInfo.style.display = 'none';
            btnShowMore.textContent = "Show more";
        }
    }
}
const addButton = document.getElementById('add');

const updateLocalStorageData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    console.log(textAreaData);

    //forEach(currentElement , ceIndexNum , arr , this )

    textAreaData.forEach((note) => {
        return notes.push(note.value);

    });

    console.log(notes);

    localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote = (text = '') => {

    const noteCreate = document.createElement('div');
    noteCreate.classList.add('note');

    const htmlData = `
    <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    
     <div class="main ${text ? "" : "hidden"}"> </div>           
    <textarea class=" ${text ? "hidden" : ""}"></textarea> `;

    noteCreate.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(noteCreate);

    // getting references

    const editButton = noteCreate.querySelector('.edit');
    const deleteButton = noteCreate.querySelector('.delete');
    const mainDiv = noteCreate.querySelector('.main');
    const textarea = noteCreate.querySelector('textarea');

    // deleting the node
    deleteButton.addEventListener('click', () => {
        noteCreate.remove();
        updateLocalStorageData();
    })


    // toggle using edit button

    textarea.value = text;        // text = 'Romil'    already pelethij koke lakhelu hoi to te main div and textarea ma print thase......
    mainDiv.innerHTML = text;     


    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        console.log(value);

        mainDiv.innerHTML = value;

        updateLocalStorageData();
    })




    document.body.appendChild(noteCreate);
    // it appends a node as the last child of a node

}


// getting data back from localStorage

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach((note) => {
        addNewNote(note);

    });
}
addButton.addEventListener('click', () => {
    addNewNote();

});



/*
 <div class="note">
<div class="tools">
<button class="edit"><i class="fas fa-edit"></i></button>
<button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>

<div class="main"> </div>
<textarea class=""></textarea>

</div>
*/


/*
   <div class="main ${text ? "" : "hidden"}"> </div>     // main div is hidden means textarea is open       
    <textarea class=" ${text ? "hidden" : "" }"></textarea> `;           // textarea is hidden means main div is open(data is already saved)
*/
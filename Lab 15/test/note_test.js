import { Note, NoteManager } from "../js/note.js";

function testNoteManager() {
    const manager = new NoteManager();

    const note = new Note("Тест", "Контент");
    manager.addNote(note);
    console.assert(manager.notes.length === 1, "Добавление заметки");

    manager.updateNote(note.id, "Новый заголовок", "Новый контент");
    console.assert(manager.notes[0].title === "Новый заголовок", "Редактирование заголовка");
    console.assert(manager.notes[0].content === "Новый контент", "Редактирование контента");

    const searchResults = manager.searchNotes("новый");
    console.assert(searchResults.length === 1, "Поиск заметки");

    manager.deleteNote(note.id);
    console.assert(manager.notes.length === 0, "Удаление заметки");

    console.log("Все тесты пройдены!");
}

testNoteManager();

import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

const DATA_DUMMY = [
  {
    id: 1,
    title: "Note pertama",
    desc: "halo react",
  },
  {
    id: 2,
    title: "Note kedua",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

function CurrentPageWidget({
  currentPage,
  setCurrentPage,
  noteList,
  addNote,
  deleteNote,
  editNote,
  currentNote,
  editCurrentNote,
}) {
  switch (currentPage) {
    case "home":
      return (
        <Home
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          noteList={noteList}
          editNote={editNote} 
        />
      );
    case "addNote":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "editNote":
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          currentNote={currentNote}
          editCurrentNote={editCurrentNote}
        />
      );
    default:
      return <Home />;
  }
}

export default function App() {
  const [noteList, setNoteList] = useState(DATA_DUMMY);
  const [currentNote, setCurrentNote] = useState({});
  const [currentPage, setCurrentPage] = useState("home");

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const deleteNote = (id) => {
    const deletedNote = noteList.filter((note) => note.id !== id);
    setNoteList(deletedNote);
  };

  const editNote = (note) => {
    setCurrentNote(note);
  };

  const editCurrentNote = (note) => {
    const filteredNotes = noteList.filter((item) => item.id !== note.id);
    const updatedFilter = [...filteredNotes, note];
    setNoteList(updatedFilter);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      setNoteList={setNoteList}
      addNote={addNote}
      deleteNote={deleteNote}
      editNote={editNote}
      currentNote={currentNote}
      editCurrentNote={editCurrentNote}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 40,
  },
});

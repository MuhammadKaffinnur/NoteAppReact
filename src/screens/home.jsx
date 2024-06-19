import React from "react";
import { FlatList, StyleSheet, View, Text, StatusBar } from "react-native";
import CustomButton from "../components/customButton";

function NoteCard({ item, editNote, deleteNote, setCurrentPage }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.desc}</Text>
      <View style={styles.button}>
        <CustomButton
          backgroundColor="#FFC300"
          color="#151D3B"
          text="Ubah"
          fontSize={12}
          width={100}
          onPress={() => {
            editNote(item);
            setCurrentPage("editNote");
          }}
        />
        <CustomButton
          backgroundColor="#D82148"
          color="#fff"
          text="Hapus"
          fontSize={12}
          width={100}
          onPress={() => deleteNote(item.id)}
        />
      </View>
    </View>
  );
}

function Home({ setCurrentPage, noteList, deleteNote, editNote }) {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor={"red"} />
      <CustomButton
        backgroundColor="#DDD"
        color="#203239"
        text="Tambahkan Note"
        width="100%"
        onPress={() => setCurrentPage("addNote")}
      />
      <FlatList
        data={noteList}
        renderItem={({ item }) => (
          <NoteCard
            item={item}
            setCurrentPage={setCurrentPage}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        )}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#203239",
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
});

export default Home;

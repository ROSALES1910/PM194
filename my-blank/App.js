import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  SectionList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Dimensions,
  Modal,
  Linking,
} from 'react-native';

const CATEGORIES = [
  { label: 'Ficción', query: 'fiction' },
  { label: 'Historia', query: 'history' },
  { label: 'Tecnología', query: 'technology' },
];

export default function App() {
  const [category, setCategory] = useState(null);
  const [booksByAuthor, setBooksByAuthor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedBook, setExpandedBook] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchBooks = async (selectedCategory) => {
    setLoading(true);
    setBooksByAuthor([]);
    setExpandedBook(null);
    setModalVisible(false);

    try {
      const grouped = {};
      let totalFetched = 0;
      let startIndex = 0;
      const maxPages = 3;

      for (let page = 0; page < maxPages; page++) {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${selectedCategory}&startIndex=${startIndex}&maxResults=40`
        );
        const data = await response.json();

        if (!data.items || data.items.length === 0) break;

        data.items.forEach((item) => {
          const volume = item.volumeInfo;
          if (
            !volume.authors ||
            !volume.imageLinks?.thumbnail ||
            !volume.description ||
            !volume.title
          )
            return;

          volume.authors.forEach((author) => {
            if (!grouped[author]) grouped[author] = [];
            grouped[author].push({ ...volume, id: item.id });
          });
        });

        totalFetched += data.items.length;
        startIndex += 40;

        const validAuthors = Object.entries(grouped).filter(
          ([_, books]) => books.length >= 2
        );
        const totalBooks = validAuthors.reduce(
          (sum, [_, books]) => sum + Math.min(2, books.length),
          0
        );
        if (totalBooks >= 10) break;
      }

      const sections = [];
      let totalBooks = 0;

      const sortedAuthors = Object.entries(grouped)
        .filter(([_, books]) => books.length >= 2)
        .sort((a, b) => b[1].length - a[1].length);

      for (const [author, books] of sortedAuthors) {
        if (totalBooks >= 10) break;
        const pair = books.slice(0, 2);
        sections.push({ title: author, data: pair });
        totalBooks += pair.length;
      }

      if (totalBooks < 10) {
        throw new Error('No se encontraron suficientes autores con 2 libros.');
      }

      setTimeout(() => {
        setBooksByAuthor(sections);
        setLoading(false);
      }, 1500);
    } catch (error) {
      Alert.alert('Error', error.message || 'No se pudieron cargar los libros.');
      setLoading(false);
    }
  };

  const openBookModal = (book) => {
    setExpandedBook(book);
    setModalVisible(true);
  };

  const closeBookModal = () => {
    setExpandedBook(null);
    setModalVisible(false);
  };

  const handleDownload = (book) => {
    const link = book.previewLink || book.infoLink;
    if (link) {
      Linking.openURL(link);
    } else {
      Alert.alert('Descarga no disponible', 'Este libro no tiene un enlace de descarga.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categoryBar}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.label}
            style={[
              styles.categoryButton,
              category === cat.query && styles.categoryButtonActive,
            ]}
            onPress={() => {
              setCategory(cat.query);
              fetchBooks(cat.query);
            }}
          >
            <Text
              style={[
                styles.categoryButtonText,
                category === cat.query && styles.categoryButtonTextActive,
              ]}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading ? (
        <View style={styles.centeredContent}>
          <ActivityIndicator size="large" color="#0077b6" />
          <Text style={styles.loadingText}>Cargando libros...</Text>
        </View>
      ) : category ? (
        <View style={styles.contentArea}>
          <SectionList
            sections={booksByAuthor}
            keyExtractor={(item, index) => item.title + index}
            renderItem={({ item }) => (
              <View style={styles.bookItem}>
                <TouchableOpacity
                  style={styles.imageContainer}
                  onPress={() => openBookModal(item)}
                >
                  <Image
                    source={{ uri: item.imageLinks.thumbnail }}
                    style={styles.thumbnail}
                  />
                </TouchableOpacity>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.text}>
                  <Text style={styles.bold}>Editorial:</Text>{' '}
                  {item.publisher || 'Desconocida'}
                </Text>
                <TouchableOpacity
                  style={styles.downloadButton}
                  onPress={() => handleDownload(item)}
                >
                  <Text style={styles.downloadButtonText}>⬇</Text>
                </TouchableOpacity>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
            ListEmptyComponent={
              <Text style={styles.text}>No se encontraron libros.</Text>
            }
            contentContainerStyle={styles.listContent}
          />
        </View>
      ) : (
        <View style={styles.centeredContent}>
          <Text style={styles.title}>Selecciona una categoría</Text>
        </View>
      )}

      <Modal visible={modalVisible} animationType="slide" onRequestClose={closeBookModal}>
        <SafeAreaView style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            {expandedBook && (
              <>
                <Image
                  source={{ uri: expandedBook.imageLinks.thumbnail }}
                  style={styles.modalImage}
                />
                <Text style={styles.modalTitle}>{expandedBook.title}</Text>
                <Text style={styles.modalText}>
                  <Text style={styles.bold}>Editorial:</Text>{' '}
                  {expandedBook.publisher || 'Desconocida'}
                </Text>
                <Text style={styles.modalText}>
                  {expandedBook.description}
                </Text>
              </>
            )}
            <TouchableOpacity style={styles.closeButton} onPress={closeBookModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9fb',
    paddingTop: 30,
  },
  categoryBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  categoryButtonActive: {
    backgroundColor: '#0077b6',
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#333',
  },
  categoryButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  centeredContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentArea: {
    flex: 1,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    marginBottom: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: '#222',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#555',
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#caf0f8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 12,
    borderRadius: 6,
    alignSelf: 'center',
    color: '#023e8a',
  },
  bookItem: {
    marginVertical: 12,
    padding: 18,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 3,
    width: screenWidth * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  thumbnail: {
    width: 130,
    height: 190,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  bookTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1d3557',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 6,
  },
  bold: {
    fontWeight: 'bold',
  },
  downloadButton: {
    marginTop: 8,
    backgroundColor: '#00b4d8',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'center',
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 60,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalContent: {
    padding: 24,
    alignItems: 'center',
  },
  modalImage: {
    width: 160,
    height: 240,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1d3557',
    textAlign: 'center',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 15,
    color: '#444',
    textAlign: 'justify',
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: '#0077b6',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

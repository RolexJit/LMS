import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
// import { Video } from "expo-av";
import { VideoView, useVideoPlayer } from "expo-video";
export default function VideoTutorial({ onBack }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  // const videoRef = useRef(null);
const player = useVideoPlayer(
  selectedVideo ? selectedVideo.videoUrl : null,
  (playerInstance) => {
    playerInstance.play(); // autoplay
  }
);
  const videos = [
    {
      id: 1,
      title: "React.js Complete Tutorial",
      channel: "Thapa Technical",
      views: "1.3M views",
      thumbnail:
        "https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg",
      videoUrl:
        "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "React JS Full Course",
      channel: "WsCube Tech",
      views: "882K views",
      thumbnail:
        "https://img.youtube.com/vi/RVFAyFWO4go/maxresdefault.jpg",
      videoUrl:
        "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 3,
      title: "ReactJS Tutorial for Beginners",
      channel: "Apna College",
      views: "1.6M views",
      thumbnail:
        "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
      videoUrl:
        "https://www.youtube.com/embed/VCiFH3U3g34",
    },
  ];

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Video Tutorials</Text>

        <View style={styles.headerIcons}>
          <Ionicons name="search" size={22} color="#fff" />
          <Ionicons
            name="notifications"
            size={22}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* SEARCH */}
        <TextInput
          placeholder="Search tutorials..."
          placeholderTextColor="#aaa"
          style={styles.searchBar}
        />

        {/* VIDEO PLAYER */}
<View style={styles.featureCard}>
  {selectedVideo ? (
    <>
      {selectedVideo.videoUrl.endsWith(".mp4") ? (
        // ✅ MP4 Video
        <VideoView
          player={player}
          style={styles.featureImage}
          fullscreenOptions={{ enable: true }}
        />
      ) : (
        // ✅ YouTube Video
        <WebView
          source={{ uri: selectedVideo.videoUrl }}
          style={styles.featureImage}
          javaScriptEnabled
          domStorageEnabled
        />
      )}

      <Text style={styles.playingTitle}>
        ▶ Now Playing: {selectedVideo.title}
      </Text>
    </>
  ) : (
    <>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        }}
        style={styles.featureImage}
      />
      <View style={styles.overlay}>
        <Ionicons name="play-circle" size={70} color="#fff" />
      </View>
    </>
  )}
</View>

        {/* VIDEO LIST */}
        {videos.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.videoCard}
            onPress={() => setSelectedVideo(item)}
          >
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />

            <View style={styles.videoInfo}>
              <Text style={styles.videoTitle} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.videoMeta}>
                {item.channel} • {item.views}
              </Text>
            </View>

            <Ionicons name="play-circle" size={22} color="#7c4dff" />
          </TouchableOpacity>
        ))}

      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="#888" />
        <Ionicons name="play-circle" size={26} color="#7c4dff" />
        <Ionicons name="heart" size={24} color="#888" />
        <Ionicons name="person" size={24} color="#888" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  headerIcons: {
    flexDirection: "row",
  },

  searchBar: {
    backgroundColor: "#111",
    margin: 15,
    padding: 12,
    borderRadius: 10,
    color: "#fff",
  },

  featureCard: {
    marginHorizontal: 15,
    borderRadius: 15,
    overflow: "hidden",
  },

  featureImage: {
    width: "100%",
    height: 200,
  },

  playingTitle: {
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  videoCard: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 15,
  },

  thumbnail: {
    width: 120,
    height: 70,
    borderRadius: 8,
  },

  videoInfo: {
    flex: 1,
    marginLeft: 10,
  },

  videoTitle: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },

  videoMeta: {
    color: "#aaa",
    fontSize: 11,
    marginTop: 3,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#111",
    backgroundColor: "#000",
  },
});
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Card = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

export default function LaraCourseDetails({ course, onBack }) {
  return (
    <LinearGradient
      colors={["#0f2027", "#2c5364", "#6a11cb", "#ff6a88"]}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Laravel</Text>
          <Ionicons name="logo-laravel" size={26} color="#f05340" />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Banner */}
          <Card style={styles.banner}>
            <Ionicons name="logo-laravel" size={42} color="#f05340" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.bannerTitle}>Laravel</Text>
              <Text style={styles.bannerSubtitle}>
                Build modern PHP web applications
              </Text>
            </View>
          </Card>

          {/* Progress */}
          <Text style={styles.sectionTitle}>Progress</Text>

          <Card>
            <Text style={styles.progressText}>40% Completed</Text>

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: "40%" }]} />
            </View>

            <Text style={styles.progressSub}>4 / 10 Lessons</Text>
          </Card>

          {/* Next Lesson */}
          <Text style={styles.sectionTitle}>Next Lesson</Text>

          <Card style={styles.rowBetween}>
            <View>
              <Text style={styles.lessonTitle}>Routing & Controllers</Text>
              <Text style={styles.lessonSub}>Up Next · 20 mins</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Start Lesson</Text>
            </TouchableOpacity>
          </Card>

          {/* Practice */}
          <Text style={styles.sectionTitle}>Practice</Text>

          <View style={styles.row}>
            <Card style={styles.practiceCard}>
              <FontAwesome5 name="question" size={24} color="#f472b6" />
              <Text style={styles.practiceTitle}>Laravel Quiz</Text>
              <Text style={styles.practiceSub}>8 Questions</Text>
            </Card>

            <Card style={styles.practiceCard}>
              <MaterialIcons name="code" size={26} color="#38bdf8" />
              <Text style={styles.practiceTitle}>Code Challenges</Text>
              <Text style={styles.practiceSub}>Intermediate</Text>
            </Card>

            <Card style={styles.practiceCard}>
              <Ionicons name="documents" size={24} color="#facc15" />
              <Text style={styles.practiceTitle}>Flashcards</Text>
              <Text style={styles.practiceSub}>Review</Text>
            </Card>
          </View>

          {/* Resources */}
          <Text style={styles.sectionTitle}>Resources</Text>

          <Card>
            <Text style={styles.listItem}>📘 Study Notes</Text>
            <Text style={styles.listItem}>🎥 Video Tutorials</Text>
            <Text style={styles.listItem}>📄 Documentation</Text>
          </Card>

          {/* Activity */}
          <Text style={styles.sectionTitle}>Recent Activity</Text>

          <Card>
            <Text style={styles.listItem}>
              ✅ Completed "Eloquent Models"
            </Text>
            <Text style={styles.listItem}>
              🏆 Passed "Laravel Basics Quiz"
            </Text>
          </Card>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.navbar}>
          <Ionicons name="home" size={26} color="#fff" />
          <Ionicons name="book" size={26} color="#fff" />
          <Ionicons name="bar-chart" size={26} color="#fff" />
          <Ionicons name="person" size={26} color="#fff" />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  paddingTop: 20,

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },

  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },

  card: {
    backgroundColor: "rgba(15,23,42,0.8)",
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 16,
    borderRadius: 16,
  },

  banner: { flexDirection: "row", alignItems: "center" },

  bannerTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },

  bannerSubtitle: { color: "#e2e8f0", fontSize: 12 },

  sectionTitle: {
    marginTop: 18,
    marginBottom: 6,
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  progressText: { color: "#fff", fontWeight: "bold" },

  progressBar: {
    height: 8,
    backgroundColor: "#1e293b",
    borderRadius: 10,
    marginVertical: 10,
  },

  progressFill: { height: 8, backgroundColor: "#22d3ee", borderRadius: 10 },

  progressSub: { fontSize: 12, color: "#cbd5f1" },

  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },

  lessonTitle: { color: "#fff", fontWeight: "bold" },

  lessonSub: { color: "#cbd5f1", fontSize: 12 },

  button: { backgroundColor: "#a855f7", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10 },

  buttonText: { color: "#fff", fontWeight: "bold" },

  row: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 6 },

  practiceCard: { flex: 1, margin: 6, alignItems: "center" },

  practiceTitle: { marginTop: 6, color: "#fff", fontWeight: "bold" },

  practiceSub: { fontSize: 12, color: "#cbd5f1" },

  listItem: { paddingVertical: 6, color: "#e2e8f0" },

  navbar: { flexDirection: "row", justifyContent: "space-around", padding: 14 },
});
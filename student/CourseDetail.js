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

// export default function CourseDetail({ onBack }) {
export default function CourseDetail({ course, onBack, setScreen }) {
  return (
    <LinearGradient
      colors={["#0a192f", "#124d91", "#1f6feb"]}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{course.title}</Text>

          <Ionicons name="logo-react" size={26} color="#38bdf8" />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          
          {/* Banner */}
          <Card style={styles.banner}>
            <Ionicons name="logo-react" size={40} color="#38bdf8" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.bannerTitle}>{course.title} Course</Text>
              <Text style={styles.bannerSubtitle}>
                Build modern UI apps
              </Text>
            </View>
          </Card>

          {/* Progress */}
          <Text style={styles.sectionTitle}>Progress</Text>

          <Card>
            <Text style={styles.progressText}>65% Completed</Text>

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: "65%" }]} />
            </View>

            <Text style={styles.progressSub}>12 / 18 Lessons</Text>
          </Card>

          {/* Next Lesson */}
          <Text style={styles.sectionTitle}>Next Lesson</Text>

          <Card style={styles.rowBetween}>
            <View>
              <Text style={styles.lessonTitle}>Handling Events</Text>
              <Text style={styles.lessonSub}>Up Next · 15 mins</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          </Card>

          {/* Practice */}
          <Text style={styles.sectionTitle}>Practice</Text>

          <View style={styles.row}>
            <Card style={styles.practiceCard}>
              <FontAwesome5 name="question" size={22} color="#f59e0b" />
              <Text style={styles.practiceTitle}>Quiz</Text>
              <Text style={styles.practiceSub}>8 Questions</Text>
            </Card>

            <Card style={styles.practiceCard}>
              <MaterialIcons name="code" size={24} color="#38bdf8" />
              <Text style={styles.practiceTitle}>Code</Text>
              <Text style={styles.practiceSub}>Practice</Text>
            </Card>

            <Card style={styles.practiceCard}>
              <Ionicons name="documents" size={22} color="#22c55e" />
              <Text style={styles.practiceTitle}>Notes</Text>
              <Text style={styles.practiceSub}>Review</Text>
            </Card>
          </View>

          {/* Resources */}
          <Text style={styles.sectionTitle}>Resources</Text>

          <Card>
            <Text style={styles.listItem}>📘 Study Notes</Text>
            <TouchableOpacity onPress={() => setScreen("videoTutorial")}>
  <Text style={styles.listItem}>🎥 Video Tutorials</Text>
</TouchableOpacity>
            <Text style={styles.listItem}>📄 Documentation</Text>
          </Card>

          {/* Activity */}
          <Text style={styles.sectionTitle}>Recent Activity</Text>

          <Card>
            <Text style={styles.listItem}>
              ✅ Completed "State & Props"
            </Text>
            <Text style={styles.listItem}>
              🏆 Passed "React Basics Quiz"
            </Text>
          </Card>
        </ScrollView>

        {/* Bottom Nav */}
        <View style={styles.navbar}>
          <Ionicons name="home" size={26} color="#fff" />
          <Ionicons name="book" size={26} color="#38bdf8" />
          <Ionicons name="bar-chart" size={26} color="#fff" />
          <Ionicons name="person" size={26} color="#fff" />
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.06)",
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  banner: {
    flexDirection: "row",
    alignItems: "center",
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  bannerSubtitle: {
    color: "#cbd5f1",
    fontSize: 12,
  },

  sectionTitle: {
    marginTop: 18,
    marginBottom: 6,
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  progressText: {
    color: "#fff",
    fontWeight: "bold",
  },

  progressBar: {
    height: 8,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    marginVertical: 10,
  },

  progressFill: {
    height: 8,
    backgroundColor: "#38bdf8",
    borderRadius: 10,
  },

  progressSub: {
    fontSize: 12,
    color: "#cbd5f1",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  lessonTitle: {
    color: "#fff",
    fontWeight: "bold",
  },

  lessonSub: {
    color: "#cbd5f1",
    fontSize: 12,
  },

  button: {
    backgroundColor: "#124d91",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 6,
  },

  practiceCard: {
    flex: 1,
    margin: 6,
    alignItems: "center",
  },

  practiceTitle: {
    marginTop: 6,
    color: "#fff",
    fontWeight: "bold",
  },

  practiceSub: {
    fontSize: 12,
    color: "#cbd5f1",
  },

  listItem: {
    paddingVertical: 6,
    color: "#e2e8f0",
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 14,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
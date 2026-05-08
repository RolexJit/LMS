import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

const Card = ({ children, style }) => (
  <View style={[styles.card, style]}>
    {children}
  </View>
);

export default function CourseDetail({
  course,
  onBack,
  setScreen,
  
}) {

  // =========================
  // CONTENT TOGGLE
  // =========================
  const [showContent, setShowContent] =
    useState(false);

  // =========================
  // OPEN TOPIC
  // =========================
  const [openTopicId, setOpenTopicId] =
    useState(null);

  return (
    <LinearGradient
      colors={["#0a192f", "#124d91", "#1f6feb"]}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>

        {/* HEADER */}
        <View style={styles.header}>

          <TouchableOpacity onPress={onBack}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            {course?.name || "Course"}
          </Text>

          <Ionicons
            name="logo-react"
            size={26}
            color="#38bdf8"
          />

        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          {/* BANNER */}
          <Card style={styles.banner}>

            <Ionicons
              name="logo-react"
              size={40}
              color="#38bdf8"
            />

            <View style={{ marginLeft: 12 }}>
              <Text style={styles.bannerTitle}>
                {course?.name || "Course"} Course
              </Text>

              <Text style={styles.bannerSubtitle}>
                Build modern UI apps
              </Text>
            </View>

          </Card>

          {/* PROGRESS */}
          <Text style={styles.sectionTitle}>
            Progress
          </Text>

          <Card>

            <Text style={styles.progressText}>
              65% Completed
            </Text>

            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: "65%" },
                ]}
              />
            </View>

            <Text style={styles.progressSub}>
              12 / 18 Lessons
            </Text>

          </Card>

          {/* NEXT LESSON */}
          <Text style={styles.sectionTitle}>
            Next Lesson
          </Text>

          <Card style={styles.rowBetween}>

            <View>
              <Text style={styles.lessonTitle}>
                Handling Events
              </Text>

              <Text style={styles.lessonSub}>
                Up Next · 15 mins
              </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                Start
              </Text>
            </TouchableOpacity>

          </Card>

          {/* PRACTICE */}
          <Text style={styles.sectionTitle}>
            Practice
          </Text>

          <View style={styles.row}>

            <Card style={styles.practiceCard}>
              <FontAwesome5
                name="question"
                size={22}
                color="#f59e0b"
              />

              <Text style={styles.practiceTitle}>
                Quiz
              </Text>

              <Text style={styles.practiceSub}>
                8 Questions
              </Text>
            </Card>

            <Card style={styles.practiceCard}>
              <MaterialIcons
                name="code"
                size={24}
                color="#38bdf8"
              />

              <Text style={styles.practiceTitle}>
                Code
              </Text>

              <Text style={styles.practiceSub}>
                Practice
              </Text>
            </Card>

            <Card style={styles.practiceCard}>
              <Ionicons
                name="documents"
                size={22}
                color="#22c55e"
              />

              <Text style={styles.practiceTitle}>
                Notes
              </Text>

              <Text style={styles.practiceSub}>
                Review
              </Text>
            </Card>

          </View>

          {/* RESOURCES */}
          <Text style={styles.sectionTitle}>
            Resources
          </Text>

          <Card>

            <Text style={styles.listItem}>
              📘 Study Notes
            </Text>

            <TouchableOpacity
              onPress={() =>
                setScreen("videoTutorial")
              }
            >
              <Text style={styles.listItem}>
                🎥 Video Tutorials
              </Text>
            </TouchableOpacity>

            <Text style={styles.listItem}>
              📄 Documentation
            </Text>

            {/* CONTENT BUTTON */}
            <TouchableOpacity
              style={styles.contentButton}
              onPress={() =>
                setShowContent(
                  !showContent
                )
              }
            >

              <View style={styles.contentRow}>

                <Text style={styles.listItem}>
                  📄 Content
                </Text>

                <Ionicons
                  name={
                    showContent
                      ? "chevron-up"
                      : "chevron-down"
                  }
                  size={20}
                  color="#fff"
                />

              </View>

            </TouchableOpacity>

            {/* ========================= */}
            {/* DYNAMIC CONTENT */}
            {/* ========================= */}

            {showContent && (
              <View
                style={styles.topicContainer}
              >

                {course?.topics?.length >
                0 ? (

                  course.topics.map(
                    (topic) => {

                      const isOpen =
                        openTopicId ===
                        topic.id;

                      return (
                        <View
                          key={topic.id}
                          style={{
                            marginBottom: 12,
                          }}
                        >

                          {/* TOPIC */}
                          <TouchableOpacity
                            style={
                              styles.topicButton
                            }
                            onPress={() =>
                              setOpenTopicId(
                                isOpen
                                  ? null
                                  : topic.id
                              )
                            }
                          >

                            <View
                              style={
                                styles.topicRow
                              }
                            >

                              <Text
                                style={
                                  styles.topicText
                                }
                              >
                                {topic.name}
                              </Text>

                              <Ionicons
                                name={
                                  isOpen
                                    ? "remove-circle-outline"
                                    : "add-circle-outline"
                                }
                                size={22}
                                color="#38bdf8"
                              />

                            </View>

                          </TouchableOpacity>

                          {/* SUB TOPICS */}
                          {isOpen && (
                            <View
                              style={
                                styles.subTopicContainer
                              }
                            >

                              {topic
                                ?.subtopics
                                ?.length >
                              0 ? (

                                topic.subtopics.map(
                                  (
                                    subtopic
                                  ) => (
                                    <TouchableOpacity
                                      key={
                                        subtopic.id
                                      }
                                      style={
                                        styles.subTopicItem
                                      }
                                      onPress={() =>
                                        setScreen({
                                          screen:
                                            "videoTutorial",
                                          video:
                                            subtopic.video,
                                          title:
                                            subtopic.name,
                                        })
                                      }
                                    >

                                      <View
                                        style={{
                                          flexDirection:
                                            "row",
                                          justifyContent:
                                            "space-between",
                                          alignItems:
                                            "center",
                                        }}
                                      >

                                        <Text
                                          style={
                                            styles.subTopicText
                                          }
                                        >
                                          •{" "}
                                          {
                                            subtopic.name
                                          }
                                        </Text>

                                        <Ionicons
                                          name="play-circle"
                                          size={
                                            22
                                          }
                                          color="#38bdf8"
                                        />

                                      </View>

                                    </TouchableOpacity>
                                  )
                                )

                              ) : (
                                <Text
                                  style={{
                                    color:
                                      "#94a3b8",
                                  }}
                                >
                                  No lessons found
                                </Text>
                              )}

                            </View>
                          )}

                        </View>
                      );
                    }
                  )

                ) : (
                  <Text
                    style={{
                      color: "#cbd5f1",
                    }}
                  >
                    No content available
                  </Text>
                )}

              </View>
            )}

          </Card>

          {/* ACTIVITY */}
          <Text style={styles.sectionTitle}>
            Recent Activity
          </Text>

          <Card>

            <Text style={styles.listItem}>
              ✅ Completed "State &
              Props"
            </Text>

            <Text style={styles.listItem}>
              🏆 Passed "React Basics
              Quiz"
            </Text>

          </Card>

          <View style={{ height: 90 }} />

        </ScrollView>

        {/* BOTTOM NAV */}
        <View style={styles.navbar}>

          <Ionicons
            name="home"
            size={26}
            color="#fff"
          />

          <Ionicons
            name="book"
            size={26}
            color="#38bdf8"
          />

          <Ionicons
            name="bar-chart"
            size={26}
            color="#fff"
          />

          <Ionicons
            name="person"
            size={26}
            color="#fff"
          />

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
    backgroundColor:
      "rgba(255,255,255,0.06)",
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.08)",
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
    backgroundColor:
      "rgba(255,255,255,0.1)",
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
    paddingVertical: 8,
    color: "#e2e8f0",
    fontSize: 15,
  },

  contentButton: {
    marginTop: 4,
  },

  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  topicContainer: {
    marginTop: 10,
  },

  topicButton: {
    backgroundColor:
      "rgba(255,255,255,0.05)",
    padding: 12,
    borderRadius: 10,
  },

  topicRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  topicText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },

  subTopicContainer: {
    marginTop: 10,
    marginLeft: 14,
  },

  subTopicItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor:
      "rgba(255,255,255,0.05)",
  },

  subTopicText: {
    color: "#cbd5f1",
    fontSize: 14,
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 14,
    backgroundColor:
      "rgba(0,0,0,0.2)",
  },
});
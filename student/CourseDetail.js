import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Card = ({ children, style }) => (
  <View style={[styles.card, style]}>
    {children}
  </View>
);

export default function CourseDetail({
  course,
  onBack,
  setScreen,
  setVideoData,
}) {

  const [showContent, setShowContent] =
    useState(false);

  const [openTopicId, setOpenTopicId] =
    useState(null);

  const [courseData, setCourseData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (course?.id) {
      fetchCourseDetails();
    }
  }, [course?.id]);

  const fetchCourseDetails = async () => {
    try {

      const response = await fetch(
        `https://api.tzweb.in/api/showtopics/${course.id}`,
        {
          method: "GET",
          headers: {
            "x-api-key": "123456",
            "Content-Type":
              "application/json",
          },
        }
      );

      const result =
        await response.json();

      console.log(
        "COURSE DETAILS:",
        result
      );

      if (result.status) {
        setCourseData(result.data);
      }

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>

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
            {courseData?.name ||
              course?.name ||
              "Course"}
          </Text>

          {/* UPDATED REACT LOGO COLOR */}
          <Ionicons
            name="logo-react"
            size={28}
            color="#61DAFB"
          />

        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          {/* BANNER */}
          <Card style={styles.banner}>

            {/* UPDATED REACT LOGO COLOR */}
            <Ionicons
              name="logo-react"
              size={50}
              color="#61DAFB"
            />

            <View style={{ marginLeft: 12 }}>

              <Text style={styles.bannerTitle}>
                {course?.name || "Course"}
              </Text>

              <Text style={styles.bannerSubtitle}>
                Learn Modern Development
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
                color="#fff"
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
                color="#fff"
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
                name="document-text"
                size={22}
                color="#fff"
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

            {/* CONTENT */}
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

            {showContent && (
              <View
                style={styles.topicContainer}
              >

                {loading ? (

                  <Text
                    style={{
                      color: "#fff",
                    }}
                  >
                    Loading...
                  </Text>

                ) : courseData?.topics
                    ?.length > 0 ? (

                  courseData.topics.map(
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
                                color="#61DAFB"
                              />

                            </View>

                          </TouchableOpacity>

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
                                      onPress={() => {

                                        setVideoData(
                                          {
                                            title:
                                              subtopic.name,
                                            video:
                                              subtopic.video,
                                          }
                                        );

                                        setScreen(
                                          "videoTutorial"
                                        );
                                      }}
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
                                          size={24}
                                          color="#61DAFB"
                                        />

                                      </View>

                                    </TouchableOpacity>
                                  )
                                )

                              ) : (

                                <Text
                                  style={{
                                    color:
                                      "#aaa",
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
                      color: "#aaa",
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
              ✅ Completed State &
              Props
            </Text>

            <Text style={styles.listItem}>
              🏆 Passed React Quiz
            </Text>

          </Card>

          <View style={{ height: 100 }} />

        </ScrollView>

        {/* NAVBAR */}
        <View style={styles.navbar}>

          <Ionicons
            name="home"
            size={26}
            color="#fff"
          />

          <Ionicons
            name="book"
            size={26}
            color="#61DAFB"
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

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 20,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#111",
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#222",
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
    color: "#ccc",
    fontSize: 13,
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
    backgroundColor: "#333",
    borderRadius: 10,
    marginVertical: 10,
  },

  progressFill: {
    height: 8,
    backgroundColor: "#61DAFB",
    borderRadius: 10,
  },

  progressSub: {
    fontSize: 12,
    color: "#ccc",
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
    color: "#ccc",
    fontSize: 12,
  },

  button: {
    backgroundColor: "#61DAFB",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },

  buttonText: {
    color: "#000",
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
    color: "#ccc",
  },

  listItem: {
    paddingVertical: 8,
    color: "#fff",
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
    backgroundColor: "#1a1a1a",
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
    borderBottomColor: "#222",
  },

  subTopicText: {
    color: "#fff",
    fontSize: 14,
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 14,
    backgroundColor: "#111",
    borderTopWidth: 1,
    borderTopColor: "#222",
    
  },

});
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
  Animated,
} from "react-native";

export default function StudentDashboard({ onEnrollCourse }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // MENU STATE
  const [menuOpen, setMenuOpen] = useState(false);

  // THEME
  const [darkMode, setDarkMode] = useState(true);

  const theme = darkMode ? darkTheme : lightTheme;

  // MENU ANIMATION
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://api.tzweb.in/api/index",
          {
            method: "GET",
            headers: {
              "x-api-key": "123456",
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        console.log("API DATA:", data);

        setCourses(data.data || data);

        setLoading(false);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchCourses();
  }, []);

  // MENU TOGGLE
  const toggleMenu = () => {
    if (menuOpen) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    setMenuOpen(!menuOpen);
  };

  // START LEARNING
  const handleStartLearning = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to start learning?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            Alert.alert(
              "Success",
              "Welcome to the learning platform 🚀"
            );
          },
        },
      ]
    );
  };

  // MENU ITEM ACTION
  const handleMenuAction = (title) => {
    Alert.alert(title, `${title} clicked`);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: theme.bg },
        ]}
      >
        <StatusBar
          barStyle={
            darkMode
              ? "light-content"
              : "dark-content"
          }
        />

        {/* HEADER */}
        <View
          style={[
            styles.header,
            { backgroundColor: theme.primary },
          ]}
        >
          {/* DARK MODE BUTTON */}
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              { backgroundColor: theme.card,marginTop:25 },
            ]}
            onPress={() =>
              setDarkMode(!darkMode)
            }
          >
            <Text style={{ fontSize: 18 }}>
              {darkMode ? "☀️" : "🌙"}
            </Text>
          </TouchableOpacity>

          <Text
            style={[
              styles.headerTitle,
              { color: theme.text },
            ]}
          >
            Learn with
          </Text>

          <Text
            style={[
              styles.headerBig,
              { color: theme.text },
            ]}
          >
            Live Industry Classes
          </Text>

          <Text
            style={[
              styles.headerDesc,
              { color: theme.subText },
            ]}
          >
            Upgrade your skills with real-time
            expert sessions, practical assignments,
            and verified certificates.
          </Text>

          <View style={styles.headerButtons}>
            {/* JOIN BUTTON */}
            <TouchableOpacity
              style={[
                styles.joinBtn,
                { backgroundColor: theme.card },
              ]}
            >
              <Text
                style={{
                  color: theme.primary,
                  fontWeight: "bold",
                }}
              >
                Join Now
              </Text>
            </TouchableOpacity>

            {/* START LEARNING */}
            <TouchableOpacity
              style={[
                styles.startBtn,
                { borderColor: theme.text },
              ]}
              onPress={handleStartLearning}
            >
              <Text style={{ color: theme.text }}>
                Start Learning
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FEATURES */}
        <View style={styles.featureContainer}>
          <FeatureCard
            title="Live Classes"
            theme={theme}
          />

          <FeatureCard
            title="Recorded Classes"
            theme={theme}
          />

          <FeatureCard
            title="Assignments"
            theme={theme}
          />

          <FeatureCard
            title="Skill Tracking"
            theme={theme}
          />
        </View>

        {/* HOW IT WORKS */}
        <SectionTitle
          title="How It Works"
          theme={theme}
        />

        <View style={styles.howContainer}>
          <Step
            number="1"
            text="Register"
            theme={theme}
          />

          <Step
            number="2"
            text="Join Live Class"
            theme={theme}
          />

          <Step
            number="3"
            text="Complete Assignments"
            theme={theme}
          />

          <Step
            number="4"
            text="Get Certificate"
            theme={theme}
          />
        </View>

        {/* COURSES */}
        <SectionTitle
          title="Popular Courses"
          theme={theme}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {loading ? (
            <Text
              style={{
                color: theme.text,
                marginLeft: 20,
              }}
            >
              Loading...
            </Text>
          ) : (
            courses.map((course, index) => (
              <CourseCard
                key={index}
                course={course}
                theme={theme}
                onEnroll={onEnrollCourse}
              />
            ))
          )}
        </ScrollView>

        {/* MENTORS */}
        <SectionTitle
          title="Our Mentors"
          theme={theme}
        />

        <View style={styles.mentorContainer}>
          <MentorCard
            name="John Smith"
            role="Full Stack Developer"
            theme={theme}
          />

          <MentorCard
            name="Emily Williams"
            role="Frontend Expert"
            theme={theme}
          />
        </View>

        {/* TESTIMONIAL */}
        <SectionTitle
          title="Student Testimonials"
          theme={theme}
        />

        <View
          style={[
            styles.testimonial,
            { backgroundColor: theme.card },
          ]}
        >
          <Text style={{ color: theme.text }}>
            Great platform! Learned React easily.
          </Text>

          <Text
            style={{
              marginTop: 10,
              fontWeight: "bold",
              color: theme.text,
            }}
          >
            - Roc Cruz
          </Text>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={{ color: theme.text }}>
            About • Contact • Privacy • Terms
          </Text>
        </View>
      </ScrollView>

      {/* FLOATING MENU */}
      <View style={styles.floatingContainer}>
        {/* MENU ITEMS */}
        {menuOpen && (
          <Animated.View
            style={{
              transform: [
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1],
                  }),
                },
              ],
              opacity: animation,
            }}
          >
            <TouchableOpacity
              style={[
                styles.menuItem,
                { backgroundColor: theme.card },
              ]}
              onPress={() =>
                handleMenuAction("Profile")
              }
            >
              <Text style={styles.menuIcon}>
                👤
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.menuItem,
                { backgroundColor: theme.card },
              ]}
              onPress={() =>
                handleMenuAction("Courses")
              }
            >
              <Text style={styles.menuIcon}>
                📚
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.menuItem,
                { backgroundColor: theme.card },
              ]}
              onPress={() =>
                handleMenuAction("Settings")
              }
            >
              <Text style={styles.menuIcon}>
                ⚙️
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.menuItem,
                { backgroundColor: theme.card },
              ]}
              onPress={() =>
                handleMenuAction("Logout")
              }
            >
              <Text style={styles.menuIcon}>
                🚪
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {/* MAIN MENU BUTTON */}
        <TouchableOpacity
          style={[
            styles.menuButton,
            { backgroundColor: theme.primary },
          ]}
          onPress={toggleMenu}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 26,
              fontWeight: "bold",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* COMPONENTS */

const FeatureCard = ({ title, theme }) => (
  <View
    style={[
      styles.featureCard,
      { backgroundColor: theme.card },
    ]}
  >
    <Text style={{ color: theme.text }}>
      {title}
    </Text>
  </View>
);

const Step = ({ number, text, theme }) => (
  <View style={styles.step}>
    <View
      style={[
        styles.stepCircle,
        { backgroundColor: theme.primary },
      ]}
    >
      <Text style={{ color: "#fff" }}>
        {number}
      </Text>
    </View>

    <Text style={{ color: theme.text }}>
      {text}
    </Text>
  </View>
);

const CourseCard = ({
  course,
  theme,
  onEnroll,
}) => (
  <View
    style={[
      styles.courseCard,
      { backgroundColor: theme.card },
    ]}
  >
    <Image
      source={{ uri: course.image }}
      style={styles.courseImage}
    />

    <Text
      style={{
        color: theme.text,
        fontWeight: "bold",
      }}
    >
      {course.name}
    </Text>

    <Text style={{ color: theme.primary }}>
      Free
    </Text>

    <TouchableOpacity
      style={[
        styles.enrollBtn,
        { backgroundColor: theme.primary },
      ]}
      onPress={() => onEnroll(course)}
    >
      <Text style={{ color: "#fff" }}>
        Enroll Now
      </Text>
    </TouchableOpacity>
  </View>
);

const MentorCard = ({
  name,
  role,
  theme,
}) => (
  <View
    style={[
      styles.mentorCard,
      { backgroundColor: theme.card },
    ]}
  >
    <Text
      style={{
        color: theme.text,
        fontWeight: "bold",
      }}
    >
      {name}
    </Text>

    <Text style={{ color: theme.subText }}>
      {role}
    </Text>
  </View>
);

const SectionTitle = ({
  title,
  theme,
}) => (
  <Text
    style={[
      styles.sectionTitle,
      { color: theme.text },
    ]}
  >
    {title}
  </Text>
);

/* THEMES */

const darkTheme = {
  bg: "#000",
  text: "#fff",
  subText: "#ccc",
  primary: "#3b82f6",
  card: "#111",
};

const lightTheme = {
  bg: "#fff",
  text: "#000",
  subText: "#555",
  primary: "#2563eb",
  card: "#f3f4f6",
};

/* STYLES */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    padding: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  toggleBtn: {
    position: "absolute",
    right: 20,
    top: 20,
    padding: 8,
    borderRadius: 20,
  },

  headerTitle: {
    fontSize: 18,
    marginTop: 30,
  },

  headerBig: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8,
  },

  headerDesc: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 15,
  },

  headerButtons: {
    flexDirection: "row",
  },

  joinBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
  },

  startBtn: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },

  featureContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },

  featureCard: {
    width: "45%",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
  },

  howContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  step: {
    alignItems: "center",
    width: "40%",
    marginBottom: 20,
  },

  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },

  courseCard: {
    width: 220,
    borderRadius: 15,
    padding: 15,
    marginLeft: 15,
  },

  courseImage: {
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },

  enrollBtn: {
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },

  mentorContainer: {
    paddingHorizontal: 20,
  },

  mentorCard: {
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },

  testimonial: {
    margin: 20,
    padding: 18,
    borderRadius: 15,
  },

  footer: {
    alignItems: "center",
    padding: 20,
    marginBottom: 80,
  },

  /* FLOATING MENU */

  floatingContainer: {
    position: "absolute",
    right: 20,
    bottom: 40,
    alignItems: "center",
  },

  menuButton: {
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },

  menuItem: {
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    elevation: 5,
  },

  menuIcon: {
    fontSize: 24,
  },
});
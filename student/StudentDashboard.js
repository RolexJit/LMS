import React, { useState , useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function StudentDashboard({ onEnrollCourse }) {
const [courses, setCourses] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchCourses = async () => {
    try {
      const response = await fetch("https://api.tzweb.in/api/index", {
        method: "GET",
        headers: {
          "x-api-key": "123456",
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();
      console.log("API DATA:", data);

      setCourses(data.data || data); // adjust if needed
      setLoading(false);

    } catch (error) {
      console.error("API Error:", error);
    }
  };

  fetchCourses();
}, []);




  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <ScrollView
      key={darkMode ? "dark" : "light"}
      style={[styles.container, { backgroundColor: theme.bg }]}
    >
      <StatusBar
        key={darkMode ? "dark" : "light"}
        barStyle={darkMode ? "light-content" : "dark-content"}
      />

      {/* HEADER */}
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <TouchableOpacity
          style={[
            styles.toggleBtn,
            {
              backgroundColor: theme.card,
              padding: 8,
              borderRadius: 20,
            },
          ]}
          onPress={() => setDarkMode(!darkMode)}
        >
          <Text style={{ fontSize: 18 }}>
            {darkMode ? "☀️" : "🌙"}
          </Text>
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Learn with
        </Text>
        <Text style={[styles.headerBig, { color: theme.text }]}>
          Live Industry Classes
        </Text>
        <Text style={[styles.headerDesc, { color: theme.subText }]}>
          Upgrade your skills with real-time expert sessions,
          practical assignments, and verified certificates.
        </Text>

        <View style={styles.headerButtons}>
          <TouchableOpacity
            style={[
              styles.joinBtn,
              { backgroundColor: theme.card },
            ]}
          >
            <Text style={{ color: theme.primary, fontWeight: "bold" }}>
              Join Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.startBtn,
              { borderColor: theme.text },
            ]}
          >
            <Text style={{ color: theme.text }}>
              Start Learning
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FEATURES */}
      <View style={styles.featureContainer}>
        <FeatureCard title="Live Classes" theme={theme} />
        <FeatureCard title="Recorded Classes" theme={theme} />
        <FeatureCard title="Assignments" theme={theme} />
        <FeatureCard title="Skill Tracking" theme={theme} />
      </View>

      <SectionTitle title="How It Works" theme={theme} />

      <View style={styles.howContainer}>
        <Step number="1" text="Register" theme={theme} />
        <Step number="2" text="Join Live Class" theme={theme} />
        <Step number="3" text="Complete Assignments" theme={theme} />
        <Step number="4" text="Get Certificate" theme={theme} />
      </View>

      <SectionTitle title="Popular Courses" theme={theme} />

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {loading ? (
    <Text style={{ color: theme.text }}>Loading...</Text>
  ) : (
    courses.map((course, index) => (
      <CourseCard
        key={index}
        title={course.name}
        price={course.price || "Free"}
        img={course.image}
        theme={theme}
        onEnroll={onEnrollCourse}
      />
    ))
  )}
</ScrollView>

      <SectionTitle title="Our Mentors" theme={theme} />

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

      <SectionTitle title="Student Testimonials" theme={theme} />

      <View style={[styles.testimonial, { backgroundColor: theme.card }]}>
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

      <View style={styles.footer}>
        <Text style={{ color: theme.text }}>
          About   Contact   Privacy   Terms
        </Text>
      </View>
    </ScrollView>
  );
}

/* COMPONENTS */

const FeatureCard = ({ title, theme }) => (
  <View style={[styles.featureCard, { backgroundColor: theme.card }]}>
    <Text style={{ color: theme.text }}>{title}</Text>
  </View>
);

const Step = ({ number, text, theme }) => (
  <View style={styles.step}>
    <View
      style={[styles.stepCircle, { backgroundColor: theme.primary }]}
    >
      <Text style={{ color: "#fff" }}>{number}</Text>
    </View>
    <Text style={{ color: theme.text }}>{text}</Text>
  </View>
);

const CourseCard = ({ title, price, img, theme, onEnroll }) => (
  <View style={[styles.courseCard, { backgroundColor: theme.card }]}>
    <Image source={{ uri: img }} style={styles.courseImage} />
    <Text style={{ color: theme.text, fontWeight: "bold" }}>
      {title}
    </Text>
    <Text style={{ color: theme.primary }}>{price}</Text>

<TouchableOpacity
  style={[
    styles.enrollBtn,
    { backgroundColor: theme.primary },
  ]}
  onPress={() => onEnroll({ title, price, img })}
>
      <Text style={{ color: "#fff" }}>Enroll Now</Text>
    </TouchableOpacity>
  </View>
);

const MentorCard = ({ name, role, theme }) => (
  <View style={[styles.mentorCard, { backgroundColor: theme.card }]}>
    <Text style={{ color: theme.text, fontWeight: "bold" }}>
      {name}
    </Text>
    <Text style={{ color: theme.subText }}>{role}</Text>
  </View>
);

const SectionTitle = ({ title, theme }) => (
  <Text style={[styles.sectionTitle, { color: theme.text }]}>
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
  container: { flex: 1 },

  header: {
    padding: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  toggleBtn: {
    position: "absolute",
    right: 20,
    top: 20,
  },

  headerTitle: { fontSize: 18 },
  headerBig: { fontSize: 26, fontWeight: "bold", marginVertical: 5 },
  headerDesc: { fontSize: 14, marginBottom: 15 },

  headerButtons: { flexDirection: "row" },

  joinBtn: {
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  startBtn: {
    borderWidth: 1,
    padding: 10,
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
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 20,
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
    marginBottom: 15,
  },

  stepCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  courseCard: {
    width: 200,
    borderRadius: 15,
    padding: 15,
    marginLeft: 15,
  },

  courseImage: {
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },

  enrollBtn: {
    padding: 8,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },

  mentorContainer: { paddingHorizontal: 20 },

  mentorCard: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },

  testimonial: {
    margin: 20,
    padding: 15,
    borderRadius: 15,
  },

  footer: {
    alignItems: "center",
    padding: 20,
  },
});
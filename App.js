import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StudentDashboard from "./student/StudentDashboard";
import QuizDashboard from "./student/QuizDashboard";
import QuizScreen from "./student/QuizScreen";
import ResultScreen from "./student/ResultScreen";
import StudentChat from "./student/StudentChat";
import CourseDetail from "./student/CourseDetail";
import LaraCourseDetails from "./student/LaraCourseDetails";
import PhpCourseDetails from "./student/PhpCourseDetails";
import JavaCourseDetails from "./student/JavaCourseDetails";
import VideoTutorial from "./student/VideoTutorial";





import StudentSubjectReview from "./student/StudentSubjectReview";

import AssignmentScreen from "./student/StudentAssignment";
import StudentProfile from "./student/StudentProfile";
import StudentAttendance from "./student/StudentAttendance";
import StudentFees from "./student/StudentFees";
import SubjectScreen from "./student/StudentSubject";
import NoticeBoard from "./student/StudentNoticeboard";
import SemesterResult from "./student/SemesterResult";

import LoginScreen from "./login/LoginScreen";
import AdminDashboardScreen from "./admin/AdminDashboardScreen";
import TeacherDashboard from "./teacher/TeacherDashboard";
import StudyMaterials from "./teacher/study/StudyMaterials";
const Stack = createNativeStackNavigator();




export default function App() {
  
  const [user, setUser] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [screen, setScreen] = useState("home");
  const [category, setCategory] = useState("HTML");
const [videoData, setVideoData] = useState(null);
  const [scores, setScores] = useState({
    HTML: 0,
    JAVASCRIPT: 0,
    REACT: 0,
    "C++": 0,
    PYTHON: 0,
  });

  /* ===== LOGIN + ROLE SWITCH ===== */

  if (!user) {
    return <LoginScreen onLoginSuccess={setUser} />;
  }

  // if (user.role_id === 2) {
  //   return (
  //   <AdminDashboardScreen
  //     user={user}
  //     scores={scores}
  //     onLogout={() => setUser(null)}
  //   />
  // );
  // }

//   if (user.role_id === 1) {
//     return (
//     <TeacherDashboard
//   user={user}
//   onLogout={() => setUser(null)}
//   setScreen={setScreen}
// />
// );
//   }

  /* ===== STUDENT FLOW ===== */

  return (
    <>
   
      {/* HOME */}
      {screen === "home" && (
        <StudentDashboard
          user={user}
          scores={scores}
          setScreen={setScreen}
  
  onEnrollCourse={(course) => {
  setSelectedCourse(course);
  setScreen("courseDetail");
}}

          onOpenProfile={() => setScreen("profile")}
          onOpenAttendance={() => setScreen("attendance")}
        />
      )}
      {/* COURSE DETAIL */}
{screen === "courseDetail" && selectedCourse && (
<CourseDetail
  course={selectedCourse}
  setScreen={setScreen}
  setVideoData={setVideoData}
  onBack={() => setScreen("home")}
/>
)}

{screen === "videoTutorial" && (
  <VideoTutorial
    videoData={videoData}
    onBack={() => setScreen("courseDetail")}
  />
)}

{/* {screen === "LaraCourseDetails" && selectedCourse && (
  <LaraCourseDetails
    course={selectedCourse}
    onBack={() => setScreen("home")}
  />
)}
{screen === "PhpCourseDetails" && selectedCourse && (
  <PhpCourseDetails
    course={selectedCourse}
    onBack={() => setScreen("home")}
  />
)}
{screen === "JavaCourseDetails" && selectedCourse && (
  <JavaCourseDetails
    course={selectedCourse}
    onBack={() => setScreen("home")}
  />
)} */}

      {/* PROFILE */}
{screen === "profile" && (
  <StudentProfile
    user={user}
    onBack={() => setScreen("home")}
    onLogout={() => {
      setUser(null);
      setScreen("home");
    }}
    setScreen={setScreen}   // ✅ ADD THIS
    activeScreen={screen}
  />
)}
      {/* ASSIGNMENT */}
      {screen === "assignment" && (
        <AssignmentScreen

          onBack={() => setScreen("home")}
        />
      )}

      {/* ATTENDANCE */}
      {screen === "attendance" && (
        <StudentAttendance onBack={() => setScreen("home")} />
      )}
      {/* NOTICE */}
      {screen === "notice" && (
        <NoticeBoard onBack={() => setScreen("home")} />
      )}

      {/* FEES */}
      {screen === "fees" && (
        <StudentFees onBack={() => setScreen("home")} />
      )}

      {/* Chat */}
      {screen === "chat" && (
        <StudentChat onBack={() => setScreen("home")} />
      )}
      {/* Semester Result */}
      {screen === "semesterResult" && (
        <SemesterResult onBack={() => setScreen("home")} />
      )}
      {/* Student Result */}

      {screen === "review" && (
        <StudentSubjectReview onBack={() => setScreen("home")} />
      )}

      {/* Subject */}
      {screen === "subject" && (
        <SubjectScreen onBack={() => setScreen("home")} />
      )}
      {/* QUIZ DASHBOARD (NEW STEP) */}
      {screen === "quizDashboard" && (
        <QuizDashboard
          user={user}
          scores={scores}
          setScreen={setScreen}
          setCategory={setCategory}
          onStartQuiz={(cat) => {
            setCategory(cat);
            setScreen("quiz");
          }}
          onBack={() => setScreen("home")}
        />
      )}

     

      {/* RESULT */}
       {screen === "result" && (
        <ResultScreen
          score={scores[category]}
          category={category}
          onHome={() => setScreen("home")}
        />
      )}
      {/* RESULT */}
      {screen === "teacherStudyMaterials" && (
        <StudyMaterials
          setScreen={setScreen}
        />
      )}
    </>
  );
}
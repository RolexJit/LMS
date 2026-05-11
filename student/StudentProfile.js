import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import BottomNavigation from "../components/BottomNavigation";
export default function ProfileScreen({
  onBack,
  onOpenCourses,
  onOpenAttendance,
  onOpenProfile,
  activeScreen,
  setScreen,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>

          <View style={styles.headerIcons}>
            <Ionicons name="notifications-outline" size={22} color="#000" />
            <Ionicons name="settings-outline" size={22} color="#000" />
          </View>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileTop}>
            <Image
              source={{
                uri: "https://i.pravatar.cc/150?img=12",
              }}
              style={styles.profileImage}
            />

            <View style={{ marginLeft: 15, flex: 1 }}>
              <Text style={styles.profileName}>Arjun Sharma</Text>

              <Text style={styles.studentId}>Student ID: STU20240056</Text>

              <View style={styles.badgesContainer}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>🎓 Grade 11</Text>
                </View>

                <View style={styles.badge}>
                  <Text style={styles.badgeText}>⭐ Science Stream</Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.editPhotoBtn}>
            <Ionicons name="camera" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Menu Buttons */}
        <View style={styles.menuContainer}>
          <MenuItem icon="book" title="My Courses" />
          <MenuItem icon="calendar-month" title="Attendance" />
          <MenuItem icon="star" title="Grades" />
          <MenuItem icon="description" title="Certificates" />
        </View>

        {/* Personal Information */}
        <InfoSection title="Personal Information">
          <InfoRow label="Full Name" value="Arjun Sharma" />
          <InfoRow label="Email" value="arjun.sharma@example.com" />
          <InfoRow label="Mobile" value="+91 98765 43210" />
          <InfoRow label="Date of Birth" value="15 May 2007" />
          <InfoRow label="Gender" value="Male" />
          <InfoRow label="Address" value="221B Baker Street, London, UK" />
        </InfoSection>

        {/* Academic Information */}
        <InfoSection title="Academic Information">
          <InfoRow label="Student ID" value="STU20240056" />
          <InfoRow label="School / University" value="Greenfield High School" />
          <InfoRow label="Class / Grade" value="Grade 11" />
          <InfoRow label="Stream / Major" value="Science" />
          <InfoRow label="Year of Study" value="2024 - 2025" />
        </InfoSection>

        {/* Account & Security */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Account & Security</Text>
          </View>

          <TouchableOpacity style={styles.securityRow}>
            <Text style={styles.securityText}>Change Password</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.securityRow}>
            <View style={styles.linkedAccounts}>
              <Text style={styles.securityText}>Linked Accounts</Text>

              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <FontAwesome5
                  name="google"
                  size={16}
                  color="#DB4437"
                  style={{ marginHorizontal: 4 }}
                />
                <FontAwesome5
                  name="apple"
                  size={16}
                  color="#000"
                  style={{ marginHorizontal: 4 }}
                />
                <FontAwesome5
                  name="microsoft"
                  size={16}
                  color="#00A4EF"
                  style={{ marginHorizontal: 4 }}
                />
              </View>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Premium Card */}
        <View style={styles.premiumCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.premiumTitle}>Go Premium</Text>

            <Text style={styles.premiumText}>
              Unlock exclusive courses, content and features for your learning
              journey.
            </Text>

            <TouchableOpacity style={styles.premiumBtn}>
              <Text style={styles.premiumBtnText}>Upgrade Now</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
            }}
            style={styles.premiumImage}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>

<BottomNavigation
  onBack={() => setScreen("home")}
  onOpenCourses={() => setScreen("home")}
  onOpenAttendance={() => setScreen("attendance")}
  onOpenProfile={() => setScreen("profile")}
  activeScreen={activeScreen}
/>

      </View>
    </SafeAreaView>
  );
}

/* ---------------- COMPONENTS ---------------- */

const MenuItem = ({ icon, title }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <MaterialIcons name={icon} size={26} color="#6C4EFF" />
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
};

const InfoSection = ({ title, children }) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>

        <TouchableOpacity>
          <Text style={styles.editText}>Edit ✏️</Text>
        </TouchableOpacity>
      </View>

      {children}
    </View>
  );
};

const InfoRow = ({ label, value }) => {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
};



/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },

  headerIcons: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },

  profileCard: {
    backgroundColor: "#000",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    position: "relative",
  },

  profileTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },

  profileName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  studentId: {
    color: "#ddd",
    marginTop: 4,
    fontSize: 13,
  },

  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  badge: {
    backgroundColor: "#222",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
  },

  editPhotoBtn: {
    position: "absolute",
    bottom: 18,
    left: 72,
    backgroundColor: "#6C4EFF",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },

  menuItem: {
    backgroundColor: "#fff",
    width: "23%",
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  menuText: {
    fontSize: 11,
    marginTop: 8,
    textAlign: "center",
    color: "#000",
    fontWeight: "600",
  },

  section: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 18,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },

  editText: {
    color: "#6C4EFF",
    fontWeight: "600",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  infoLabel: {
    color: "#666",
    width: "40%",
    fontSize: 13,
  },

  infoValue: {
    color: "#000",
    width: "58%",
    textAlign: "right",
    fontWeight: "500",
    fontSize: 13,
  },

  securityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  securityText: {
    fontSize: 15,
    color: "#000",
    fontWeight: "500",
  },

  linkedAccounts: {
    flexDirection: "row",
    alignItems: "center",
  },

  premiumCard: {
    backgroundColor: "#111",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  premiumTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },

  premiumText: {
    color: "#ccc",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 15,
  },

  premiumBtn: {
    backgroundColor: "#6C4EFF",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  premiumBtnText: {
    color: "#fff",
    fontWeight: "700",
  },

  premiumImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },




});
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";
const BottomItem = ({ icon, label, active, onPress }) => {
  return (
    <TouchableOpacity style={styles.bottomItem} onPress={onPress}>
      <Ionicons
        name={icon}
        size={24}
        color={active ? "#2563eb" : "#777"}
      />

      <Text
        style={{
          color: active ? "#2563eb" : "#777",
          fontSize: 12,
          marginTop: 4,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const BottomNavigation = ({
  onBack,
  onOpenCourses,
  onOpenAttendance,
  onOpenProfile,
    activeScreen = "home",   
}) => {
  return (
    <View style={styles.bottomNav}>
      <BottomItem
        icon="home-outline"
        label="Home"
        active={activeScreen === "home"}
        onPress={onBack}
      />

      <BottomItem
        icon="book-outline"
        label="Courses"
        active={activeScreen === "home"}
        onPress={onOpenCourses}
      />

      <BottomItem
        icon="calendar-outline"
        label="Attendance"
        active={activeScreen === "attendance"}
        onPress={onOpenAttendance}
      />

      <BottomItem
        icon="person"
        label="Profile"
        active={activeScreen === "profile"}
        onPress={onOpenProfile}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },

  bottomItem: {
    alignItems: "center",
  },

  bottomText: {
    marginTop: 4,
    fontSize: 12,
    color: "#999",
  },
});

export default BottomNavigation;